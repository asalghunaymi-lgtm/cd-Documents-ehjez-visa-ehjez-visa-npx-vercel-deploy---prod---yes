// فهرس بحث ذكي مبسّط: يربط أسماء مدن/كلمات شائعة بالدولة المناسبة.
// في نسخة لاحقة يمكن استبداله بخدمة بحث فعلية أو نموذج NLP بسيط.
export const SEARCH_SYNONYMS: { keywords: string[]; countrySlug: string }[] = [
  { keywords: ["لندن", "بريطانيا", "انجلترا", "إنجلترا", "المملكة المتحدة", "london", "uk"], countrySlug: "uk" },
  { keywords: ["باريس", "فرنسا", "paris", "france"], countrySlug: "france" },
  { keywords: ["روما", "ميلانو", "إيطاليا", "ايطاليا", "italy", "rome"], countrySlug: "italy" },
  { keywords: ["مدريد", "برشلونة", "إسبانيا", "اسبانيا", "spain"], countrySlug: "spain" },
  { keywords: ["برلين", "ميونخ", "ألمانيا", "المانيا", "germany"], countrySlug: "germany" },
  { keywords: ["أثينا", "اثينا", "سانتوريني", "اليونان", "greece"], countrySlug: "greece" },
  { keywords: ["فيينا", "النمسا", "austria"], countrySlug: "austria" },
  { keywords: ["زيورخ", "جنيف", "سويسرا", "switzerland"], countrySlug: "switzerland" },
  { keywords: ["أمستردام", "امستردام", "هولندا", "netherlands"], countrySlug: "netherlands" },
  { keywords: ["بروكسل", "بلجيكا", "belgium"], countrySlug: "belgium" },
  { keywords: ["لشبونة", "البرتغال", "portugal"], countrySlug: "portugal" },
  { keywords: ["نيويورك", "واشنطن", "لوس انجلوس", "أمريكا", "امريكا", "الولايات المتحدة", "usa", "america"], countrySlug: "usa" },
  { keywords: ["سيدني", "ملبورن", "استراليا", "أستراليا", "australia"], countrySlug: "australia" },
  { keywords: ["تورونتو", "فانكوفر", "كندا", "canada"], countrySlug: "canada" },
];

export function searchCountryByQuery(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const matchedSlugs = new Set<string>();
  for (const entry of SEARCH_SYNONYMS) {
    if (entry.keywords.some((k) => k.toLowerCase().includes(q) || q.includes(k.toLowerCase()))) {
      matchedSlugs.add(entry.countrySlug);
    }
  }
  return Array.from(matchedSlugs);
}
