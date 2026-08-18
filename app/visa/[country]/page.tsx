import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COUNTRIES, getCountryBySlug } from "@/lib/data/countries";
import { CountryHero } from "@/components/country/country-hero";
import { CountryInfoStrip } from "@/components/country/country-info-strip";
import {
  VisaTypesSection,
  RequirementsSection,
  DocumentsPreviewSection,
  ApplicationStepsSection,
  FaqSection,
  OfficialSourceCard,
  ImportantNotesSection,
} from "@/components/country/country-sections";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return COUNTRIES.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return {};

  const title = `تأشيرة ${country.nameAr} من السعودية | المتطلبات والمستندات والرسوم`;
  const description = `دليل شامل لتأشيرة ${country.nameAr} من السعودية: أنواع التأشيرات، المستندات، الرسوم، خطوات التقديم، ومركز التقديم المعتمد. ${country.shortDescriptionAr}`;

  return {
    title,
    description,
    alternates: { canonical: `/visa/${country.slug}` },
    openGraph: { title, description, url: `${siteConfig.url}/visa/${country.slug}` },
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: country.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <CountryHero country={country} />
      <CountryInfoStrip country={country} />

      <div className="container-app grid gap-10 py-12 lg:grid-cols-3 lg:gap-12 lg:py-16">
        <div className="space-y-10 lg:col-span-2">
          <VisaTypesSection country={country} />
          <RequirementsSection country={country} />
          <DocumentsPreviewSection country={country} />
          <ApplicationStepsSection country={country} />
          <FaqSection country={country} />
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <OfficialSourceCard country={country} />
          <ImportantNotesSection country={country} />
        </aside>
      </div>
    </>
  );
}
