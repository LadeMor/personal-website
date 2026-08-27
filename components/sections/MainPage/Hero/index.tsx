import { ArrowDown } from "lucide-react";
import { AccentHoverLink } from "@/components/ui/AccentHoverLink";
import { Reveal } from "@/components/ui/Reveal";
import { InteractiveGlobe } from "./InteractiveGlobe";

export function Hero() {
    return (
        <section className="container relative isolate mb-24 flex min-h-[calc(100svh-61px)] items-start overflow-hidden px-8 pt-9 pb-8 sm:px-10 sm:pt-14 md:mb-32 lg:mb-40 lg:min-h-[720px] lg:justify-center lg:pt-10 xl:min-h-[800px]">
            <Reveal
                className="absolute top-[5%] -right-[43%] z-0 h-[48%] w-[120%] sm:top-[1%] sm:-right-[23%] sm:h-[58%] sm:w-[92%] lg:-top-[0%] lg:-right-[1%] lg:h-[82%] lg:w-[68%]"
                direction="none"
                scale={0.94}
                blur={3}
                duration={1.2}
                amount={0.05}
            >
                <InteractiveGlobe className="h-full w-full opacity-90 lg:opacity-100" />
            </Reveal>

            <div className="relative z-10 flex w-full max-w-[680px] flex-col lg:max-w-[760px]">
                <Reveal
                    className="mb-[31vh] flex items-start justify-between gap-6 sm:mb-40 md:mb-36 lg:mb-[150px]"
                    direction="down"
                    distance={14}
                    duration={0.7}
                    delay={0.05}
                >
                    <p className="font-label text-muted text-[11px]/[18px] tracking-wide sm:text-[12px]/[20px]">[01] FRONTEND<br className="sm:hidden" /> ENGINEER</p>
                    <p className="max-w-[170px] text-right font-label text-muted text-[11px]/[18px] tracking-wide sm:max-w-none sm:text-[12px]/[20px]">48.3794°N 31.1656°E<br />2019 — AVAILABLE</p>
                </Reveal>

                <div className="mt-auto lg:mt-0">
                    <h1 className="mb-4 font-heading text-[64px]/[54px] font-extrabold tracking-tight text-heading sm:text-[96px]/[82px] md:text-[140px]/[120px] xl:text-[200px]/[171px]">
                        <Reveal as="span" className="block" distance={42} duration={0.9} delay={0.08}>
                            SERHII
                        </Reveal>
                        <Reveal as="span" className="block" distance={42} duration={0.9} delay={0.16}>
                            PIATKO
                        </Reveal>
                    </h1>

                    <Reveal
                        className="mb-11 grid grid-cols-[0.8fr_1fr] items-start gap-5 sm:flex sm:items-baseline sm:gap-4 md:mb-10"
                        distance={24}
                        duration={0.75}
                        delay={0.24}
                    >
                        <p className="pt-1 font-label text-muted text-[11px]/[16px] tracking-wide sm:pt-0 sm:text-[12px]">BUILDING DIGITAL</p>
                        <p className="font-body text-body text-[19px]/[31px] sm:text-[20px]/[30px] md:text-[22px]/[32px] lg:text-[19px]/[28px]">
                            Product-minded Frontend Engineer building clear and scalable web and mobile products - from UX and architecture to production delivery.
                        </p>
                    </Reveal>

                    <Reveal
                        className="flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-4"
                        distance={20}
                        duration={0.75}
                        delay={0.32}
                    >
                        <div>
                            <div className="mb-8 flex items-center gap-4 sm:gap-2.5">
                                <AccentHoverLink
                                    className="px-6 py-4 sm:py-3.5"
                                    href="#works"
                                    icon={<ArrowDown size={14} strokeWidth={1.8} aria-hidden="true" />}
                                    iconDirection="down"
                                >
                                    SELECTED WORK
                                </AccentHoverLink>

                                {/* <Link className="inline-flex border-b border-body px-2 py-4 sm:px-6 sm:py-3.5" href="https://github.com/serhiipiatko" target="_blank">
                                    <span className="flex items-center justify-center gap-2.5">
                                        <span className="font-label text-body text-[12px] tracking-wide">SELECTED WORK</span>
                                        <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" />
                                    </span>
                                </Link> */}
                            </div>

                            <div className="flex items-center gap-9 sm:gap-1.5">
                                <div className="flex items-center gap-1.5">
                                    <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                                    <p className="font-label text-muted text-[11px] tracking-wide sm:text-[12px]">KYIV → UKRAINE</p>
                                </div>
                                <p className="font-label text-muted text-[11px] tracking-wide sm:hidden">SCROLL</p>
                            </div>
                        </div>

                        <div className="hidden flex-col items-center sm:flex">
                            <div className="h-12.5 w-px bg-muted"></div>
                            <p className="font-label text-muted text-[12px] tracking-wide">SCROLL</p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
