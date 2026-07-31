import Image from "next/image";
import Link from "next/link";

const workFilters = ["All", "Product", "Web", "Mobile", "Creative", "Games"];

const works = [
    {
        number: "01",
        title: "FLAMIO",
        category: "Product / Web",
        description: "AI-powered UX analysis platform helping product teams identify friction across real user flows.",
        role: "Frontend Lead / Product Engineer",
        years: "2024-2026",
        stack: ["Next.js", "TypeScript", "Chrome Extension", "Product UX"],
        image: "/images/flamio_mockup.png",
    },
    {
        number: "02",
        title: "HOME SERVICE QUOTATION",
        category: "Product / Web / Mobile",
        description: "Cross-platform service marketplace connecting customers, businesses and administrators through request and chat workflows.",
        role: "Full-stack Developer",
        years: "2023-2024",
        stack: ["Next.js", "React Native", "Node.js", "PostgreSQL", "AWS"],
        image: "/images/flamio_mockup.png",
    },
    {
        number: "03",
        title: "TINY KITCHEN",
        category: "Creative / Games",
        description: "Interactive isometric cooking mini-game focused on playful timing, simple systems and tactile feedback.",
        role: "Creative Developer",
        years: "2026",
        stack: ["React", "Three.js", "Blender"],
        image: "/images/flamio_mockup.png",
    },
    {
        number: "04",
        title: "ABYSS BLOOM",
        category: "Games / Creative",
        description: "Dark underwater action prototype exploring atmosphere, combat rhythm and responsive top-down movement.",
        role: "Game Developer",
        years: "2026",
        stack: ["Unity", "C#", "2D"],
        image: "/images/flamio_mockup.png",
    },
    {
        number: "05",
        title: "FLOW FIELD STUDY",
        category: "Creative / Web",
        description: "Procedural WebGL experiment where hundreds of bezier particles react to cursor movement and scroll.",
        role: "Creative Frontend Developer",
        years: "2026",
        stack: ["Three.js", "WebGL", "GLSL"],
        image: "/images/flamio_mockup.png",
    },
    {
        number: "06",
        title: "MOBILE PRODUCT SYSTEM",
        category: "Mobile / Product",
        description: "Reusable mobile interface patterns for onboarding, booking, notifications and account management flows.",
        role: "Mobile Developer",
        years: "2025",
        stack: ["React Native", "Expo", "TypeScript"],
        image: "/images/flamio_mockup.png",
    },
];

export function WorksSection() {
    return (
        <>
            <section className="container px-10 pt-18 pb-12 border-t border-t-muted">
                <div className="flex justify-between mb-12">
                    <p className="font-label text-muted text-[12px] tracking-wide uppercase">Selected Work / 2022-2026</p>
                    <p className="font-label text-muted text-[12px] tracking-wide uppercase">{works.length} Projects</p>
                </div>

                <div className="grid grid-cols-[1fr_auto] items-end gap-10">
                    <div>
                        <h1 className="font-heading text-heading text-[160px]/[140px] tracking-tight font-extrabold mb-8">
                            WORKS
                        </h1>
                        <p className="font-body text-body text-[17px]/[28px] max-w-[480px]">
                            A selection of product, mobile and interactive projects built across frontend, full-stack development and creative technology.
                        </p>
                    </div>
                    <p className="font-label text-muted text-[12px] tracking-[0.35em] uppercase mb-2">Web / Mobile / Product / Creative</p>
                </div>
            </section>

            <section className="border-y border-y-muted">
                <div className="container px-10 flex items-center gap-9 py-4">
                    {workFilters.map((filter, index) => (
                        <button
                            key={filter}
                            className={`font-label text-[12px] tracking-wide uppercase pb-1 ${index === 0 ? "text-heading border-b border-b-accent" : "text-muted"}`}
                            type="button"
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </section>

            <section className="container px-10 pt-10 pb-16">
                <div className="flex justify-between border-b border-b-muted pb-5">
                    <p className="font-label text-muted text-[12px] tracking-wide uppercase">All Projects — {works.length}</p>
                    <p className="font-label text-muted text-[12px] tracking-wide uppercase">2022-2026</p>
                </div>

                <div className="grid grid-cols-2 border-l border-l-muted">
                    {works.map((work) => (
                        <article key={work.title} className="border-r border-r-muted border-b border-b-muted px-10 py-10">
                            <Image
                                className="w-full h-[410px] object-cover border border-muted mb-5"
                                src={work.image}
                                width={600}
                                height={410}
                                alt={`${work.title} project preview`} />

                            <div className="flex items-center justify-between mb-5">
                                <p className="font-label text-muted text-[12px] tracking-wide">{work.number}</p>
                                <Link href="/" className="font-label text-heading text-[11px] tracking-wide uppercase border border-muted px-3 py-1.5">
                                    Case Study
                                </Link>
                            </div>

                            <h2 className="font-heading text-heading text-[34px]/[36px] tracking-tight font-extrabold mb-1.5">{work.title}</h2>
                            <p className="font-label text-muted text-[11px] tracking-wide uppercase mb-5">{work.category}</p>
                            <p className="font-body text-body text-[15px]/[24px] mb-6 max-w-[590px]">{work.description}</p>

                            <div className="flex items-end justify-between gap-6 mb-6">
                                <div>
                                    <p className="font-label text-muted text-[11px] tracking-wide uppercase mb-1">{work.role}</p>
                                    <p className="font-label text-muted text-[11px] tracking-wide uppercase">{work.years}</p>
                                </div>
                                <div className="flex flex-wrap justify-end gap-1">
                                    {work.stack.map((tech) => (
                                        <div key={tech} className="font-label text-muted text-[11px] border border-muted px-2 py-1">
                                            <p>{tech}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Link href="/" className="font-label text-muted text-[12px] tracking-wide uppercase border-b border-b-muted pb-1">
                                View Case Study →
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}
