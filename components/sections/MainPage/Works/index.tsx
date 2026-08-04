import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";
import { DesktopMockup } from "@/components/ui/DesktopMockup";
import { MobileScreensMockup } from "@/components/ui/MobileScreensMockup";

export function Works() {
    const featuredWorks = works.slice(0, 2);
    const additionalProjects = works.slice(2, 5);
    const [flamioWork, homeServiceWork] = featuredWorks;

    return (
        <section id="works">
            <div className="container flex justify-between items-center mx-10 py-6 mb-3 border-b border-b-muted">
                <h2 className="font-heading text-heading text-[64px] tracking-tight font-extrabold">Selected Work</h2>
                <p className="font-label text-muted text-[12px] tracking-wide">2019 — {new Date().getFullYear()}</p>
            </div>
            <div className="bg-surface-dark">
                <div className="container relative px-10 py-20 flex items-start justify-between">
                    <h1 className="absolute text-[260px]/44 z-1 font-heading font-extrabold tracking-tighter top-5 left-5 text-[rgba(255,255,255,0.03)]">{flamioWork.number}</h1>
                    <div className="relative z-2">
                        <p className="font-label text-on-dark-body text-[12px] mb-4.25">{flamioWork.number}</p>
                        <h1 className="font-heading text-on-dark-heading text-[72px] mb-5 tracking-tight font-extrabold">{flamioWork.title}</h1>
                        <h2 className="font-heading text-on-dark-subheading text-[26px] tracking-tight font-normal mb-12.5">{flamioWork.subtitle}</h2>
                        <div className="border bg-muted w-12 h-1 mb-5"></div>
                        <p className="font-body text-on-dark-body text-[16px]/[24.5px] mb-6">
                            {flamioWork.description}
                        </p>
                        <div className="flex items-center gap-8 mb-6">
                            <div className="flex flex-col gap-1 ">
                                <p className="font-label text-on-dark-subheading tracking-tight">ROLE</p>
                                <p className="font-body text-on-dark-heading tracking-tight">{flamioWork.role}</p>
                            </div>
                            <div className="flex flex-col gap-1 ">
                                <p className="font-label text-on-dark-subheading tracking-tight">YEAR</p>
                            <p className="font-body text-on-dark-heading tracking-tight">{flamioWork.years}</p>
                            </div>
                        </div>
                        <div className="flex items-center flex-wrap gap-1 mb-10.5">
                            {flamioWork.stack.map((tech) => (
                                <div key={tech} className="font-label text-on-dark-body text-[14px] border border-on-dark-body py-1 px-2.5">
                                    <p>{tech}</p>
                                </div>
                            ))}
                        </div>
                    <Link href={`/works/${flamioWork.slug}`} className="font-label text-on-dark-heading text-[14px]/[16px] tracking-wide border-b border-b-muted p-2">
                        VIEW CASE STUDY →
                    </Link>
                    </div>
                    {flamioWork.mobileScreens ? (
                        <MobileScreensMockup
                            className="w-[780px] h-[415px]"
                            screens={flamioWork.mobileScreens}
                            alt={flamioWork.imageAlt} />
                    ) : (
                        <DesktopMockup
                            className="w-[780px]"
                            src={flamioWork.image}
                            alt={flamioWork.imageAlt}
                            url={`${flamioWork.slug}.case`} />
                    )}
                </div>
            </div>

            <div className="bg-background-secondary">
                <div className="container relative px-10 py-20 flex items-center justify-between gap-12 border-b border-b-muted">
                    <h1 className="absolute text-[260px]/44 z-1 font-heading font-extrabold tracking-tighter top-5 right-5 text-[rgba(17,17,17,0.04)]">{homeServiceWork.number}</h1>
                    {homeServiceWork.mobileScreens ? (
                        <MobileScreensMockup
                            className="relative z-2 w-[780px] h-[415px]"
                            screens={homeServiceWork.mobileScreens}
                            alt={homeServiceWork.imageAlt} />
                    ) : (
                        <DesktopMockup
                            className="relative z-2 w-[780px]"
                            src={homeServiceWork.image}
                            alt={homeServiceWork.imageAlt}
                            url={`${homeServiceWork.slug}.case`} />
                    )}
                    <div className="relative z-2 max-w-[540px]">
                        <p className="font-label text-muted text-[12px] mb-4.25">{homeServiceWork.number}</p>
                        <h1 className="font-heading text-heading text-[64px] mb-5 tracking-tight font-extrabold">{homeServiceWork.title}</h1>
                        <h2 className="font-heading text-muted text-[26px] tracking-tight font-normal mb-10">{homeServiceWork.subtitle}</h2>
                        <div className="border bg-muted w-12 h-1 mb-5"></div>
                        <p className="font-body text-body text-[16px]/[24.5px] mb-8">
                            {homeServiceWork.description}
                        </p>
                        <div className="flex items-center gap-8 mb-6">
                            <div className="flex flex-col gap-1">
                                <p className="font-label text-muted tracking-tight">ROLE</p>
                                <p className="font-body text-heading tracking-tight">{homeServiceWork.role}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="font-label text-muted tracking-tight">YEAR</p>
                            <p className="font-body text-heading tracking-tight">{homeServiceWork.years}</p>
                            </div>
                        </div>
                        <div className="flex items-center flex-wrap gap-1 mb-10.5">
                            {homeServiceWork.stack.map((tech) => (
                                <div key={tech} className="font-label text-muted text-[14px] border border-muted py-1 px-2.5">
                                    <p>{tech}</p>
                                </div>
                            ))}
                        </div>
                    <Link href={`/works/${homeServiceWork.slug}`} className="font-label text-heading text-[14px]/[16px] tracking-wide border-b border-b-body p-2">
                        VIEW CASE STUDY →
                    </Link>
                    </div>
                </div>
            </div>
            <div className="container bg-background px-10 pt-20 pb-22 border-b border-b-muted">
                <div className="flex items-end justify-between border-b border-b-muted pb-7 mb-12">
                    <div>
                        <p className="font-label text-muted text-[12px] tracking-[0.45em] uppercase mb-4 tracking-tight">Additional Projects</p>
                        <h2 className="font-heading text-heading text-[64px] tracking-tight font-extrabold">More Work</h2>
                    </div>
                    <p className="font-label text-muted text-[12px] tracking-[0.35em] uppercase mb-3">Creative & Technical</p>
                </div>
                <div className="grid grid-cols-3 gap-8 mb-22">
                    {additionalProjects.map((project) => (
                        <article key={project.title}>
                            {project.mobileScreens ? (
                                <MobileScreensMockup
                                    className="w-full h-[282px] border border-muted mb-5 bg-background-secondary"
                                    screens={project.mobileScreens}
                                    alt={project.imageAlt} />
                            ) : (
                                <Image
                                    className="w-full h-[282px] object-cover border border-muted mb-5"
                                    src={project.image}
                                    width={425}
                                    height={282}
                                    alt={project.imageAlt} />
                            )}
                            <div className="flex items-center justify-between mb-5">
                                <p className="font-label text-muted text-[12px] tracking-wide">{project.number}</p>
                                <Link href={`/works/${project.slug}`} className="font-label text-heading text-[18px]/[18px]" aria-label={`View ${project.title}`}>
                                    →
                                </Link>
                            </div>
                            <h3 className="font-heading text-heading text-[34px]/[36px] tracking-tight font-extrabold mb-1.5">{project.title}</h3>
                            <p className="font-body text-body text-[15px] mb-3">{project.subtitle}</p>
                            <p className="font-body text-muted text-[14px]/[22px] mb-5">{project.description}</p>
                            <div className="flex items-end justify-between gap-5">
                                <div>
                                    <p className="font-label text-muted text-[11px] tracking-wide uppercase mb-1">{project.role}</p>
                                    <p className="font-label text-muted text-[11px] tracking-wide">{project.years}</p>
                                </div>
                                <div className="flex items-center justify-end flex-wrap gap-1">
                                    {project.stack.map((tech) => (
                                        <div key={tech} className="font-label text-muted text-[11px] border border-muted px-2 py-1">
                                            <p>{tech}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="border-t border-t-muted pt-8 flex justify-end">
                    <Link href="/works" className="font-heading text-heading text-[42px]/[46px] tracking-tight font-extrabold border-b border-b-heading inline-flex items-center gap-7 pb-1">
                        EXPLORE MORE WORK
                        <span className="font-label text-[32px]/[32px]">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
