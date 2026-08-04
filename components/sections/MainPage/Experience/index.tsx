import Link from "next/link";

const careerItems = [
    {
        number: "01",
        years: "2024 2026",
        company: "FLAMIO",
        role: "Frontend Lead / Product Engineer",
        responsibilities:
            "Led frontend architecture and product interface development for an AI-powered UX analysis platform. Worked across the web platform, Chrome extension, session flows, dashboards and product interaction design.",
        focus: ["Next.js", "TypeScript", "Chrome Extension", "Product UX"],
    },
    {
        number: "02",
        years: "2023 2024",
        company: "HOME SERVICE QUOTATION",
        role: "Full-stack Developer",
        responsibilities:
            "Built a cross-platform service marketplace spanning web, mobile and backend infrastructure. Worked on user flows, admin tools, request management, chat, cloud storage and deployment.",
        focus: ["Next.js", "React Native", "Node.js", "PostgreSQL", "AWS"],
    },
    {
        number: "03",
        years: "2022 PRESENT",
        company: "INDEPENDENT PROJECTS",
        role: "Frontend, Mobile & Creative Development",
        responsibilities:
            "Built and explored product interfaces, mobile applications, interactive web experiences and game prototypes. Shipped multiple personal projects across diverse stacks and platforms.",
        focus: ["React", "Expo", "Three.js", "Unity", "Blender"],
    },
];

export function Experience() {
    return (
        <section id="experience" className="bg-background-secondary">
            <div className="container px-10 pt-24 pb-8">
                <div className="mb-10">
                    <p className="font-label text-muted text-[12px] tracking-wide uppercase mb-5">Career / Selected Experience</p>
                    <h2 className="font-heading text-heading text-[64px]/[70px] tracking-tight font-extrabold">Experience</h2>
                </div>

                <table className="w-full table-fixed border-collapse">
                    <colgroup>
                        <col className="w-[12%]" />
                        <col className="w-[22%]" />
                        <col className="w-[43%]" />
                        <col className="w-[20%]" />
                        <col className="w-[3%]" />
                    </colgroup>
                    <thead>
                        <tr className="border-b border-b-muted">
                            <th aria-label="Timeline" className="pb-8 text-left"></th>
                            <th className="pb-8 text-left font-label text-muted text-[12px] tracking-wide uppercase font-normal">Company / Role</th>
                            <th className="pb-8 text-left font-label text-muted text-[12px] tracking-wide uppercase font-normal">Responsibilities</th>
                            <th className="pb-8 text-left font-label text-muted text-[12px] tracking-wide uppercase font-normal">Focus</th>
                            <th aria-label="Open" className="pb-8"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {careerItems.map((item) => (
                            <tr key={item.company} className="border-b border-b-muted">
                                <td className="align-top py-10 pr-8">
                                    <p className="font-label text-muted text-[12px] tracking-wide mb-4">{item.number}</p>
                                    <p className="font-label text-muted text-[13px] tracking-wide uppercase">{item.years}</p>
                                </td>
                                <td className="align-top py-10 pr-10">
                                    <h3 className="font-heading text-heading text-[30px]/[32px] tracking-tight font-extrabold mb-2">{item.company}</h3>
                                    <p className="font-body text-body text-[15px]/[21px]">{item.role}</p>
                                </td>
                                <td className="align-top py-10 pr-12">
                                    <p className="font-body text-body text-[17px]/[29px] max-w-[760px]">{item.responsibilities}</p>
                                </td>
                                <td className="align-top py-10 pr-8">
                                    <p className="font-label text-muted text-[11px] tracking-[0.35em] uppercase mb-3">Focus</p>
                                    <div className="flex flex-wrap gap-1">
                                        {item.focus.map((tag) => (
                                            <div key={tag} className="font-label text-muted text-[11px] border border-muted px-2 py-1">
                                                <p>{tag}</p>
                                            </div>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex items-end justify-between pt-12">
                    <p className="font-label text-muted text-[12px] tracking-[0.35em] uppercase">3 Positions Listed</p>
                    <Link href="/" className="font-heading text-heading text-[42px]/[46px] tracking-tight font-extrabold border-b border-b-heading inline-flex items-center gap-7 pb-1">
                        VIEW FULL EXPERIENCE / DOWNLOAD CV
                        <span className="font-label text-[32px]/[32px]">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
