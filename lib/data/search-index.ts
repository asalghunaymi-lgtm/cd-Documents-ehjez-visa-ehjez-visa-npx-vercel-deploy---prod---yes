// فهرس بحث ذكي مبسّط: يربط أسماء مدن/كلمات شائعة بالدولة المناسبة.
// في نسخة لاحقة يمكن استبداله بخدمة بحث فعلية أو نموذج NLP بسيط.
export const SEARCH_SYNONYMS: { keywords: string[]; countrySlug: string }[] = [
  { keywords: ["لندن", "بريطانيا", "انجلترا", "إنجلترا", "المملكة المتحدة", "london", "uk", "united kingdom", "england", "britain"], countrySlug: "uk" },
  { keywords: ["باريس", "فرنسا", "paris", "france"], countrySlug: "france" },
  { keywords: ["روما", "ميلانو", "إيطاليا", "ايطاليا", "italy", "rome", "milan", "venice", "florence"], countrySlug: "italy" },
  { keywords: ["مدريد", "برشلونة", "إسبانيا", "اسبانيا", "spain", "madrid", "barcelona"], countrySlug: "spain" },
  { keywords: ["برلين", "ميونخ", "ألمانيا", "المانيا", "germany", "berlin", "munich", "frankfurt"], countrySlug: "germany" },
  { keywords: ["أثينا", "اثينا", "سانتوريني", "اليونان", "greece", "athens", "santorini"], countrySlug: "greece" },
  { keywords: ["فيينا", "النمسا", "austria", "vienna", "salzburg"], countrySlug: "austria" },
  { keywords: ["زيورخ", "جنيف", "سويسرا", "switzerland", "zurich", "geneva", "interlaken"], countrySlug: "switzerland" },
  { keywords: ["أمستردام", "امستردام", "هولندا", "netherlands", "holland", "amsterdam"], countrySlug: "netherlands" },
  { keywords: ["بروكسل", "بلجيكا", "belgium", "brussels", "bruges"], countrySlug: "belgium" },
  { keywords: ["لشبونة", "البرتغال", "portugal", "lisbon", "porto"], countrySlug: "portugal" },
  { keywords: ["نيويورك", "واشنطن", "لوس انجلوس", "أمريكا", "امريكا", "الولايات المتحدة", "usa", "america", "united states", "new york", "washington", "los angeles"], countrySlug: "usa" },
  { keywords: ["سيدني", "ملبورن", "استراليا", "أستراليا", "australia", "sydney", "melbourne"], countrySlug: "australia" },
  { keywords: ["تورونتو", "فانكوفر", "كندا", "canada", "toronto", "vancouver", "montreal"], countrySlug: "canada" },
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
