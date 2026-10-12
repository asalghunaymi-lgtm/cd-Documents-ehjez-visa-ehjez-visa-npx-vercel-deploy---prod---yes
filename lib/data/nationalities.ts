import type { Locale } from "@/lib/i18n/config";
import { NATIONALITIES_EN } from "@/lib/i18n/content/site.en";

export const NATIONALITIES = [
  { code: "SA", labelAr: "السعودية", flag: "🇸🇦" },
  { code: "AE", labelAr: "الإمارات", flag: "🇦🇪" },
  { code: "KW", labelAr: "الكويت", flag: "🇰🇼" },
  { code: "QA", labelAr: "قطر", flag: "🇶🇦" },
  { code: "BH", labelAr: "البحرين", flag: "🇧🇭" },
  { code: "OM", labelAr: "عُمان", flag: "🇴🇲" },
  { code: "EG", labelAr: "مصر", flag: "🇪🇬" },
  { code: "JO", labelAr: "الأردن", flag: "🇯🇴" },
];

/** Nationalities with labels in the requested language. */
export function getNationalities(locale: Locale = "ar") {
  if (locale === "ar") return NATIONALITIES;
  return NATIONALITIES.map((n) => ({ ...n, labelAr: NATIONALITIES_EN[n.code] ?? n.labelAr }));
}
