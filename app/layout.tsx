import type { Metadata } from "next";
import "@fontsource/cairo/400.css";
import "@fontsource/cairo/500.css";
import "@fontsource/cairo/600.css";
import "@fontsource/cairo/700.css";
import "@fontsource/cairo/800.css";
import "@fontsource/cairo/900.css";
import "./globals.css";
import { PublicChrome } from "@/components/layout/public-chrome";
import { HtmlLangSync } from "@/components/i18n/html-lang-sync";
import { siteConfig } from "@/config/site";
import { getI18n, getPathname, languageAlternates } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  const pathname = await getPathname();

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${t.meta.siteName} | ${t.meta.defaultTitleSuffix}`,
      template: `%s | ${t.meta.siteName}`,
    },
    description: t.meta.description,
    keywords: t.meta.keywords,
    openGraph: {
      type: "website",
      locale: t.meta.ogLocale,
      alternateLocale: locale === "ar" ? "en_GB" : "ar_SA",
      url: siteConfig.url,
      title: t.meta.siteName,
      siteName: t.meta.siteName,
      description: t.meta.description,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t.meta.siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.siteName,
      description: t.meta.description,
      images: ["/og-image.jpg"],
    },
    robots: { index: true, follow: true },
    alternates: languageAlternates(pathname, locale),
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { locale, dir, t } = await getI18n();

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: t.meta.siteName,
    alternateName: locale === "ar" ? siteConfig.nameEn : siteConfig.nameAr,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/og-image.jpg`,
    description: t.meta.description,
    telephone: siteConfig.supportPhone,
    email: siteConfig.supportEmail,
    areaServed: "SA",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
    },
  };

  return (
    <html lang={locale} dir={dir} className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <HtmlLangSync />
        <PublicChrome>{children}</PublicChrome>
      </body>
    </html>
  );
}
