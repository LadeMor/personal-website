import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";
import { MobileScreensMockup } from "@/components/ui/MobileScreensMockup";

export function WorksSection() {
    return (
        <>
            <section className="container border-t border-t-muted px-6 pt-14 pb-10 sm:px-10 sm:pt-18 sm:pb-12">
                <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
                    <div>
                        <h1 className="mb-7 font-heading text-heading text-[82px]/[74px] font-extrabold tracking-tight sm:text-[120px]/[106px] lg:mb-8 lg:text-[160px]/[140px]">
                            WORKS
                        </h1>
                        <p className="max-w-[480px] font-body text-body text-[17px]/[28px]">
                            A selection of product, mobile and interactive projects built across frontend, full-stack development and creative technology.
                        </p>
                    </div>
                    <p className="font-label text-muted text-[12px] tracking-wide uppercase md:mb-2">Web / Mobile / Product / Creative</p>
                </div>
            </section>

            <section className="container px-6 pt-8 pb-16 sm:px-10 sm:pt-10">
                <div className="flex flex-wrap border-t border-t-muted">
                    {works.map((work) => (
                        <article key={work.title} className="min-w-0 basis-full border-b border-b-muted py-8 sm:py-10 lg:basis-1/2 lg:px-10 lg:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-muted">
                            {work.mobileScreens ? (
                                <MobileScreensMockup
                                    className="mb-5 h-[300px] w-full min-w-0 border border-muted bg-background sm:h-[410px]"
                                    screens={work.mobileScreens}
                                    alt={work.imageAlt} />
                            ) : (
                                <Image
                                    className="mb-5 h-[300px] w-full min-w-0 border border-muted object-cover sm:h-[410px]"
                                    src={work.image}
                                    width={600}
                                    height={410}
                                    alt={work.imageAlt} />
                            )}

                            <div className="mb-5 flex items-center justify-between">
                                <p className="font-label text-muted text-[12px] tracking-wide">{work.number}</p>
                                <Link href={`/works/${work.slug}`} className="border border-muted px-3 py-1.5 font-label text-heading text-[11px] tracking-wide uppercase">
                                    Case Study
                                </Link>
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

                            <Link href={`/works/${work.slug}`} className="border-b border-b-muted pb-1 font-label text-muted text-[12px] tracking-wide uppercase">
                                View Case Study →
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}
