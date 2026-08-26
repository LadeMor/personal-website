import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

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
        <section id="experience" className="overflow-x-clip bg-background-secondary">
            <div className="container px-6 pt-18 pb-8 sm:px-10 sm:pt-24">
                <Reveal className="mb-10" distance={20} duration={0.75}>
                    <p className="mb-5 font-label text-muted text-[12px] tracking-wide uppercase">Career / Selected Experience</p>
                    <h2 className="font-heading text-heading text-[52px]/[56px] font-extrabold tracking-tight sm:text-[64px]/[70px]">Experience</h2>
                </Reveal>

                <Reveal className="hidden lg:block" distance={30} duration={0.85} amount={0.08}>
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
                                <th className="pb-8 text-left font-label text-muted text-[12px] font-normal tracking-wide uppercase">Company / Role</th>
                                <th className="pb-8 text-left font-label text-muted text-[12px] font-normal tracking-wide uppercase">Responsibilities</th>
                                <th className="pb-8 text-left font-label text-muted text-[12px] font-normal tracking-wide uppercase">Focus</th>
                                <th aria-label="Open" className="pb-8"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {careerItems.map((item) => (
                                <tr key={item.company} className="border-b border-b-muted">
                                    <td className="align-top py-10 pr-8">
                                        <p className="mb-4 font-label text-muted text-[12px] tracking-wide">{item.number}</p>
                                        <p className="font-label text-muted text-[13px] tracking-wide uppercase">{item.years}</p>
                                    </td>
                                    <td className="align-top py-10 pr-10">
                                        <h3 className="mb-2 font-heading text-heading text-[30px]/[32px] font-extrabold tracking-tight">{item.company}</h3>
                                        <p className="font-body text-body text-[15px]/[21px]">{item.role}</p>
                                    </td>
                                    <td className="align-top py-10 pr-12">
                                        <p className="max-w-[760px] font-body text-body text-[17px]/[29px]">{item.responsibilities}</p>
                                    </td>
                                    <td className="align-top py-10 pr-8">
                                        <p className="mb-3 font-label text-muted text-[11px] tracking-wide uppercase">Focus</p>
                                        <div className="flex flex-wrap gap-1">
                                            {item.focus.map((tag) => (
                                                <div key={tag} className="border border-muted px-2 py-1 font-label text-muted text-[11px]">
                                                    <p>{tag}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Reveal>

                <div className="lg:hidden">
                    {careerItems.map((item, index) => (
                        <Reveal
                            as="article"
                            key={item.company}
                            className="border-t border-t-muted py-10 last:border-b last:border-b-muted"
                            distance={28}
                            duration={0.75}
                            delay={index * 0.08}
                            amount={0.1}
                        >
                            <div className="mb-9">
                                <p className="mb-5 font-label text-muted text-[16px]/[18px] tracking-wide">{item.number}</p>
                                <p className="font-label text-muted text-[18px]/[30px] tracking-wide uppercase">
                                    {item.years.split(" ").map((year) => (
                                        <span key={year} className="block">{year}</span>
                                    ))}
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="mb-3 font-heading text-heading text-[30px]/[32px] font-extrabold tracking-tight">{item.company}</h3>
                                <p className="font-body text-body text-[22px]/[28px]">{item.role}</p>
                            </div>

                            <p className="mb-7 max-w-[680px] font-body text-body text-[22px]/[37px]">{item.responsibilities}</p>

                            <div>
                                <p className="mb-3 font-label text-muted text-[11px] tracking-wide uppercase">Focus</p>
                                <div className="flex flex-wrap gap-1">
                                    {item.focus.map((tag) => (
                                        <div key={tag} className="border border-muted px-2 py-1 font-label text-muted text-[11px]">
                                            <p>{tag}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal
                    className="flex flex-col items-start justify-between gap-6 pt-10 sm:pt-12 lg:flex-row lg:items-end"
                    distance={20}
                    duration={0.75}
                    amount={0.3}
                >
                    <p className="font-label text-muted text-[12px] tracking-wide uppercase">3 Positions Listed</p>
                    <Link href="/" className="inline-flex items-center gap-5 border-b border-b-heading pb-1 font-heading text-heading text-[32px]/[36px] font-extrabold tracking-tight sm:text-[42px]/[46px] lg:gap-7">
                        VIEW FULL EXPERIENCE / DOWNLOAD CV
                        <span className="font-label text-[28px]/[28px] sm:text-[32px]/[32px]">→</span>
                    </Link>
                </Reveal>
            </div>
        </section>
    );
}
