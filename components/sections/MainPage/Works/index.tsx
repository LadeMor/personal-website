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
            <div className="container flex items-end justify-between gap-6 border-b border-b-muted px-6 py-6 sm:px-10">
                <h2 className="font-heading text-heading text-[48px]/[52px] font-extrabold tracking-tight sm:text-[64px]/[68px]">Selected Work</h2>
                <p className="shrink-0 pb-2 font-label text-muted text-[11px] tracking-wide sm:text-[12px]">2019 — {new Date().getFullYear()}</p>
            </div>

            <div className="bg-surface-dark">
                <div className="container relative flex flex-col items-start justify-between gap-12 px-6 py-14 sm:px-10 sm:py-18 xl:flex-row xl:py-20">
                    <h1 className="absolute top-4 left-3 z-1 font-heading text-[150px]/[120px] font-extrabold tracking-tighter text-[rgba(255,255,255,0.03)] sm:text-[220px]/[180px] xl:text-[260px]/44">
                        {flamioWork.number}
                    </h1>

                    <div className="relative z-2 max-w-[560px] xl:max-w-[500px]">
                        <p className="mb-4 font-label text-on-dark-body text-[12px]">{flamioWork.number}</p>
                        <h1 className="mb-5 font-heading text-on-dark-heading text-[56px]/[58px] font-extrabold tracking-tight sm:text-[72px]/[72px]">{flamioWork.title}</h1>
                        <h2 className="mb-9 font-heading text-on-dark-subheading text-[24px]/[30px] font-normal tracking-tight sm:mb-12 sm:text-[26px]/[32px]">{flamioWork.subtitle}</h2>
                        <div className="mb-5 h-1 w-12 border bg-muted"></div>
                        <p className="mb-6 font-body text-on-dark-body text-[16px]/[25px]">{flamioWork.description}</p>

                        <div className="mb-6 flex flex-wrap items-center gap-8">
                            <div className="flex flex-col gap-1">
                                <p className="font-label text-on-dark-subheading tracking-tight">ROLE</p>
                                <p className="font-body text-on-dark-heading tracking-tight">{flamioWork.role}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="font-label text-on-dark-subheading tracking-tight">YEAR</p>
                                <p className="font-body text-on-dark-heading tracking-tight">{flamioWork.years}</p>
                            </div>
                        </div>

                        <div className="mb-10 flex flex-wrap items-center gap-1">
                            {flamioWork.stack.map((tech) => (
                                <div key={tech} className="border border-on-dark-body px-2.5 py-1 font-label text-on-dark-body text-[14px]">
                                    <p>{tech}</p>
                                </div>
                            ))}
                        </div>

                        <Link href={`/works/${flamioWork.slug}`} className="inline-flex border-b border-b-muted p-2 font-label text-on-dark-heading text-[14px]/[16px] tracking-wide">
                            VIEW CASE STUDY →
                        </Link>
                    </div>

                    {flamioWork.mobileScreens ? (
                        <MobileScreensMockup
                            className="relative z-2 h-[300px] w-full max-w-[780px] sm:h-[415px] xl:w-[54vw]"
                            screens={flamioWork.mobileScreens}
                            alt={flamioWork.imageAlt} />
                    ) : (
                        <DesktopMockup
                            className="relative z-2 w-full max-w-[780px] xl:w-[54vw]"
                            src={flamioWork.image}
                            alt={flamioWork.imageAlt}
                            url={`${flamioWork.slug}.case`} />
                    )}
                </div>
            </div>

            <div className="bg-background-secondary">
                <div className="container relative flex flex-col items-start justify-between gap-12 border-b border-b-muted px-6 py-14 sm:px-10 sm:py-18 xl:flex-row xl:items-center xl:py-20">
                    <h1 className="absolute top-4 right-3 z-1 font-heading text-[150px]/[120px] font-extrabold tracking-tighter text-[rgba(17,17,17,0.04)] sm:text-[220px]/[180px] xl:text-[260px]/44">
                        {homeServiceWork.number}
                    </h1>

                    {homeServiceWork.mobileScreens ? (
                        <MobileScreensMockup
                            className="relative z-2 order-2 h-[300px] w-full max-w-[780px] sm:h-[415px] xl:order-none xl:w-[54vw]"
                            screens={homeServiceWork.mobileScreens}
                            alt={homeServiceWork.imageAlt} />
                    ) : (
                        <DesktopMockup
                            className="relative z-2 order-2 w-full max-w-[780px] xl:order-none xl:w-[54vw]"
                            src={homeServiceWork.image}
                            alt={homeServiceWork.imageAlt}
                            url={`${homeServiceWork.slug}.case`} />
                    )}

                    <div className="relative z-2 order-1 max-w-[560px] xl:order-none xl:max-w-[540px]">
                        <p className="mb-4 font-label text-muted text-[12px]">{homeServiceWork.number}</p>
                        <h1 className="mb-5 font-heading text-heading text-[52px]/[56px] font-extrabold tracking-tight sm:text-[64px]/[68px]">{homeServiceWork.title}</h1>
                        <h2 className="mb-9 font-heading text-muted text-[24px]/[30px] font-normal tracking-tight sm:mb-10 sm:text-[26px]/[32px]">{homeServiceWork.subtitle}</h2>
                        <div className="mb-5 h-1 w-12 border bg-muted"></div>
                        <p className="mb-8 font-body text-body text-[16px]/[25px]">{homeServiceWork.description}</p>

                        <div className="mb-6 flex flex-wrap items-center gap-8">
                            <div className="flex flex-col gap-1">
                                <p className="font-label text-muted tracking-tight">ROLE</p>
                                <p className="font-body text-heading tracking-tight">{homeServiceWork.role}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="font-label text-muted tracking-tight">YEAR</p>
                                <p className="font-body text-heading tracking-tight">{homeServiceWork.years}</p>
                            </div>
                        </div>

                        <div className="mb-10 flex flex-wrap items-center gap-1">
                            {homeServiceWork.stack.map((tech) => (
                                <div key={tech} className="border border-muted px-2.5 py-1 font-label text-muted text-[14px]">
                                    <p>{tech}</p>
                                </div>
                            ))}
                        </div>

                        <Link href={`/works/${homeServiceWork.slug}`} className="inline-flex border-b border-b-body p-2 font-label text-heading text-[14px]/[16px] tracking-wide">
                            VIEW CASE STUDY →
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container border-b border-b-muted bg-background px-6 pt-14 pb-16 sm:px-10 sm:pt-20 sm:pb-22">
                <div className="mb-10 flex flex-col items-start justify-between gap-6 border-b border-b-muted pb-7 md:mb-12 md:flex-row md:items-end">
                    <div>
                        <p className="mb-4 font-label text-muted text-[12px] tracking-wide uppercase">Additional Projects</p>
                        <h2 className="font-heading text-heading text-[52px]/[56px] font-extrabold tracking-tight sm:text-[64px]/[68px]">More Work</h2>
                    </div>
                    <p className="font-label text-muted text-[12px] tracking-wide uppercase md:mb-3">Creative & Technical</p>
                </div>

                <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2 xl:mb-22 xl:grid-cols-3 xl:gap-8">
                    {additionalProjects.map((project) => (
                        <article key={project.title}>
                            {project.mobileScreens ? (
                                <MobileScreensMockup
                                    className="mb-5 h-[300px] w-full border border-muted bg-background-secondary sm:h-[340px] md:h-[282px]"
                                    screens={project.mobileScreens}
                                    alt={project.imageAlt} />
                            ) : (
                                <Image
                                    className="mb-5 h-[300px] w-full border border-muted object-cover sm:h-[340px] md:h-[282px]"
                                    src={project.image}
                                    width={425}
                                    height={282}
                                    alt={project.imageAlt} />
                            )}

                            <div className="mb-5 flex items-center justify-between">
                                <p className="font-label text-muted text-[12px] tracking-wide">{project.number}</p>
                                <Link href={`/works/${project.slug}`} className="font-label text-heading text-[18px]/[18px]" aria-label={`View ${project.title}`}>
                                    →
                                </Link>
                            </div>

                            <h3 className="mb-1.5 font-heading text-heading text-[34px]/[36px] font-extrabold tracking-tight">{project.title}</h3>
                            <p className="mb-3 font-body text-body text-[15px]">{project.subtitle}</p>
                            <p className="mb-5 font-body text-muted text-[14px]/[22px]">{project.description}</p>

                            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                                <div>
                                    <p className="mb-1 font-label text-muted text-[11px] tracking-wide uppercase">{project.role}</p>
                                    <p className="font-label text-muted text-[11px] tracking-wide">{project.years}</p>
                                </div>
                                <div className="flex flex-wrap items-center gap-1 sm:justify-end">
                                    {project.stack.map((tech) => (
                                        <div key={tech} className="border border-muted px-2 py-1 font-label text-muted text-[11px]">
                                            <p>{tech}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="flex justify-start border-t border-t-muted pt-8 md:justify-end">
                    <Link href="/works" className="inline-flex items-center gap-5 border-b border-b-heading pb-1 font-heading text-heading text-[34px]/[38px] font-extrabold tracking-tight sm:gap-7 sm:text-[42px]/[46px]">
                        EXPLORE MORE WORK
                        <span className="font-label text-[28px]/[28px] sm:text-[32px]/[32px]">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
