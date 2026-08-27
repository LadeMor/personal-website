import type { Metadata } from "next";
import { WorksSection } from "@/components/sections/Works";

export const metadata: Metadata = {
    title: "Selected Works",
    description:
        "Selected web, mobile, product and interactive projects designed and developed by Serhii Piatko.",
    openGraph: {
        title: "Selected Works | Serhii Piatko",
        description:
            "Selected web, mobile, product and interactive projects designed and developed by Serhii Piatko.",
    },
    twitter: {
        card: "summary",
        title: "Selected Works | Serhii Piatko",
        description:
            "Selected web, mobile, product and interactive projects designed and developed by Serhii Piatko.",
    },
};

export default function WorksPage() {
    return (
        <main id="top" className="bg-background-secondary">
            <WorksSection />
        </main>
    );
}
