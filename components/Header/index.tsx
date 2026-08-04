"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavLink = {
    label: string,
    href: string
}

export function Header() {
    const [isHidden, setIsHidden] = useState(false);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    const NAV_LINKS: NavLink[] = [
        { label: "Work", href: "#works" },
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" },
    ]

    useEffect(() => {
        lastScrollY.current = window.scrollY;

        function updateHeader() {
            const currentScrollY = window.scrollY;
            const isScrollingDown = currentScrollY > lastScrollY.current;

            if (currentScrollY < 80) {
                setIsHidden(false);
            } else if (Math.abs(currentScrollY - lastScrollY.current) > 6) {
                setIsHidden(isScrollingDown);
            }

            lastScrollY.current = currentScrollY;
            ticking.current = false;
        }

        function handleScroll() {
            if (!ticking.current) {
                window.requestAnimationFrame(updateHeader);
                ticking.current = true;
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`fixed left-0 top-0 z-50 w-full bg-background/95 transition-transform duration-300 ease-out ${isHidden ? "-translate-y-full" : "translate-y-0"}`}>
                <div className="container px-8 py-4.25 flex justify-between items-center">
                    <Link href="/" className="font-heading color-heading text-[24px] font-extrabold">SP</Link>
                    <nav className="flex gap-9 items-center font-body color-body">
                        {
                            NAV_LINKS.map(link => (
                                <Link className="font-label text-body tracking-wide" key={link.label} href={link.href}>
                                    {link.label.toUpperCase()}
                                </Link>
                            ))
                        }
                    </nav>
                </div>
            </header>
            <div className="h-[61px]" aria-hidden="true"></div>
        </>

    );
}
