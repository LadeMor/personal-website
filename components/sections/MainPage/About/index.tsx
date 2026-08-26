import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { AccentHoverLink } from "@/components/ui/AccentHoverLink";

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
        <section id="about" className="overflow-x-clip bg-background-secondary">
            <div className="container px-6 pt-18 pb-18 sm:px-10 sm:pt-24 sm:pb-28 xl:pb-32">
                <Reveal
                    className="mb-12 flex items-center justify-between gap-6 border-b border-b-muted pb-6 sm:mb-16"
                    distance={18}
                    duration={0.7}
                >
                    <p className="font-label text-muted text-[11px] tracking-wide uppercase sm:text-[12px]">About</p>
                    <p className="text-right font-label text-muted text-[11px] tracking-wide uppercase sm:text-[12px]">Frontend Engineer — Full Stack</p>
                </Reveal>

                <div className="grid items-end gap-12 xl:grid-cols-[1.1fr_0.9fr_0.35fr] xl:gap-14">
                    <div className="self-start xl:pt-12">
                        <Reveal
                            className="mb-11 flex gap-5 sm:mb-12 sm:gap-6 xl:mb-9"
                            direction="left"
                            distance={36}
                            duration={0.85}
                            amount={0.2}
                        >
                            <div className="w-px self-stretch bg-accent"></div>
                            <h2 className="max-w-[650px] font-heading text-heading text-[32px]/[36px] font-extrabold sm:text-[44px]/[52px] xl:text-[48px]/[56px]">
                                I build product interfaces that combine engineering, interaction and visual clarity.
                            </h2>
                        </Reveal>

                        <Reveal
                            className="hidden max-w-[560px] pl-6 xl:block"
                            distance={24}
                            duration={0.75}
                            delay={0.1}
                            amount={0.15}
                        >
                            <AboutText />
                        </Reveal>
                    </div>

                    <Reveal
                        className="relative flex min-h-[360px] items-end justify-center sm:min-h-[440px] xl:min-h-[430px]"
                        direction="none"
                        scale={0.96}
                        blur={3}
                        duration={1}
                        delay={0.08}
                        amount={0.18}
                    >
                        <Image
                            className="absolute bottom-18 z-1 h-[240px] w-[240px] sm:bottom-20 sm:h-[320px] sm:w-[320px]"
                            src="/icons/photo_background_circle.svg"
                            width={320}
                            height={320}
                            alt=""
                            aria-hidden="true" />
                        <div className="relative z-2 w-[270px] sm:w-[360px]">
                            <Image
                                className="h-auto w-full"
                                src="/images/me.png"
                                width={360}
                                height={430}
                                alt="Serhii Piatko portrait" />
                            <div
                                className="pointer-events-none absolute inset-x-0 bottom-0 z-3 h-[12%] bg-gradient-to-b from-background-secondary/0 via-40% via-background-secondary/100 to-background-secondary"
                                aria-hidden="true" />
                        </div>
                    </Reveal>

                    <Reveal
                        className="max-w-[560px] xl:hidden"
                        distance={24}
                        duration={0.75}
                        delay={0.08}
                        amount={0.12}
                    >
                        <AboutText />
                    </Reveal>

                    <div className="self-start xl:pt-16">
                        <div className="mb-8 grid grid-cols-2 gap-x-5 gap-y-0 sm:gap-x-8 xl:block">
                            {experienceStats.map((stat, index) => (
                                <Reveal
                                    key={stat.label}
                                    className={`border-t border-t-muted py-7 text-center xl:text-left xl:last:border-b xl:last:border-b-muted ${index === 2 ? "col-span-2 mx-auto w-1/2 min-w-[150px] border-b border-b-muted xl:mx-0 xl:w-auto" : ""}`}
                                    direction="right"
                                    distance={24}
                                    duration={0.7}
                                    delay={index * 0.08}
                                    amount={0.25}
                                >
                                    <p className="mb-3 font-heading text-heading text-[48px]/[48px] font-extrabold sm:text-[52px]/[52px]">{stat.value}</p>
                                    <p className="font-label text-muted text-[11px] tracking-wide uppercase sm:text-[12px]">{stat.label}</p>
                                </Reveal>
                            ))}
                        </div>

                        <Reveal distance={18} duration={0.7} delay={0.16} amount={0.3}>
                            <AccentHoverLink
                                href="#contact"
                                smoothScroll
                                className="mb-3 w-full px-6 py-4"
                                contentClassName="w-full justify-between"
                                labelClassName="font-label text-[12px] tracking-wide uppercase"
                                icon={<span className="font-label text-[14px]">→</span>}
                            >
                                Get in Touch
                            </AccentHoverLink>
                            <AccentHoverLink
                                href="/files/Serhii%20Piatko.pdf"
                                download="Serhii Piatko CV.pdf"
                                variant="light"
                                className="border-b border-b-muted pb-2"
                                contentClassName="gap-2"
                                labelClassName="font-label text-[12px] tracking-wide uppercase"
                                icon={<span>→</span>}
                            >
                                Download CV
                            </AccentHoverLink>
                        </Reveal>
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
