import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";
import { DesktopMockup } from "@/components/ui/DesktopMockup";
import { MobileScreensMockup } from "@/components/ui/MobileScreensMockup";
import { Reveal } from "@/components/ui/Reveal";
import { AccentHoverLink } from "@/components/ui/AccentHoverLink";

export function Works() {
    const featuredWorks = works.slice(0, 2);
    const additionalProjects = works.slice(2, 5);
    const [flamioWork, homeServiceWork] = featuredWorks;

    return (
        <section id="works" className="overflow-x-clip">
            <Reveal
                className="container flex items-end justify-between gap-6 border-b border-b-muted px-6 py-6 sm:px-10"
                distance={18}
                duration={0.7}
            >
                <h2 className="font-heading text-heading text-[48px]/[52px] font-extrabold tracking-tight sm:text-[64px]/[68px]">Selected Work</h2>
                <p className="shrink-0 pb-2 font-label text-muted text-[11px] tracking-wide sm:text-[12px]">2019 — {new Date().getFullYear()}</p>
            </Reveal>

            <div className="bg-surface-dark">
                <div className="container relative flex flex-col items-start justify-between gap-12 px-6 py-14 sm:px-10 sm:py-18 xl:flex-row xl:py-20">
                    <h1 className="absolute top-4 left-3 z-1 font-heading text-[150px]/[120px] font-extrabold tracking-tighter text-[rgba(255,255,255,0.03)] sm:text-[220px]/[180px] xl:text-[260px]/44">
                        {flamioWork.number}
                    </h1>

                    <Reveal
                        className="relative z-2 max-w-[560px] xl:max-w-[500px]"
                        direction="left"
                        distance={42}
                        duration={0.85}
                        amount={0.12}
                    >
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

                        <AccentHoverLink
                            href={`/works/${flamioWork.slug}`}
                            className="border-b border-b-muted p-2"
                            labelClassName="font-label text-[14px]/[16px] tracking-wide"
                            icon={<span className="font-label text-[14px]/[16px]">→</span>}
                        >
                            VIEW CASE STUDY
                        </AccentHoverLink>
                    </Reveal>

                    <Reveal
                        className="relative z-2 w-full max-w-[780px] xl:w-[54vw]"
                        direction="right"
                        distance={52}
                        duration={1}
                        blur={2}
                        amount={0.15}
                        delay={0.08}
                    >
                        {flamioWork.mobileScreens ? (
                            <MobileScreensMockup
                                className="h-[300px] w-full sm:h-[415px]"
                                screens={flamioWork.mobileScreens}
                                alt={flamioWork.imageAlt} />
                        ) : (
                            <DesktopMockup
                                className="w-full"
                                src={flamioWork.image}
                                alt={flamioWork.imageAlt}
                                url={`${flamioWork.slug}.case`} />
                        )}
                    </Reveal>
                </div>
            </div>

            <div className="bg-background-secondary">
                <div className="container relative flex flex-col items-start justify-between gap-12 border-b border-b-muted px-6 py-14 sm:px-10 sm:py-18 xl:flex-row xl:items-center xl:py-20">
                    <h1 className="absolute top-4 right-3 z-1 font-heading text-[150px]/[120px] font-extrabold tracking-tighter text-[rgba(17,17,17,0.04)] sm:text-[220px]/[180px] xl:text-[260px]/44">
                        {homeServiceWork.number}
                    </h1>

                    <Reveal
                        className="relative z-2 order-2 w-full max-w-[780px] xl:order-none xl:w-[54vw]"
                        direction="left"
                        distance={52}
                        duration={1}
                        blur={2}
                        amount={0.15}
                    >
                        {homeServiceWork.mobileScreens ? (
                            <MobileScreensMockup
                                className="h-[300px] w-full sm:h-[415px]"
                                screens={homeServiceWork.mobileScreens}
                                alt={homeServiceWork.imageAlt} />
                        ) : (
                            <DesktopMockup
                                className="w-full"
                                src={homeServiceWork.image}
                                alt={homeServiceWork.imageAlt}
                                url={`${homeServiceWork.slug}.case`} />
                        )}
                    </Reveal>

                    <Reveal
                        className="relative z-2 order-1 max-w-[560px] xl:order-none xl:max-w-[540px]"
                        direction="right"
                        distance={42}
                        duration={0.85}
                        amount={0.12}
                        delay={0.08}
                    >
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

                        <AccentHoverLink
                            href={`/works/${homeServiceWork.slug}`}
                            variant="light"
                            className="border-b border-b-body p-2"
                            labelClassName="font-label text-[14px]/[16px] tracking-wide"
                            icon={<span className="font-label text-[14px]/[16px]">→</span>}
                        >
                            VIEW CASE STUDY
                        </AccentHoverLink>
                    </Reveal>
                </div>
            </div>

            <div className="container border-b border-b-muted bg-background px-6 pt-14 pb-16 sm:px-10 sm:pt-20 sm:pb-22">
                <Reveal
                    className="mb-10 flex flex-col items-start justify-between gap-6 border-b border-b-muted pb-7 md:mb-12 md:flex-row md:items-end"
                    distance={22}
                    duration={0.75}
                    amount={0.2}
                >
                    <div>
                        <p className="mb-4 font-label text-muted text-[12px] tracking-wide uppercase">Additional Projects</p>
                        <h2 className="font-heading text-heading text-[52px]/[56px] font-extrabold tracking-tight sm:text-[64px]/[68px]">More Work</h2>
                    </div>
                    <p className="font-label text-muted text-[12px] tracking-wide uppercase md:mb-3">Creative & Technical</p>
                </Reveal>

                <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2 xl:mb-22 xl:grid-cols-3 xl:gap-8">
                    {additionalProjects.map((project, index) => (
                        <Reveal
                            as="article"
                            key={project.title}
                            className="h-full"
                            distance={30}
                            duration={0.8}
                            delay={index * 0.09}
                            amount={0.12}
                        >
                            <Link
                                href={`/works/${project.slug}`}
                                className="group block h-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                                aria-label={`View ${project.title} case study`}
                            >
                                <div className="mb-5 overflow-hidden">
                                    {project.mobileScreens ? (
                                        <MobileScreensMockup
                                            className="h-[300px] w-full border border-muted bg-background-secondary transition-transform duration-500 ease-out group-hover:scale-[1.035] group-focus-visible:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none sm:h-[340px] md:h-[282px]"
                                            screens={project.mobileScreens}
                                            alt={project.imageAlt} />
                                    ) : (
                                        <Image
                                            className="h-[300px] w-full border border-muted object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035] group-focus-visible:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none sm:h-[340px] md:h-[282px]"
                                            src={project.image}
                                            width={425}
                                            height={282}
                                            alt={project.imageAlt} />
                                    )}
                                </div>

                                <div className="mb-5 flex items-center justify-between">
                                    <p className="font-label text-muted text-[12px] tracking-wide">{project.number}</p>
                                    <span className="font-label text-heading text-[18px]/[18px] transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transform-none">
                                        →
                                    </span>
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
                            </Link>
                        </Reveal>
                    ))}
                </div>

                <Reveal
                    className="flex justify-start border-t border-t-muted pt-8 md:justify-end"
                    distance={18}
                    duration={0.7}
                    amount={0.4}
                >
                    <AccentHoverLink
                        href="/works"
                        variant="light"
                        className="border-b border-b-heading pb-1"
                        contentClassName="gap-5 sm:gap-7"
                        labelClassName="font-heading text-[34px]/[38px] font-extrabold tracking-tight sm:text-[42px]/[46px]"
                        icon={<span className="font-label text-[28px]/[28px] sm:text-[32px]/[32px]">→</span>}
                    >
                        EXPLORE MORE WORK
                    </AccentHoverLink>
                </Reveal>
            </div>
        </section>
    );
}
