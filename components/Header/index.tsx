"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";

type NavLink = {
    label: string,
    href: string
}

export function Header() {
    const [isHidden, setIsHidden] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
                <div className="container flex items-center justify-between px-8 py-4 sm:px-10">
                    <Link href="/" className="font-heading text-heading text-[24px] font-extrabold">SP</Link>
                    <nav className="hidden items-center gap-9 font-body color-body md:flex">
                        {
                            NAV_LINKS.map(link => (
                                <Link className="font-label text-body tracking-wide" key={link.label} href={link.href}>
                                    {link.label.toUpperCase()}
                                </Link>
                            ))
                        }
                    </nav>
                    <button
                        className="inline-flex items-center gap-3 font-label text-heading text-[12px] tracking-wide uppercase md:hidden"
                        type="button"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                    >
                        Menu
                        <Menu size={24} strokeWidth={1.7} aria-hidden="true" />
                    </button>
                </div>
                <nav
                    id="mobile-navigation"
                    className={`border-t border-muted bg-background px-8 py-5 md:hidden ${isMenuOpen ? "grid" : "hidden"}`}
                >
                    {
                        NAV_LINKS.map(link => (
                            <Link
                                className="border-b border-muted py-3 font-label text-body text-[12px] tracking-wide"
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label.toUpperCase()}
                            </Link>
                        ))
                    }
                </nav>
            </header>
            <div className="h-[61px]" aria-hidden="true"></div>
        </>

    );
}
