import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";
import { MobileScreensMockup } from "@/components/ui/MobileScreensMockup";
import { Reveal } from "@/components/ui/Reveal";

export function WorksSection() {
    return (
        <>
            <section className="container overflow-x-clip border-t border-t-muted px-6 pt-14 pb-10 sm:px-10 sm:pt-18 sm:pb-12">
                <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
                    <Reveal distance={34} duration={0.9} amount={0.15}>
                        <h1 className="mb-7 font-heading text-heading text-[82px]/[74px] font-extrabold tracking-tight sm:text-[120px]/[106px] lg:mb-8 lg:text-[160px]/[140px]">
                            WORKS
                        </h1>
                        <p className="max-w-[480px] font-body text-body text-[17px]/[28px]">
                            A selection of product, mobile and interactive projects built across frontend, full-stack development and creative technology.
                        </p>
                    </Reveal>
                    <Reveal direction="right" distance={24} duration={0.75} delay={0.12} amount={0.3}>
                        <p className="font-label text-muted text-[12px] tracking-wide uppercase md:mb-2">Web / Mobile / Product / Creative</p>
                    </Reveal>
                </div>
            </section>

            <section className="container overflow-x-clip px-6 pt-8 pb-16 sm:px-10 sm:pt-10">
                <div className="flex flex-wrap border-t border-t-muted">
                    {works.map((work, index) => (
                        <Reveal
                            as="article"
                            key={work.title}
                            className="h-full min-w-0 basis-full border-b border-b-muted py-8 sm:py-10 lg:basis-1/2 lg:px-10 lg:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-muted"
                            distance={32}
                            duration={0.8}
                            delay={(index % 2) * 0.1}
                            amount={0.08}
                        >
                            <Link
                                href={`/works/${work.slug}`}
                                className="group block h-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                                aria-label={`View ${work.title} case study`}
                            >
                                <div className="mb-5 overflow-hidden">
                                    {work.mobileScreens ? (
                                        <MobileScreensMockup
                                            className="h-[300px] w-full min-w-0 border border-muted bg-background transition-transform duration-500 ease-out group-hover:scale-[1.035] group-focus-visible:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none sm:h-[410px]"
                                            screens={work.mobileScreens}
                                            alt={work.imageAlt} />
                                    ) : (
                                        <Image
                                            className="h-[300px] w-full min-w-0 border border-muted object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035] group-focus-visible:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none sm:h-[410px]"
                                            src={work.image}
                                            width={600}
                                            height={410}
                                            alt={work.imageAlt} />
                                    )}
                                </div>

                                <div className="mb-5 flex items-center justify-between">
                                    <p className="font-label text-muted text-[12px] tracking-wide">{work.number}</p>
                                    <span className="relative isolate overflow-hidden border border-muted px-3 py-1.5">
                                        <span
                                            className="absolute inset-0 -z-1 origin-left scale-x-0 bg-accent transition-transform duration-400 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
                                            aria-hidden="true"
                                        />
                                        <span className="relative z-1 font-label text-heading text-[11px] tracking-wide uppercase">Case Study</span>
                                    </span>
                                </div>

                                <h2 className="mb-1.5 font-heading text-heading text-[34px]/[36px] font-extrabold tracking-tight">{work.title}</h2>
                                <p className="mb-5 font-label text-muted text-[11px] tracking-wide uppercase">{work.category}</p>
                                <p className="mb-6 max-w-[590px] font-body text-body text-[15px]/[24px]">{work.description}</p>

                                <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                                    <div>
                                        <p className="mb-1 font-label text-muted text-[11px] tracking-wide uppercase">{work.role}</p>
                                        <p className="font-label text-muted text-[11px] tracking-wide uppercase">{work.years}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-1 sm:justify-end">
                                        {work.stack.map((tech) => (
                                            <div key={tech} className="border border-muted px-2 py-1 font-label text-muted text-[11px]">
                                                <p>{tech}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <span className="inline-flex items-center gap-1 border-b border-b-muted pb-1 font-label text-muted text-[12px] tracking-wide uppercase">
                                    View Case Study
                                    <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transform-none">→</span>
                                </span>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </section>
        </>
    );
}
