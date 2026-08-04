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
        <section className="container px-10 pt-12 pb-20 border-t border-t-muted min-h-[calc(100vh-61px)]">
            <div className="flex items-center justify-between mb-20">
                <Link href="/works" className="font-label text-muted text-[12px] tracking-wide uppercase border-b border-b-muted pb-1">
                    ← Back to Works
                </Link>
                <p className="font-label text-muted text-[12px] tracking-[0.35em] uppercase">
                    {work.number} — {work.category}
                </p>
            </div>

            <div className="grid grid-cols-[0.82fr_1.18fr] gap-16 items-center">
                <div className="relative">
                    <div className="relative z-2">
                        <p className="font-heading text-[180px]/[150px] font-extrabold tracking-tight text-[rgba(17,17,17,0.04)]">
                            {work.number}
                        </p>
                        <h1 className="font-heading text-heading text-[108px]/[105px] tracking-tight font-extrabold max-w-[520px]">
                            {work.title}
                        </h1>
                        <h2 className="font-heading text-muted text-[30px]/[34px] tracking-tight font-normal mb-6">{work.subtitle}</h2>
                        <div className="w-10 h-0.5 bg-accent mb-6"></div>

                        <div className="grid grid-cols-3 gap-8 mb-8 max-w-[560px]">
                            <div>
                                <p className="font-label text-muted text-[12px] tracking-wide uppercase mb-2">Year</p>
                                <p className="font-body text-heading text-[16px]">{work.years}</p>
                            </div>
                            <div>
                                <p className="font-label text-muted text-[12px] tracking-wide uppercase mb-2">Role</p>
                                <p className="font-body text-heading text-[16px]">{work.role}</p>
                            </div>
                            <div>
                                <p className="font-label text-muted text-[12px] tracking-wide uppercase mb-2">Status</p>
                                <p className="font-body text-heading text-[16px] uppercase">{primaryCategory} / Case Study</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-10 max-w-[560px]">
                            {work.stack.map((tech) => (
                                <div key={tech} className="font-label text-muted text-[11px] border border-muted px-2 py-1">
                                    <p>{tech}</p>
                                </div>
                            ))}
                        </div>

                        <p className="font-body text-body text-[17px]/[30px] max-w-[560px]">{work.description}</p>
                    </div>
                </div>

                <div className="relative">
                    {work.mobileScreens ? (
                        <MobileScreensMockup
                            className="relative z-2 w-full h-[560px] shadow-[0_45px_90px_rgba(17,17,17,0.12)]"
                            screens={work.mobileScreens}
                            alt={work.imageAlt} />
                    ) : (
                        <DesktopMockup
                            className="relative z-2 w-full shadow-[0_45px_90px_rgba(17,17,17,0.12)]"
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
