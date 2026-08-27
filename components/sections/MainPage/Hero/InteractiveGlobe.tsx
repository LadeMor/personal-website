"use client";

import { useEffect, useRef } from "react";
import type { BufferAttribute, BufferGeometry, Vector3 } from "three";

type ThreeModule = typeof import("three");

export type InteractiveGlobeProps = {
    className?: string;
    lineColor?: string;
    accentColor?: string;
    lineOpacity?: number;
    accentOpacity?: number;
    rotationSpeed?: number;
    interactionStrength?: number;
    latitudeLines?: number;
    longitudeLines?: number;
    accentDensity?: number;
    accentCycleDuration?: number;
    accentTransitionSpeed?: number;
    mobileBreakpoint?: number;
};

type GlobeGeometry = {
    lines: BufferGeometry;
    accentAttribute: BufferAttribute;
    segmentCount: number;
};

const DEFAULT_LINE_COLOR = "#7A7871";
const DEFAULT_ACCENT_COLOR = "#B7FF3C";

const GLOBE_VERTEX_SHADER = `
    attribute float accentMix;
    varying float vAccentMix;

    void main() {
        vAccentMix = accentMix;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const GLOBE_FRAGMENT_SHADER = `
    uniform vec3 baseColor;
    uniform vec3 accentColor;
    uniform float baseOpacity;
    uniform float accentOpacity;
    varying float vAccentMix;

    void main() {
        vec3 color = mix(baseColor, accentColor, vAccentMix);
        float opacity = mix(baseOpacity, accentOpacity, vAccentMix);
        gl_FragColor = vec4(color, opacity);
        #include <colorspace_fragment>
    }
`;

function isAccentSegment(
    direction: number,
    primaryIndex: number,
    secondaryIndex: number,
    density: number,
) {
    let hash = Math.imul(direction + 1, 73_856_093);
    hash ^= Math.imul(primaryIndex + 1, 19_349_663);
    hash ^= Math.imul(secondaryIndex + 1, 83_492_791);

    return (hash >>> 0) % 1_000 < density * 1_000;
}

function pointOnSphere(
    THREE: ThreeModule,
    phi: number,
    theta: number,
    radius: number,
) {
    const sinPhi = Math.sin(phi);

    return new THREE.Vector3(
        radius * sinPhi * Math.cos(theta),
        radius * Math.cos(phi),
        radius * sinPhi * Math.sin(theta),
    );
}

function createGlobeGeometry(
    THREE: ThreeModule,
    latitudeLines: number,
    longitudeLines: number,
    accentDensity: number,
): GlobeGeometry {
    const radius = 1;
    const positions: number[] = [];
    const accentMixes: number[] = [];

    function addSegment(
        start: Vector3,
        end: Vector3,
        accent: boolean,
    ) {
        positions.push(start.x, start.y, start.z, end.x, end.y, end.z);
        const accentMix = accent ? 1 : 0;
        accentMixes.push(accentMix, accentMix);
    }

    // Parallels are split at each meridian so selected cells can use the accent color.
    for (let latitude = 1; latitude < latitudeLines; latitude += 1) {
        const phi = Math.PI * (latitude / latitudeLines);

        for (let longitude = 0; longitude < longitudeLines; longitude += 1) {
            const thetaStart = Math.PI * 2 * (longitude / longitudeLines);
            const thetaEnd = Math.PI * 2 * ((longitude + 1) / longitudeLines);

            addSegment(
                pointOnSphere(THREE, phi, thetaStart, radius),
                pointOnSphere(THREE, phi, thetaEnd, radius),
                isAccentSegment(0, latitude, longitude, accentDensity),
            );
        }
    }

    // Meridians use the same latitude divisions, producing the rectangular grid.
    for (let longitude = 0; longitude < longitudeLines; longitude += 1) {
        const theta = Math.PI * 2 * (longitude / longitudeLines);

        for (let latitude = 0; latitude < latitudeLines; latitude += 1) {
            const phiStart = Math.PI * (latitude / latitudeLines);
            const phiEnd = Math.PI * ((latitude + 1) / latitudeLines);

            addSegment(
                pointOnSphere(THREE, phiStart, theta, radius),
                pointOnSphere(THREE, phiEnd, theta, radius),
                isAccentSegment(1, longitude, latitude, accentDensity),
            );
        }
    }

    const lines = new THREE.BufferGeometry();
    const accentAttribute = new THREE.Float32BufferAttribute(accentMixes, 1);
    accentAttribute.setUsage(THREE.DynamicDrawUsage);
    lines.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    lines.setAttribute("accentMix", accentAttribute);

    return {
        lines,
        accentAttribute,
        segmentCount: accentMixes.length / 2,
    };
}

export function InteractiveGlobe({
    className = "",
    lineColor,
    accentColor,
    lineOpacity = 0.38,
    accentOpacity = 0.9,
    rotationSpeed = 0.12,
    interactionStrength = 0.24,
    latitudeLines = 20,
    longitudeLines = 32,
    accentDensity = 0.075,
    accentCycleDuration = 1.8,
    accentTransitionSpeed = 4.5,
    mobileBreakpoint = 768,
}: InteractiveGlobeProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) {
            return;
        }

        const hostElement: HTMLDivElement = container;
        let cancelled = false;
        let teardown: (() => void) | undefined;

        async function setup() {
            const THREE = await import("three");
    
            if (cancelled) {
                return;
            }
    
            const rootStyles = getComputedStyle(document.documentElement);
            const resolvedLineColor = (
                lineColor ?? rootStyles.getPropertyValue("--text-muted").trim()
            ) || DEFAULT_LINE_COLOR;
            const resolvedAccentColor = (
                accentColor ?? rootStyles.getPropertyValue("--accent").trim()
            ) || DEFAULT_ACCENT_COLOR;
    
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 20);
            camera.position.z = 3.65;
    
            const renderer = new THREE.WebGLRenderer({
                alpha: true,
                antialias: true,
                powerPreference: "high-performance",
            });
            renderer.setClearAlpha(0);
            renderer.outputColorSpace = THREE.SRGBColorSpace;
            renderer.domElement.style.display = "block";
            renderer.domElement.style.height = "100%";
            renderer.domElement.style.width = "100%";
            hostElement.appendChild(renderer.domElement);
    
            const globe = new THREE.Group();
            globe.rotation.set(-0.08, -0.45, -0.08);
            scene.add(globe);
    
            const geometry = createGlobeGeometry(
                THREE,
                Math.max(8, Math.round(latitudeLines)),
                Math.max(12, Math.round(longitudeLines)),
                THREE.MathUtils.clamp(accentDensity, 0, 0.35),
            );
    
            const lineMaterial = new THREE.ShaderMaterial({
                uniforms: {
                    baseColor: { value: new THREE.Color(resolvedLineColor) },
                    accentColor: { value: new THREE.Color(resolvedAccentColor) },
                    baseOpacity: { value: THREE.MathUtils.clamp(lineOpacity, 0, 1) },
                    accentOpacity: { value: THREE.MathUtils.clamp(accentOpacity, 0, 1) },
                },
                vertexShader: GLOBE_VERTEX_SHADER,
                fragmentShader: GLOBE_FRAGMENT_SHADER,
                transparent: true,
                depthTest: true,
                depthWrite: false,
                toneMapped: false,
            });
    
            const lines = new THREE.LineSegments(geometry.lines, lineMaterial);
            lines.renderOrder = 1;
            globe.add(lines);
    
            // A colorless inner sphere writes only depth and hides the rear grid.
            const occluderGeometry = new THREE.SphereGeometry(0.985, 40, 28);
            const occluderMaterial = new THREE.MeshBasicMaterial({
                colorWrite: false,
                depthWrite: true,
                side: THREE.FrontSide,
            });
            const occluder = new THREE.Mesh(occluderGeometry, occluderMaterial);
            occluder.renderOrder = 0;
            globe.add(occluder);
    
            const pointer = new THREE.Vector2();
            const pointerTarget = new THREE.Vector2();
            const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
            const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
            const accentValues = geometry.accentAttribute.array as Float32Array;
            const accentTargets = new Float32Array(geometry.segmentCount);
            const nextAccentChanges = new Float32Array(geometry.segmentCount);
            const safeAccentDensity = THREE.MathUtils.clamp(accentDensity, 0, 0.35);
            const safeCycleDuration = Math.max(0.25, accentCycleDuration);
            const safeTransitionSpeed = Math.max(0.1, accentTransitionSpeed);
            const activationChance = safeAccentDensity / Math.max(1 - safeAccentDensity, 0.01);
            let interactionEnabled = false;
            let automaticRotation = globe.rotation.y;
            let accentElapsed = 0;
            let frameId = 0;
            let boundsFrameId = 0;
            let isVisible = true;
            let previousTime = performance.now();
            let pointerBounds = hostElement.getBoundingClientRect();
    
            for (let segment = 0; segment < geometry.segmentCount; segment += 1) {
                accentTargets[segment] = accentValues[segment * 2];
                nextAccentChanges[segment] = Math.random() * safeCycleDuration;
            }
    
            function updateInteractionMode() {
                interactionEnabled = window.innerWidth > mobileBreakpoint && finePointerQuery.matches;
    
                if (!interactionEnabled) {
                    pointerTarget.set(0, 0);
                }
            }
    
            function resize() {
                pointerBounds = hostElement.getBoundingClientRect();
                const { width, height } = pointerBounds;
    
                if (width <= 0 || height <= 0) {
                    return;
                }
    
                const pixelRatioLimit = window.innerWidth <= mobileBreakpoint ? 1 : 1.5;
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, pixelRatioLimit));
                renderer.setSize(Math.round(width), Math.round(height), false);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                updateInteractionMode();
            }
    
            function handlePointerMove(event: PointerEvent) {
                if (!interactionEnabled) {
                    return;
                }
    
                const bounds = pointerBounds;
                const isInside = event.clientX >= bounds.left
                    && event.clientX <= bounds.right
                    && event.clientY >= bounds.top
                    && event.clientY <= bounds.bottom;
    
                if (!isInside) {
                    pointerTarget.set(0, 0);
                    return;
                }
    
                pointerTarget.set(
                    THREE.MathUtils.clamp(((event.clientX - bounds.left) / bounds.width) * 2 - 1, -1, 1),
                    THREE.MathUtils.clamp(((event.clientY - bounds.top) / bounds.height) * 2 - 1, -1, 1),
                );
            }
    
            function updatePointerBounds() {
                boundsFrameId = 0;
                pointerBounds = hostElement.getBoundingClientRect();
            }
    
            function schedulePointerBoundsUpdate() {
                if (boundsFrameId) {
                    return;
                }
    
                boundsFrameId = window.requestAnimationFrame(updatePointerBounds);
            }
    
            function render(time: number) {
                const delta = Math.min((time - previousTime) / 1_000, 0.05);
                previousTime = time;
    
                const motionMultiplier = reducedMotionQuery.matches ? 0.22 : 1;
                automaticRotation += rotationSpeed * motionMultiplier * delta;
                pointer.lerp(pointerTarget, 1 - Math.pow(0.001, delta));
    
                const accentMotionMultiplier = reducedMotionQuery.matches ? 0.4 : 1;
                const accentEasing = 1 - Math.exp(
                    -safeTransitionSpeed * accentMotionMultiplier * delta,
                );
                accentElapsed += delta * accentMotionMultiplier;
                let accentChanged = false;
    
                for (let segment = 0; segment < geometry.segmentCount; segment += 1) {
                    if (accentElapsed >= nextAccentChanges[segment]) {
                        if (accentTargets[segment] > 0.5) {
                            accentTargets[segment] = 0;
                        } else if (Math.random() < activationChance) {
                            accentTargets[segment] = 1;
                        }
    
                        nextAccentChanges[segment] = accentElapsed
                            + safeCycleDuration * (0.55 + Math.random() * 1.1);
                    }
    
                    const valueIndex = segment * 2;
                    const currentValue = accentValues[valueIndex];
                    const nextValue = THREE.MathUtils.lerp(
                        currentValue,
                        accentTargets[segment],
                        accentEasing,
                    );
    
                    if (Math.abs(nextValue - currentValue) > 0.0001) {
                        accentValues[valueIndex] = nextValue;
                        accentValues[valueIndex + 1] = nextValue;
                        accentChanged = true;
                    }
                }
    
                if (accentChanged) {
                    geometry.accentAttribute.needsUpdate = true;
                }
    
                globe.rotation.x = -0.08 - pointer.y * interactionStrength * motionMultiplier;
                globe.rotation.y = automaticRotation + pointer.x * interactionStrength * motionMultiplier;
                globe.rotation.z = -0.08 + pointer.x * interactionStrength * 0.2 * motionMultiplier;
    
                renderer.render(scene, camera);
                frameId = window.requestAnimationFrame(render);
            }
    
            function startRendering() {
                if (frameId || !isVisible || document.hidden) {
                    return;
                }
    
                previousTime = performance.now();
                frameId = window.requestAnimationFrame(render);
            }
    
            function stopRendering() {
                if (!frameId) {
                    return;
                }
    
                window.cancelAnimationFrame(frameId);
                frameId = 0;
            }
    
            function handleVisibilityChange() {
                if (document.hidden) {
                    stopRendering();
                } else {
                    startRendering();
                }
            }
    
            const resizeObserver = new ResizeObserver(resize);
            const intersectionObserver = new IntersectionObserver(([entry]) => {
                isVisible = entry.isIntersecting;
    
                if (isVisible) {
                    startRendering();
                } else {
                    stopRendering();
                }
            }, { threshold: 0.01 });
    
            resizeObserver.observe(hostElement);
            intersectionObserver.observe(hostElement);
            window.addEventListener("pointermove", handlePointerMove, { passive: true });
            window.addEventListener("resize", updateInteractionMode, { passive: true });
            window.addEventListener("scroll", schedulePointerBoundsUpdate, { passive: true });
            finePointerQuery.addEventListener("change", updateInteractionMode);
            document.addEventListener("visibilitychange", handleVisibilityChange);
    
            resize();
            startRendering();
    
            teardown = () => {
                stopRendering();
                if (boundsFrameId) {
                    window.cancelAnimationFrame(boundsFrameId);
                }
                resizeObserver.disconnect();
                intersectionObserver.disconnect();
                window.removeEventListener("pointermove", handlePointerMove);
                window.removeEventListener("resize", updateInteractionMode);
                window.removeEventListener("scroll", schedulePointerBoundsUpdate);
                finePointerQuery.removeEventListener("change", updateInteractionMode);
                document.removeEventListener("visibilitychange", handleVisibilityChange);
    
                geometry.lines.dispose();
                occluderGeometry.dispose();
                lineMaterial.dispose();
                occluderMaterial.dispose();
                renderer.dispose();
                renderer.domElement.remove();
            };
            }

        void setup().catch((error) => {
            if (!cancelled) {
                console.error("Failed to initialize the interactive globe", error);
            }
        });

        return () => {
            cancelled = true;
            teardown?.();
        };
    }, [
        accentColor,
        accentCycleDuration,
        accentDensity,
        accentOpacity,
        accentTransitionSpeed,
        interactionStrength,
        latitudeLines,
        lineColor,
        lineOpacity,
        longitudeLines,
        mobileBreakpoint,
        rotationSpeed,
    ]);

    return (
        <div
            ref={containerRef}
            className={`pointer-events-none ${className}`}
            aria-hidden="true"
        />
    );
}
