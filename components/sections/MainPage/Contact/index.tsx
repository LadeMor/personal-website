import Link from "next/link";

const socialLinks = [
    {
        label: "GitHub",
        value: "@serhiipiatko",
        href: "https://github.com/serhiipiatko",
    },
    {
        label: "LinkedIn",
        value: "Serhii Piatko",
        href: "https://www.linkedin.com/",
    },
];

export function Contact() {
    return (
        <section id="contact" className="bg-background-secondary">
            <div className="container px-10 pt-24 pb-18 border-t border-t-muted">
                <div className="mb-16">
                    <p className="font-label text-muted text-[12px] tracking-[0.45em] uppercase mb-11">Contact</p>
                    <h2 className="font-heading text-heading text-[112px]/[100px] tracking-tight font-extrabold mb-10 max-w-[520px]">
                        LET&apos;S BUILD SOMETHING ALIVE
                    </h2>
                    <div className="w-10 h-px bg-accent"></div>
                </div>

                <div className="grid grid-cols-[1fr_0.95fr] gap-20 items-start pb-18">
                    <div className="pt-2">
                        <div className="mb-12">
                            <p className="font-label text-muted text-[12px] tracking-[0.45em] uppercase mb-5">Email</p>
                            <Link href="mailto:sergpyatko@gmail.com" className="font-heading text-heading text-[44px]/[48px] tracking-tight font-extrabold">
                                sergpyatko@gmail.com
                            </Link>
                        </div>

                        <div className="max-w-[640px]">
                            <p className="font-label text-muted text-[12px] tracking-[0.45em] uppercase mb-4">Elsewhere</p>
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="grid grid-cols-[1fr_auto] border-b border-b-muted py-3"
                                >
                                    <span className="font-label text-muted text-[13px] tracking-wide">{link.label}</span>
                                    <span className="font-body text-body text-[16px]">{link.value}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="bg-surface-dark px-10 py-10 mb-6">
                            <p className="font-label text-on-dark-subheading text-[12px] tracking-[0.45em] uppercase mb-7">Status</p>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                <p className="font-body text-on-dark-heading text-[18px]">Available for new projects</p>
                            </div>
                            <p className="font-body text-on-dark-body text-[15px]/[25px] max-w-[560px] mb-8">
                                Currently open to full-time roles and selected freelance engagements. Based in Berlin, open to remote or hybrid work.
                            </p>
                            <Link href="/" className="bg-accent px-6 py-4 inline-flex items-center gap-4">
                                <span className="font-label text-heading text-[12px] tracking-[0.35em] uppercase">Download CV</span>
                                <span className="font-label text-heading text-[14px]">→</span>
                            </Link>
                        </div>

                        <div className="border border-muted px-8 py-7">
                            <p className="font-label text-muted text-[12px] tracking-[0.45em] uppercase mb-4">Response Time</p>
                            <p className="font-body text-heading text-[17px]">Usually within 24 hours.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
