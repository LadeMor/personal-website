import Image from "next/image";
import Link from "next/link";
import { workFilters, works } from "@/data/works";
import { MobileScreensMockup } from "@/components/ui/MobileScreensMockup";

export function WorksSection() {
    return (
        <>
            <section className="container px-10 pt-18 pb-12 border-t border-t-muted">

                <div className="grid grid-cols-[1fr_auto] items-end gap-10">
                    <div>
                        <h1 className="font-heading text-heading text-[160px]/[140px] tracking-tight font-extrabold mb-8">
                            WORKS
                        </h1>
                        <p className="font-body text-body text-[17px]/[28px] max-w-[480px]">
                            A selection of product, mobile and interactive projects built across frontend, full-stack development and creative technology.
                        </p>
                    </div>
                    <p className="font-label text-muted text-[12px] tracking-[0.35em] uppercase mb-2">Web / Mobile / Product / Creative</p>
                </div>
            </section>

            <section className="container px-10 pt-10 pb-16">

                <div className="grid grid-cols-2">
                    {works.map((work) => (
                        <article key={work.title} className="border-y border-y-muted px-10 py-10">
                            {work.mobileScreens ? (
                                <MobileScreensMockup
                                    className="w-full h-[410px] border border-muted mb-5 bg-background"
                                    screens={work.mobileScreens}
                                    alt={work.imageAlt} />
                            ) : (
                                <Image
                                    className="w-full h-[410px] object-cover border border-muted mb-5"
                                    src={work.image}
                                    width={600}
                                    height={410}
                                    alt={work.imageAlt} />
                            )}

                            <div className="flex items-center justify-between mb-5">
                                <p className="font-label text-muted text-[12px] tracking-wide">{work.number}</p>
                                <Link href={`/works/${work.slug}`} className="font-label text-heading text-[11px] tracking-wide uppercase border border-muted px-3 py-1.5">
                                    Case Study
                                </Link>
                            </div>

                            <h2 className="font-heading text-heading text-[34px]/[36px] tracking-tight font-extrabold mb-1.5">{work.title}</h2>
                            <p className="font-label text-muted text-[11px] tracking-wide uppercase mb-5">{work.category}</p>
                            <p className="font-body text-body text-[15px]/[24px] mb-6 max-w-[590px]">{work.description}</p>

                            <div className="flex items-end justify-between gap-6 mb-6">
                                <div>
                                    <p className="font-label text-muted text-[11px] tracking-wide uppercase mb-1">{work.role}</p>
                                    <p className="font-label text-muted text-[11px] tracking-wide uppercase">{work.years}</p>
                                </div>
                                <div className="flex flex-wrap justify-end gap-1">
                                    {work.stack.map((tech) => (
                                        <div key={tech} className="font-label text-muted text-[11px] border border-muted px-2 py-1">
                                            <p>{tech}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Link href={`/works/${work.slug}`} className="font-label text-muted text-[12px] tracking-wide uppercase border-b border-b-muted pb-1">
                                View Case Study →
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}
