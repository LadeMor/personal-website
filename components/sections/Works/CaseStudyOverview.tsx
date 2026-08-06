import type { Work } from "@/data/works";

type CaseStudyOverviewProps = {
    work: Work;
};

export function CaseStudyOverview({ work }: CaseStudyOverviewProps) {
    return (
        <section className="border-t border-t-muted">
            <div className="container grid gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_0.85fr] lg:gap-20 lg:py-20 xl:gap-28">
                <div>
                    <div className="flex items-baseline gap-4">
                        <div className="mb-4 flex items-center gap-5">
                            <p className="font-label text-muted text-[12px] tracking-wide">{work.number}</p>
                            <div className="h-px w-5 bg-muted"></div>
                        </div>
                        <h2 className="mb-8 font-heading text-heading text-[40px]/[42px] font-extrabold tracking-tight sm:text-[48px]/[52px] lg:mb-10">OVERVIEW</h2>
                    </div>
                    <div className="flex gap-6">
                        <div className="w-px self-stretch bg-accent"></div>
                        <p className="max-w-[720px] font-heading text-heading text-[30px]/[35px] font-bold tracking-tight sm:text-[38px]/[42px] lg:max-w-[620px]">
                            {work.overviewTitle}
                        </p>
                    </div>
                </div>

                <p className="max-w-[720px] font-body text-body text-[17px]/[30px] lg:max-w-[640px] lg:pt-28">
                    {work.overviewText}
                </p>
            </div>
        </section>
    );
}
