import type { Work } from "@/data/works";

type CaseStudyRoleProps = {
    work: Work;
};

export function CaseStudyRole({ work }: CaseStudyRoleProps) {
    const roleCells = [...work.roleItems, ""];

    return (
        <section className="border-t border-t-muted">
            <div className="container px-10 py-20">
                <div className="grid grid-cols-[0.36fr_1fr] gap-24">
                    <div>
                        <div className="flex items-baseline gap-4 mb-16">
                            <div className="flex items-center gap-5">
                                <p className="font-label text-muted text-[12px] tracking-wide">02</p>
                                <div className="w-5 h-px bg-muted"></div>
                            </div>
                            <h2 className="font-heading text-heading text-[48px]/[52px] tracking-tight font-extrabold">MY ROLE</h2>
                        </div>

                        <div className="mb-8">
                            <p className="font-label text-muted text-[12px] tracking-wide uppercase mb-4">Title</p>
                            <p className="font-body text-heading text-[20px]">{work.role}</p>
                        </div>

                        <div>
                            <p className="font-label text-muted text-[12px] tracking-wide uppercase mb-4">Project</p>
                            <p className="font-body text-heading text-[20px]">{work.years}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 self-end border border-muted">
                        {roleCells.map((item, index) => {
                            const itemNumber = String(index + 1).padStart(2, "0");
                            const isRightColumn = index % 2 === 1;
                            const isLastRow = index >= roleCells.length - 2;

                            return (
                                <div
                                    key={`${itemNumber}-${item || "empty"}`}
                                    className={`min-h-[58px] flex items-center gap-4 px-7 py-4 ${!isRightColumn ? "border-r border-r-muted" : ""} ${!isLastRow ? "border-b border-b-muted" : ""}`}
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
