import type { MetadataRoute } from "next";
import { COUNTRIES } from "@/lib/data/countries";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/visa",
    "/apply",
    "/documents",
    "/dashboard",
    "/pricing",
    "/about",
    "/faq",
    "/appointments",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const countryRoutes = COUNTRIES.map((c) => ({
    url: `${siteConfig.url}/visa/${c.slug}`,
    lastModified: new Date(c.lastUpdated),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...countryRoutes];
}
