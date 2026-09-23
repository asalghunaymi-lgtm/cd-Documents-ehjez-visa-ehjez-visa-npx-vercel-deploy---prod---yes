import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CountryVisaInfo } from "@/types";
import { cn } from "@/lib/utils";

export function CountryCard({ country, size = "md" }: { country: CountryVisaInfo; size?: "md" | "lg" }) {
  return (
    <Link
      href={`/visa/${country.slug}`}
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-md border border-border transition-colors hover:border-navy-400",
        size === "lg" ? "aspect-[4/3]" : "aspect-square"
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", country.heroImageGradient)} />

      <div className="relative flex flex-1 flex-col justify-between p-4">
        <div className="flex items-start justify-between">
          <span className="text-3xl drop-shadow-sm">{country.flagEmoji}</span>
          {country.popular && (
            <span className="rounded-sm bg-gold-400 px-2 py-0.5 text-[10px] font-bold text-navy-950">
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
