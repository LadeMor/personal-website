"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export type RevealDirection = "up" | "down" | "left" | "right" | "none";

export type RevealProps = {
    children: ReactNode;
    className?: string;
    as?: "div" | "span" | "article";
    direction?: RevealDirection;
    distance?: number;
    delay?: number;
    duration?: number;
    blur?: number;
    scale?: number;
    once?: boolean;
    amount?: number | "some" | "all";
    disabled?: boolean;
};

const REVEAL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function getInitialOffset(direction: RevealDirection, distance: number) {
    switch (direction) {
        case "down":
            return { x: 0, y: -distance };
        case "left":
            return { x: -distance, y: 0 };
        case "right":
            return { x: distance, y: 0 };
        case "none":
            return { x: 0, y: 0 };
        case "up":
        default:
            return { x: 0, y: distance };
    }
}

export function Reveal({
    children,
    className,
    as = "div",
    direction = "up",
    distance = 28,
    delay = 0,
    duration = 0.8,
    blur = 0,
    scale = 1,
    once = true,
    amount = 0.2,
    disabled = false,
}: RevealProps) {
    const shouldReduceMotion = useReducedMotion();
    const shouldAnimate = !disabled && !shouldReduceMotion;
    const offset = getInitialOffset(direction, distance);
    const initial = {
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale,
        filter: blur > 0 ? `blur(${blur}px)` : "blur(0px)",
    };
    const visible = {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
    };
    const animationProps = {
        initial: shouldAnimate ? initial : false,
        whileInView: shouldAnimate ? visible : undefined,
        viewport: { once, amount },
        transition: { duration, delay, ease: REVEAL_EASE },
    };

    if (as === "span") {
        return (
            <motion.span className={className} {...animationProps}>
                {children}
            </motion.span>
        );
    }

    if (as === "article") {
        return (
            <motion.article className={className} {...animationProps}>
                {children}
            </motion.article>
        );
    }

    return (
        <motion.div className={className} {...animationProps}>
            {children}
        </motion.div>
    );
}
