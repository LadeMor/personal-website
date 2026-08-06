import Link from "next/link";
import type { Work } from "@/data/works";
import { DesktopMockup } from "@/components/ui/DesktopMockup";
import { MobileScreensMockup } from "@/components/ui/MobileScreensMockup";

type CaseStudyHeroProps = {
    work: Work;
};

export function CaseStudyHero({ work }: CaseStudyHeroProps) {
    const primaryCategory = work.category.split(" / ")[0];

    return (
        <section className="container min-h-[calc(100vh-61px)] border-t border-t-muted px-6 pt-10 pb-16 sm:px-10 sm:pt-12 lg:pb-20">
            <div className="mb-14 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center lg:mb-20">
                <Link href="/works" className="border-b border-b-muted pb-1 font-label text-muted text-[12px] tracking-wide uppercase">
                    ← Back to Works
                </Link>
                <p className="font-label text-muted text-[12px] tracking-wide uppercase">
                    {work.number} — {work.category}
                </p>
            </div>

            <div className="grid gap-12 xl:grid-cols-[0.82fr_1.18fr] xl:items-center xl:gap-16">
                <div className="relative">
                    <div className="relative z-2">
                        <p className="font-heading text-[120px]/[96px] font-extrabold tracking-tight text-[rgba(17,17,17,0.04)] sm:text-[150px]/[125px] lg:text-[180px]/[150px]">
                            {work.number}
                        </p>
                        <h1 className="max-w-[760px] font-heading text-heading text-[62px]/[58px] font-extrabold tracking-tight sm:text-[86px]/[82px] lg:text-[108px]/[105px] xl:max-w-[560px]">
                            {work.title}
                        </h1>
                        <h2 className="mb-6 font-heading text-muted text-[26px]/[31px] font-normal tracking-tight sm:text-[30px]/[34px]">{work.subtitle}</h2>
                        <div className="mb-6 h-0.5 w-10 bg-accent"></div>

                        <div className="mb-8 grid max-w-[560px] grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-8">
                            <div>
                                <p className="mb-2 font-label text-muted text-[12px] tracking-wide uppercase">Year</p>
                                <p className="font-body text-heading text-[16px]">{work.years}</p>
                            </div>
                            <div>
                                <p className="mb-2 font-label text-muted text-[12px] tracking-wide uppercase">Role</p>
                                <p className="font-body text-heading text-[16px]">{work.role}</p>
                            </div>
                            <div>
                                <p className="mb-2 font-label text-muted text-[12px] tracking-wide uppercase">Status</p>
                                <p className="font-body text-heading text-[16px] uppercase">{primaryCategory} / Case Study</p>
                            </div>
                        </div>

                        <div className="mb-10 flex max-w-[560px] flex-wrap gap-1">
                            {work.stack.map((tech) => (
                                <div key={tech} className="border border-muted px-2 py-1 font-label text-muted text-[11px]">
                                    <p>{tech}</p>
                                </div>
                            ))}
                        </div>

                        <p className="max-w-[560px] font-body text-body text-[17px]/[30px]">{work.description}</p>
                    </div>
                </div>

                <div className="relative min-w-0">
                    {work.mobileScreens ? (
                        <MobileScreensMockup
                            className="relative z-2 h-[320px] w-full min-w-0 shadow-[0_45px_90px_rgba(17,17,17,0.12)] sm:h-[460px] xl:h-[560px]"
                            screens={work.mobileScreens}
                            alt={work.imageAlt} />
                    ) : (
                        <DesktopMockup
                            className="relative z-2 w-full max-w-[980px] shadow-[0_45px_90px_rgba(17,17,17,0.12)] xl:max-w-none"
                            src={work.image}
                            alt={work.imageAlt}
                            url={`${work.slug}.case`} />
                    )}
                    <div className="absolute -bottom-12 left-8 right-8 z-1 h-20 bg-muted opacity-10 blur-2xl"></div>
                </div>
            </div>
        </section>
    );
}
