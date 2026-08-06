const capabilityGroups = [
    {
        title: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Three.js", "Framer Motion", "CSS / Tailwind", "GSAP"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Prisma ORM", "PostgreSQL", "REST APIs", "GraphQL", "AWS", "Docker"],
    },
    {
        title: "Mobile",
        skills: ["React Native", "Expo", "iOS / Android", "App Store", "Push notifications", "TestFlight"],
    },
    {
        title: "Creative",
        skills: ["WebGL / GLSL", "Three.js scenes", "Blender", "Unity", "Motion design", "Interactive UI"],
    },
];

export function Capabilities() {
    return (
        <section className="bg-surface-dark">
            <div className="container px-6 pt-18 pb-18 sm:px-10 sm:pt-24 sm:pb-24 xl:pt-30 xl:pb-26">
                <div className="mb-10 flex items-end justify-between gap-6 border-b border-b-[rgba(242,239,231,0.08)] pb-8 sm:mb-14 sm:pb-10">
                    <h2 className="font-heading text-on-dark-heading text-[52px]/[56px] font-extrabold tracking-tight sm:text-[64px]/[70px]">Capabilities</h2>
                    <p className="mb-2 font-label text-on-dark-subheading text-[12px] tracking-wide uppercase">Skills</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    {capabilityGroups.map((group, index) => (
                        <div
                            key={group.title}
                            className={`border-t border-t-[rgba(242,239,231,0.08)] py-9 md:px-8 xl:border-t-0 xl:py-0 xl:pr-10 ${index > 0 ? "xl:border-l xl:border-l-[rgba(242,239,231,0.08)] xl:pl-10" : "md:pl-0"} ${index % 2 === 0 ? "md:border-l-0 md:pl-0" : "md:border-l md:border-l-[rgba(242,239,231,0.08)]"} ${index < 2 ? "md:border-t-0" : ""}`}
                        >
                            <p className="mb-7 font-label text-accent text-[12px] tracking-wide uppercase sm:mb-9">{group.title}</p>
                            <ul className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-1">
                                {group.skills.map((skill) => (
                                    <li key={skill} className="font-body text-on-dark-body text-[18px]/[22px]">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
