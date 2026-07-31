import Image from "next/image";
import Link from "next/link";

const experienceStats = [
    {
        value: "4+",
        label: "Years of Experience",
    },
    {
        value: "12+",
        label: "Products Shipped",
    },
    {
        value: "3",
        label: "Countries",
    },
];

export function About() {
    return (
        <section className="bg-background-secondary">
            <div className="container px-10 pt-24 pb-32">
                <div className="flex items-center justify-between border-b border-b-muted pb-6 mb-16">
                    <p className="font-label text-muted text-[12px] tracking-[0.45em] uppercase">About</p>
                    <p className="font-label text-muted text-[12px] tracking-[0.35em] uppercase">Frontend Engineer — Full Stack</p>
                </div>

                <div className="grid grid-cols-[1.1fr_0.9fr_0.35fr] items-end gap-14">
                    <div className="self-start pt-12">
                        <div className="flex gap-6 mb-9">
                            <div className="w-px bg-accent self-stretch"></div>
                            <h2 className="font-heading text-heading text-[48px]/[56px] font-extrabold max-w-[650px]">
                                I build product interfaces that combine engineering, interaction and visual clarity.
                            </h2>
                        </div>
                        <div className="pl-6 max-w-[560px]">
                            <p className="font-body text-body text-[18px]/[31px] mb-7">
                                With a foundation in React and Next.js, I work across the full stack — from PostgreSQL schemas to pixel-perfect interfaces. I care deeply about how things feel to use, not just how they look.
                            </p>
                            <p className="font-body text-body text-[18px]/[31px]">
                                On the creative side, I explore Three.js, WebGL and motion — building interactive experiences that blur the line between software and art. On mobile, I ship cross-platform apps with React Native and Expo.
                            </p>
                        </div>
                    </div>

                    <div className="relative flex justify-center items-end min-h-[430px]">
                        <Image
                            className="absolute bottom-20 z-1 w-[320px] h-[320px]"
                            src="/icons/photo_background_circle.svg"
                            width={320}
                            height={320}
                            alt=""
                            aria-hidden="true" />
                        <Image
                            className="relative z-2 w-[360px] h-auto"
                            src="/images/me.png"
                            width={360}
                            height={430}
                            alt="Serhii Piatko portrait" />
                        <div className="absolute bottom-0 z-[3] h-24 w-[420px]  from-background-secondary/0 via-background-secondary/85 to-background-secondary pointer-events-none"></div>
                    </div>

                    <div className="self-start pt-16">
                        <div className="mb-8">
                            {experienceStats.map((stat) => (
                                <div key={stat.label} className="border-t border-t-muted py-7 last:border-b last:border-b-muted">
                                    <p className="font-heading text-heading text-[52px]/[52px] font-extrabold mb-3">{stat.value}</p>
                                    <p className="font-label text-muted text-[12px] tracking-[0.35em] uppercase">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                        <Link href="/" className="bg-surface-dark px-6 py-4 mb-3 flex items-center justify-between">
                            <span className="font-label text-on-dark-heading text-[12px] tracking-wide uppercase">Get in Touch</span>
                            <span className="font-label text-on-dark-heading text-[14px]">→</span>
                        </Link>
                        <Link href="/" className="font-label text-muted text-[12px] tracking-[0.35em] uppercase border-b border-b-muted pb-2 flex items-center gap-2">
                            Download CV
                            <span>→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
