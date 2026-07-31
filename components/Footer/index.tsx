import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-background-secondary">
            <div className="container px-10 pt-8 pb-22">
                <div className="border-t border-t-muted pt-8 flex items-start justify-between">
                    <p className="font-label text-muted text-[12px] tracking-wide uppercase">© 2026 Serhii Piatko</p>
                    <p className="font-label text-muted text-[12px] tracking-wide uppercase">Designed & Built in Ukraine</p>
                    <Link href="#top" className="font-label text-muted text-[12px] tracking-wide uppercase">
                        Back to Top ↑
                    </Link>
                </div>
            </div>
        </footer>
    );
}
