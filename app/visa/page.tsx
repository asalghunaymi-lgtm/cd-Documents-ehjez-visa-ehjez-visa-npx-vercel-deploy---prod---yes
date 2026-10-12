import type { Metadata } from "next";
import Link from "@/components/i18n/link";
import { getCountries } from "@/lib/data/countries";
import { getI18n } from "@/lib/i18n/server";
import { CountryCard } from "@/components/home/country-card";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.visaIndex.metaTitle, description: t.visaIndex.metaDescription };
}

export default async function VisaIndexPage() {
  const { t, locale } = await getI18n();
  const c = t.visaIndex;
  return (
    <div className="container-app py-12 sm:py-16">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h1 className="text-2xl font-extrabold text-navy-950 sm:text-3xl">{c.title}</h1>
        <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
          {c.lead}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {getCountries(locale).map((country) => (
          <CountryCard key={country.slug} country={country} />
        ))}
      </div>

      <div className="mt-10 text-center text-sm text-muted-foreground">
        {c.notFoundStart}{" "}
        <Link href="/faq" className="font-semibold text-navy-800 underline">
          {c.notFoundLink}
        </Link>{" "}
        {c.notFoundEnd}
      </div>
    </div>
  );
}
