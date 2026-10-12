import Link from "@/components/i18n/link";
import { getI18n } from "@/lib/i18n/server";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CountryVisaInfo } from "@/types";
import { formatArabicDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

export async function CountryHero({ country }: { country: CountryVisaInfo }) {
  const { t, locale } = await getI18n();
  return (
    <section className={cn("relative overflow-hidden bg-gradient-to-br", country.heroImageGradient)}>
      <div className="container-app relative py-14 sm:py-20">
        <Link href="/visa" className="mb-5 inline-block text-xs font-semibold text-navy-200 hover:text-gold-300">
          {t.country.allCountries}
        </Link>
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <span className="flex size-20 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-5xl">
            {country.flagEmoji}
          </span>
          <div>
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              {t.country.title(country.nameAr)}
            </h1>
            <p className="mt-2 max-w-xl text-[14px] leading-7 text-navy-100">{country.shortDescriptionAr}</p>
            <div className="mt-3 flex items-center gap-2">
              <Badge variant="outline" className="border-white/20 bg-white/5 text-navy-100">
                {t.country.lastUpdated(formatArabicDate(country.lastUpdated, locale))}
              </Badge>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="gold">
            <Link href={`/apply?country=${country.slug}`}>{t.country.startApplication(country.nameAr)}</Link>
          </Button>
          <Button asChild size="lg" variant="white">
            <Link href={`/appointments?country=${country.slug}`}>{t.country.bookAppointment}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
