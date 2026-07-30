import Link from "next/link";

type NavLink = {
    label: string,
    href: string
}

export function Header() {

    const NAV_LINKS: NavLink[] = [
        { label: "Work", href: "/" },
        { label: "About", href: "/" },
        { label: "Experience", href: "/" },
        { label: "Contact", href: "/" },
    ]

    return (
        <header className="container px-8 py-4.25 flex justify-between items-center mb-6.75">
            <Link href="/" className="font-heading color-heading text-[20px]">SP</Link>
            <nav className="flex gap-9 items-center font-body color-body">
                {
                    NAV_LINKS.map(link => (
                        <Link className="font-label text-body tracking-wide" key={link.label} href={link.href}>
                            {link.label.toUpperCase()}
                        </Link>
                    ))
                }
            </nav>
        </header>

    );
}