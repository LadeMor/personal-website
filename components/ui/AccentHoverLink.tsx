"use client";

import type { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import { motion } from "motion/react";

type AccentHoverLinkProps = {
    href: string;
    children: ReactNode;
    icon?: ReactNode;
    className?: string;
    contentClassName?: string;
    labelClassName?: string;
    variant?: "dark" | "light" | "reverse";
    iconDirection?: "down" | "right" | "none";
    download?: boolean | string;
    restColor?: string;
    hoverColor?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    smoothScroll?: boolean;
};

const MotionLink = motion.create(Link);
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const VARIANTS = {
    dark: {
        baseClassName: "bg-surface-dark",
        overlayClassName: "bg-accent",
        restColor: "#F2EFE7",
        hoverColor: "#111111",
    },
    light: {
        baseClassName: "bg-transparent",
        overlayClassName: "bg-accent",
        restColor: "#111111",
        hoverColor: "#111111",
    },
    reverse: {
        baseClassName: "bg-accent",
        overlayClassName: "bg-surface-dark",
        restColor: "#111111",
        hoverColor: "#F2EFE7",
    },
} as const;

export function AccentHoverLink({
    href,
    children,
    icon,
    className = "",
    contentClassName = "gap-2.5",
    labelClassName = "font-label text-[12px] tracking-wide",
    variant = "dark",
    iconDirection = "right",
    download,
    restColor,
    hoverColor,
    onClick,
    smoothScroll = false,
}: AccentHoverLinkProps) {
    const colors = VARIANTS[variant];
    const iconHover = iconDirection === "down"
        ? { x: 0, y: 2 }
        : iconDirection === "right"
            ? { x: 3, y: 0 }
            : { x: 0, y: 0 };

    const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
        onClick?.(event);

        if (event.defaultPrevented || !smoothScroll || !href.startsWith("#")) {
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            event.preventDefault();
            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            target.scrollIntoView({
                behavior: reduceMotion ? "auto" : "smooth",
                block: "start",
            });
            window.history.pushState(null, "", href);
        }
    };

    return (
        <MotionLink
            href={href}
            download={download}
            onClick={handleClick}
            className={`relative isolate inline-flex overflow-hidden ${colors.baseClassName} ${className}`}
            initial="rest"
            animate="rest"
            whileHover="hover"
            whileFocus="hover"
            whileTap={{ scale: 0.98 }}
        >
            <motion.span
                className={`absolute inset-0 z-0 origin-left ${colors.overlayClassName}`}
                aria-hidden="true"
                variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                }}
                transition={{ duration: 0.42, ease: EASE }}
            />

            <motion.span
                className={`relative z-10 flex items-center justify-center ${contentClassName}`}
                variants={{
                    rest: { color: restColor ?? colors.restColor },
                    hover: { color: hoverColor ?? colors.hoverColor },
                }}
                transition={{ duration: 0.24, ease: EASE }}
            >
                <span className={labelClassName}>{children}</span>
                {icon ? (
                    <motion.span
                        className="flex"
                        variants={{ rest: { x: 0, y: 0 }, hover: iconHover }}
                        transition={{ duration: 0.24, ease: EASE }}
                    >
                        {icon}
                    </motion.span>
                ) : null}
            </motion.span>
        </MotionLink>
    );
}
