import { notFound } from "next/navigation";
import { works } from "@/data/works";
import { CaseStudyHero } from "@/components/sections/Works/CaseStudyHero";
import { CaseStudyOverview } from "@/components/sections/Works/CaseStudyOverview";
import { CaseStudyRole } from "@/components/sections/Works/CaseStudyRole";
import { CaseStudyInterfaces } from "@/components/sections/Works/CaseStudyInterfaces";

type WorkCaseStudyPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return works.map((work) => ({
        slug: work.slug,
    }));
}

export async function generateMetadata({ params }: WorkCaseStudyPageProps) {
    const { slug } = await params;
    const work = works.find((item) => item.slug === slug);

    if (!work) {
        return {
            title: "Case Study",
        };
    }

    return {
        title: `${work.title} Case Study`,
        description: work.description,
    };
}

export default async function WorkCaseStudyPage({ params }: WorkCaseStudyPageProps) {
    const { slug } = await params;
    const work = works.find((item) => item.slug === slug);

    if (!work) {
        notFound();
    }

    return (
        <main id="top" className="bg-background-secondary">
            <CaseStudyHero work={work} />
            <CaseStudyOverview work={work} />
            <CaseStudyRole work={work} />
            <CaseStudyInterfaces work={work} />
        </main>
    );
}
