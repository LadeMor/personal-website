import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";
import { works } from "@/data/works";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: siteUrl,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${siteUrl}/works`,
            changeFrequency: "monthly",
            priority: 0.9,
        },
    ];

    const workPages: MetadataRoute.Sitemap = works.map((work) => ({
        url: `${siteUrl}/works/${work.slug}`,
        changeFrequency: "yearly",
        priority: 0.8,
    }));

    return [...staticPages, ...workPages];
}
