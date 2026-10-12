import type { MetadataRoute } from "next";
import { COUNTRIES } from "@/lib/data/countries";
import { siteConfig } from "@/config/site";
import { localizeHref } from "@/lib/i18n/config";

/** Arabic + English URL for a path, each listing the other as its language alternate. */
function bilingual(path: string, entry: Omit<MetadataRoute.Sitemap[number], "url" | "alternates">) {
  const languages = {
    ar: `${siteConfig.url}${localizeHref(path || "/", "ar")}`,
    en: `${siteConfig.url}${localizeHref(path || "/", "en")}`,
  };
  return [
    { ...entry, url: languages.ar, alternates: { languages } },
    { ...entry, url: languages.en, alternates: { languages } },
  ];
}

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
  ].flatMap((route) =>
    bilingual(route, {
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })
  );

  const countryRoutes = COUNTRIES.flatMap((c) =>
    bilingual(`/visa/${c.slug}`, {
      lastModified: new Date(c.lastUpdated),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })
  );

  return [...staticRoutes, ...countryRoutes];
}
