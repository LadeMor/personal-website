import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { AccentHoverLink } from "@/components/ui/AccentHoverLink";

const socialLinks = [
    {
        label: "GitHub",
        value: "LadeMor",
        href: "https://github.com/LadeMor",
    },
    {
        label: "LinkedIn",
        value: "Serhii Piatko",
        href: "https://www.linkedin.com/in/serhii-piatko/",
    },
];

export function Contact() {
    return (
        <section id="contact" className="overflow-x-clip bg-background-secondary">
            <div className="container border-t border-t-muted px-6 pt-18 pb-16 sm:px-10 sm:pt-24 sm:pb-18">
                <Reveal className="mb-14 sm:mb-16" distance={32} duration={0.9} amount={0.2}>
                    <p className="mb-9 font-label text-muted text-[12px] tracking-wide uppercase sm:mb-11">Contact</p>
                    <h2 className="mb-8 max-w-[520px] font-heading text-heading text-[46px]/[42px] font-extrabold tracking-tight sm:mb-10 sm:text-[76px]/[70px] lg:text-[112px]/[100px]">
                        LET&apos;S BUILD SOMETHING ALIVE
                    </h2>
                    <div className="h-px w-10 bg-accent"></div>
                </Reveal>

                <div className="grid grid-cols-1 items-start gap-10 pb-10 lg:grid-cols-[1fr_0.95fr] lg:gap-20 lg:pb-18">
                    <Reveal
                        className="pt-2"
                        direction="left"
                        distance={38}
                        duration={0.85}
                        amount={0.15}
                    >
                        <div className="mb-12">
                            <p className="mb-5 font-label text-muted text-[12px] tracking-wide uppercase">Email</p>
                            <Link href="mailto:sergpyatko@gmail.com" className="font-heading text-heading text-[32px]/[36px] font-extrabold tracking-tight sm:text-[44px]/[48px]">
                                sergpyatko@gmail.com
                            </Link>
                        </div>

                        <div className="max-w-[640px]">
                            <p className="mb-4 font-label text-muted text-[12px] tracking-wide uppercase">Elsewhere</p>
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="grid grid-cols-[1fr_auto] gap-4 border-b border-b-muted py-3"
                                >
                                    <span className="font-label text-muted text-[13px] tracking-wide">{link.label}</span>
                                    <span className="text-right font-body text-body text-[16px]">{link.value}</span>
                                </Link>
                            ))}
                        </div>
                    </Reveal>

                    <div>
                        <Reveal
                            className="mb-6 bg-surface-dark px-7 py-9 sm:px-10 sm:py-10"
                            direction="right"
                            distance={38}
                            duration={0.9}
                            amount={0.18}
                            delay={0.08}
                        >
                            <p className="mb-7 font-label text-on-dark-subheading text-[12px] tracking-wide uppercase">Status</p>
                            <div className="mb-6 flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-accent"></div>
                                <p className="font-body text-on-dark-heading text-[18px]">Available for new projects</p>
                            </div>
                            <p className="mb-8 max-w-[560px] font-body text-on-dark-body text-[15px]/[25px]">
                                Currently open to full-time roles and selected freelance engagements. Based in Berlin, open to remote or hybrid work.
                            </p>
                            <AccentHoverLink
                                href="/files/Serhii%20Piatko.pdf"
                                download="Serhii Piatko CV.pdf"
                                variant="reverse"
                                className="px-6 py-4"
                                contentClassName="gap-4"
                                labelClassName="font-label text-[12px] tracking-wide uppercase"
                                icon={<span className="font-label text-[14px]">→</span>}
                            >
                                Download CV
                            </AccentHoverLink>
                        </Reveal>

                        <Reveal
                            className="border border-muted px-7 py-7 sm:px-8"
                            distance={18}
                            duration={0.7}
                            amount={0.35}
                            delay={0.14}
                        >
                            <p className="mb-4 font-label text-muted text-[12px] tracking-wide uppercase">Response Time</p>
                            <p className="font-body text-heading text-[17px]">Usually within 24 hours.</p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
