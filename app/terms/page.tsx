import type { Metadata } from "next";

import { getI18n } from "@/lib/i18n/server";
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.legal.terms.metaTitle, description: t.legal.terms.metaDescription };
}

export default async function TermsPage() {
  const { t } = await getI18n();
  const c = t.legal.terms;
  const SECTIONS = c.sections;
  return (
    <div className="container-app max-w-3xl py-14 sm:py-20">
      <h1 className="mb-3 text-2xl font-extrabold text-navy-950 sm:text-3xl">{c.title}</h1>
      <p className="mb-10 text-[13.5px] text-muted-foreground">{t.legal.lastUpdated}</p>

      <div className="space-y-8">
        {SECTIONS.map((s) => (
          <section key={s.title}>
            <h2 className="mb-2 text-[15px] font-bold text-navy-900">{s.title}</h2>
            <p className="text-[14px] leading-8 text-navy-700">{s.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
