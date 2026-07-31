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
            <div className="container px-10 pt-30 pb-26">
                <div className="flex items-end justify-between border-b border-b-[rgba(242,239,231,0.08)] pb-10 mb-14">
                    <h2 className="font-heading text-on-dark-heading text-[64px]/[70px] tracking-tight font-extrabold">Capabilities</h2>
                    <p className="font-label text-on-dark-subheading text-[12px] tracking-[0.45em] uppercase mb-2">Skills</p>
                </div>

                <div className="grid grid-cols-4">
                    {capabilityGroups.map((group, index) => (
                        <div
                            key={group.title}
                            className={`pr-10 ${index > 0 ? "border-l border-l-[rgba(242,239,231,0.08)] pl-10" : ""}`}
                        >
                            <p className="font-label text-accent text-[12px] tracking-[0.45em] uppercase mb-9">{group.title}</p>
                            <ul className="space-y-5">
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
