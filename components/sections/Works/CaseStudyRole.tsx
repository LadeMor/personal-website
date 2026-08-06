import type { Work } from "@/data/works";

type CaseStudyRoleProps = {
    work: Work;
};

export function CaseStudyRole({ work }: CaseStudyRoleProps) {
    const roleCells = [...work.roleItems, ""];

    return (
        <section className="border-t border-t-muted">
            <div className="container px-6 py-16 sm:px-10 lg:py-20">
                <div className="grid gap-12 lg:grid-cols-[0.36fr_1fr] lg:gap-16 xl:gap-24">
                    <div>
                        <div className="mb-10 flex items-baseline gap-4 lg:mb-16">
                            <div className="flex items-center gap-5">
                                <p className="font-label text-muted text-[12px] tracking-wide">02</p>
                                <div className="h-px w-5 bg-muted"></div>
                            </div>
                            <h2 className="font-heading text-heading text-[40px]/[42px] font-extrabold tracking-tight sm:text-[48px]/[52px]">MY ROLE</h2>
                        </div>

                        <div className="mb-8">
                            <p className="mb-4 font-label text-muted text-[12px] tracking-wide uppercase">Title</p>
                            <p className="font-body text-heading text-[20px]">{work.role}</p>
                        </div>

                        <div>
                            <p className="mb-4 font-label text-muted text-[12px] tracking-wide uppercase">Project</p>
                            <p className="font-body text-heading text-[20px]">{work.years}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 self-end border border-muted md:grid-cols-2">
                        {roleCells.map((item, index) => {
                            const itemNumber = String(index + 1).padStart(2, "0");
                            const isRightColumn = index % 2 === 1;
                            const isLastRow = index >= roleCells.length - 2;
                            const isLastCell = index === roleCells.length - 1;

                            return (
                                <div
                                    key={`${itemNumber}-${item || "empty"}`}
                                    className={`flex min-h-[58px] items-center gap-4 px-5 py-4 sm:px-7 ${!isLastCell ? "border-b border-b-muted md:border-b-0" : ""} ${!isRightColumn ? "md:border-r md:border-r-muted" : ""} ${!isLastRow ? "md:border-b md:border-b-muted" : ""}`}
                                >
                                    {item && (
                                        <>
                                            <p className="font-label text-muted text-[11px] tracking-wide">{itemNumber}</p>
                                            <p className="font-body text-body text-[15px]/[22px]">{item}</p>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
