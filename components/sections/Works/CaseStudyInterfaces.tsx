"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Work } from "@/data/works";
import { DesktopMockup } from "@/components/ui/DesktopMockup";
import { Iphone } from "@/components/ui/magicui/iphone";

type CaseStudyInterfacesProps = {
    work: Work;
};

const SLIDE_INTERVAL = 10000;

export function CaseStudyInterfaces({ work }: CaseStudyInterfacesProps) {
    const isMobileInterface = work.interfaceDisplay === "mobile";
    const slides = work.interfaceCaptions.slice(0, 3).map((item, index) => ({
        ...item,
        image: work.interfaceImages?.[index] ?? work.image,
        alt: `${work.title} ${item.title}`,
    }));
    const mobileScreens = work.mobileScreens?.slice(0, 3) ?? slides.map((slide) => slide.image);
    const [activeIndex, setActiveIndex] = useState(0);
    const activeSlide = slides[activeIndex] ?? slides[0];

    useEffect(() => {
        if (isMobileInterface || slides.length <= 1) {
            return;
        }

        const intervalId = window.setInterval(() => {
            setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
        }, SLIDE_INTERVAL);

        return () => window.clearInterval(intervalId);
    }, [isMobileInterface, slides.length, activeIndex]);

    if (!activeSlide) {
        return null;
    }

    return (
        <section className="border-t border-t-muted bg-surface-dark">
            <div className="container px-6 py-16 sm:px-10 lg:py-20">
                <div className="mb-10 flex items-baseline gap-4 lg:mb-12">
                    <div className="flex items-center gap-5">
                        <p className="font-label text-on-dark-subheading text-[12px] tracking-wide">03</p>
                        <div className="h-px w-5 bg-on-dark-subheading"></div>
                    </div>
                    <h2 className="font-heading text-on-dark-heading text-[40px]/[42px] font-extrabold tracking-tight sm:text-[48px]/[52px]">SELECTED INTERFACES</h2>
                </div>

                {isMobileInterface ? (
                    <div className="grid gap-10 md:grid-cols-3 md:items-start">
                        {mobileScreens.map((screen) => (
                                <div key={screen} className="mx-auto w-full max-w-[300px] sm:max-w-[340px] md:max-w-[280px] xl:max-w-[330px]">
                                    <Iphone src={screen} className="h-full w-full" />
                                </div>
                        ))}
                    </div>
                ) : (
                    <>
                <div className="hidden lg:block">
                    <div className="mb-7">
                        <DesktopMockup
                            className="w-full"
                            src={activeSlide.image}
                            alt={activeSlide.alt}
                            url={`${work.slug}.case`} />
                    </div>

                    <div className="grid grid-cols-3 items-start gap-6">
                        {slides.map((item, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <button
                                    key={item.title}
                                    className="group block w-full appearance-none bg-transparent p-0 text-left"
                                    type="button"
                                    aria-pressed={isActive}
                                    aria-label={`Show ${item.title}`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className={`box-border border border-[rgba(242,239,231,0.12)] transition-colors ${isActive ? "ring-1 ring-inset ring-accent" : "group-hover:border-on-dark-subheading"}`}>
                                        <Image
                                            className="cursor-pointer block h-[265px] w-full object-cover"
                                            src={item.image}
                                            width={420}
                                            height={265}
                                            alt={item.alt} />
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="grid gap-8 lg:hidden">
                    {slides.map((item) => (
                        <div key={item.title}>
                            <Image
                                className="h-auto w-full border border-[rgba(242,239,231,0.16)]"
                                src={item.image}
                                width={920}
                                height={620}
                                alt={item.alt} />
                        </div>
                    ))}
                </div>
                    </>
                )}
            </div>
        </section>
    );
}
