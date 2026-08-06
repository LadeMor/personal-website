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
        <section id="about" className="bg-background-secondary">
            <div className="container px-6 pt-18 pb-18 sm:px-10 sm:pt-24 sm:pb-28 xl:pb-32">
                <div className="mb-12 flex items-center justify-between gap-6 border-b border-b-muted pb-6 sm:mb-16">
                    <p className="font-label text-muted text-[11px] tracking-wide uppercase sm:text-[12px]">About</p>
                    <p className="text-right font-label text-muted text-[11px] tracking-wide uppercase sm:text-[12px]">Frontend Engineer — Full Stack</p>
                </div>

                <div className="grid items-end gap-12 xl:grid-cols-[1.1fr_0.9fr_0.35fr] xl:gap-14">
                    <div className="self-start xl:pt-12">
                        <div className="mb-11 flex gap-5 sm:mb-12 sm:gap-6 xl:mb-9">
                            <div className="w-px self-stretch bg-accent"></div>
                            <h2 className="max-w-[650px] font-heading text-heading text-[32px]/[36px] font-extrabold sm:text-[44px]/[52px] xl:text-[48px]/[56px]">
                                I build product interfaces that combine engineering, interaction and visual clarity.
                            </h2>
                        </div>

                        <div className="hidden max-w-[560px] pl-6 xl:block">
                            <AboutText />
                        </div>
                    </div>

                    <div className="relative flex min-h-[360px] items-end justify-center sm:min-h-[440px] xl:min-h-[430px]">
                        <Image
                            className="absolute bottom-18 z-1 h-[240px] w-[240px] sm:bottom-20 sm:h-[320px] sm:w-[320px]"
                            src="/icons/photo_background_circle.svg"
                            width={320}
                            height={320}
                            alt=""
                            aria-hidden="true" />
                        <Image
                            className="relative z-2 h-auto w-[270px] sm:w-[360px]"
                            src="/images/me.png"
                            width={360}
                            height={430}
                            alt="Serhii Piatko portrait" />
                        <div className="pointer-events-none absolute bottom-0 z-[3] h-24 w-[330px] bg-gradient-to-b from-background-secondary/0 via-background-secondary/85 to-background-secondary sm:w-[420px]"></div>
                    </div>

                    <div className="max-w-[560px] xl:hidden">
                        <AboutText />
                    </div>

                    <div className="self-start xl:pt-16">
                        <div className="mb-8 grid grid-cols-2 gap-x-5 gap-y-0 sm:gap-x-8 xl:block">
                            {experienceStats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className={`border-t border-t-muted py-7 text-center xl:text-left xl:last:border-b xl:last:border-b-muted ${index === 2 ? "col-span-2 mx-auto w-1/2 min-w-[150px] border-b border-b-muted xl:mx-0 xl:w-auto" : ""}`}
                                >
                                    <p className="mb-3 font-heading text-heading text-[48px]/[48px] font-extrabold sm:text-[52px]/[52px]">{stat.value}</p>
                                    <p className="font-label text-muted text-[11px] tracking-wide uppercase sm:text-[12px]">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <Link href="#contact" className="mb-3 flex items-center justify-between bg-surface-dark px-6 py-4">
                            <span className="font-label text-on-dark-heading text-[12px] tracking-wide uppercase">Get in Touch</span>
                            <span className="font-label text-on-dark-heading text-[14px]">→</span>
                        </Link>
                        <Link href="/" className="flex items-center gap-2 border-b border-b-muted pb-2 font-label text-muted text-[12px] tracking-wide uppercase">
                            Download CV
                            <span>→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function AboutText() {
    return (
        <>
            <p className="mb-7 font-body text-body text-[17px]/[30px] sm:text-[18px]/[31px]">
                With a foundation in React and Next.js, I work across the full stack — from PostgreSQL schemas to pixel-perfect interfaces. I care deeply about how things feel to use, not just how they look.
            </p>
            <p className="font-body text-body text-[17px]/[30px] sm:text-[18px]/[31px]">
                On the creative side, I explore Three.js, WebGL and motion — building interactive experiences that blur the line between software and art. On mobile, I ship cross-platform apps with React Native and Expo.
            </p>
        </>
    );
}
