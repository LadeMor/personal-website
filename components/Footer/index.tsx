import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-background-secondary">
            <div className="container px-6 pt-8 pb-16 sm:px-10 sm:pb-22">
                <div className="flex flex-col gap-5 border-t border-t-muted pt-8 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
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
