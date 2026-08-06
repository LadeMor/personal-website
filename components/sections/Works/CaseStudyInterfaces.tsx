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
    const slides = work.interfaceCaptions.slice(0, 3).map((item) => ({
        ...item,
        image: work.image,
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
                        {mobileScreens.map((screen, index) => {
                            const caption = slides[index] ?? slides[0];

                            return (
                                <div key={screen}>
                                    <div className="mx-auto mb-6 w-full max-w-[300px] sm:max-w-[340px] md:max-w-[280px] xl:max-w-[330px]">
                                        <Iphone src={screen} className="h-full w-full" />
                                    </div>
                                    {caption ? (
                                        <>
                                            <p className="mb-2 font-label text-on-dark-subheading text-[11px] tracking-wide uppercase">{caption.title}</p>
                                            <p className="font-body text-on-dark-subheading text-[13px]/[20px] italic">{caption.description}</p>
                                        </>
                                    ) : null}
                                </div>
                            );
                        })}
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
                        <div className="mt-4 flex items-start justify-between gap-10">
                            <p className="font-label text-on-dark-subheading text-[11px] tracking-wide uppercase">{activeSlide.title}</p>
                            <p className="max-w-[420px] text-right font-body text-on-dark-subheading text-[13px]/[20px] italic">{activeSlide.description}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        {slides.map((item, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <button
                                    key={item.title}
                                    className="group text-left"
                                    type="button"
                                    aria-pressed={isActive}
                                    aria-label={`Show ${item.title}`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className={`mb-4 border transition-colors ${isActive ? "border-accent" : "border-[rgba(242,239,231,0.12)] group-hover:border-on-dark-subheading"}`}>
                                        <Image
                                            className="h-[265px] w-full object-cover"
                                            src={item.image}
                                            width={420}
                                            height={265}
                                            alt={item.alt} />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className={`h-px w-8 ${isActive ? "bg-accent" : "bg-on-dark-subheading"}`} aria-hidden="true"></span>
                                        <p className="font-label text-on-dark-subheading text-[11px] tracking-wide uppercase">{item.title}</p>
                                    </div>
                                    <p className="mt-2 font-body text-on-dark-subheading text-[13px]/[20px] italic">{item.description}</p>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="grid gap-8 lg:hidden">
                    {slides.map((item) => (
                        <div key={item.title}>
                            <Image
                                className="mb-4 h-auto w-full border border-[rgba(242,239,231,0.16)]"
                                src={item.image}
                                width={920}
                                height={620}
                                alt={item.alt} />
                            <p className="mb-2 font-label text-on-dark-subheading text-[11px] tracking-wide uppercase">{item.title}</p>
                            <p className="font-body text-on-dark-subheading text-[13px]/[20px] italic">{item.description}</p>
                        </div>
                    ))}
                </div>
                    </>
                )}
            </div>
        </section>
    );
}
