import type { MetadataRoute } from "next";
import { caseStudyReferences } from "@/data/references";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const legalPages = ["/impressum", "/datenschutz", "/agb"];

  return [
    {
      url: siteConfig.baseUrl,
      lastModified,
      priority: 1,
    },
    ...caseStudyReferences.map((reference) => ({
      url: absoluteUrl(reference.canonicalPath),
      lastModified,
      priority: 0.8,
    })),
    ...legalPages.map((path) => ({
      url: absoluteUrl(path),
      lastModified,
      priority: 0.3,
    })),
  ];
}
