import { siteConfig } from "@/config/site";
import { ROUTES } from "@/utils/routes";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const staticPages: MetadataRoute.Sitemap = [
      {
        url: `${siteConfig.appUrl}${ROUTES.HOME}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1.0,
      },
    ];

    return staticPages;
  } catch (err) {
    return [];
  }
}
