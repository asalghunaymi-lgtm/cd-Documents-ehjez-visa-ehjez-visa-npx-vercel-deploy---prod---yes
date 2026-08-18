import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CountryVisaInfo } from "@/types";
import { formatArabicDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function CountryHero({ country }: { country: CountryVisaInfo }) {
  return (
    <section className={cn("relative overflow-hidden bg-gradient-to-br", country.heroImageGradient)}>
      <div className="container-app relative py-14 sm:py-20">
        <Link href="/visa" className="mb-5 inline-block text-xs font-semibold text-navy-200 hover:text-gold-300">
          ← جميع الدول
        </Link>
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <span className="flex size-20 items-center justify-center rounded-2xl bg-white/10 text-5xl backdrop-blur-sm">
            {country.flagEmoji}
          </span>
          <div>
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              تأشيرة {country.nameAr}
            </h1>
            <p className="mt-2 max-w-xl text-[14px] leading-7 text-navy-100">{country.shortDescriptionAr}</p>
            <div className="mt-3 flex items-center gap-2">
              <Badge variant="outline" className="border-white/20 bg-white/5 text-navy-100">
                آخر تحديث: {formatArabicDate(country.lastUpdated)}
              </Badge>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="gold">
            <Link href={`/apply?country=${country.slug}`}>ابدأ طلب تأشيرة {country.nameAr}</Link>
          </Button>
          <Button asChild size="lg" variant="white">
            <Link href={`/appointments?country=${country.slug}`}>حجز موعد</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
