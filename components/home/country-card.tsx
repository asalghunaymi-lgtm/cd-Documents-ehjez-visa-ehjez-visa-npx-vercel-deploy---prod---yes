import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CountryVisaInfo } from "@/types";
import { cn } from "@/lib/utils";

export function CountryCard({ country, size = "md" }: { country: CountryVisaInfo; size?: "md" | "lg" }) {
  return (
    <Link
      href={`/visa/${country.slug}`}
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-border bg-white card-elevated transition-transform hover:-translate-y-1",
        size === "lg" ? "aspect-[4/3]" : "aspect-square"
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-95", country.heroImageGradient)} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />

      <div className="relative flex flex-1 flex-col justify-between p-4">
        <div className="flex items-start justify-between">
          <span className="text-3xl drop-shadow-sm">{country.flagEmoji}</span>
          {country.popular && (
            <span className="rounded-full bg-gold-400/90 px-2.5 py-0.5 text-[10px] font-bold text-navy-950">
              الأكثر طلبًا
            </span>
          )}
        </div>

        <div>
          <h3 className="text-base font-bold text-white">{country.nameAr}</h3>
          <div className="mt-1 flex items-center gap-1 text-[12px] font-medium text-white/80 opacity-0 transition-opacity group-hover:opacity-100">
            اعرف المتطلبات
            <ArrowLeft className="size-3.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
