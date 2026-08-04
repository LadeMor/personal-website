import type { Work } from "@/data/works";

type CaseStudyOverviewProps = {
    work: Work;
};

export function CaseStudyOverview({ work }: CaseStudyOverviewProps) {
    return (
        <section className="border-t border-t-muted">
            <div className="container px-10 py-20 grid grid-cols-[1fr_0.85fr] gap-28">
                <div>
                    <div className="flex items-baseline gap-4">
                        <div className="flex items-center gap-5 mb-4">
                            <p className="font-label text-muted text-[12px] tracking-wide">{work.number}</p>
                            <div className="w-5 h-px bg-muted"></div>
                        </div>
                        <h2 className="font-heading text-heading text-[48px]/[52px] tracking-tight font-extrabold mb-10">OVERVIEW</h2>
                    </div>
                    <div className="flex gap-6">
                        <div className="w-px bg-accent self-stretch"></div>
                        <p className="font-heading text-heading text-[38px]/[42px] tracking-tight font-bold max-w-[620px]">
                            {work.overviewTitle}
                        </p>
                    </div>
                </div>

                <p className="font-body text-body text-[17px]/[30px] pt-28 max-w-[640px]">
                    {work.overviewText}
                </p>
            </div>
        </section>
    );
}
