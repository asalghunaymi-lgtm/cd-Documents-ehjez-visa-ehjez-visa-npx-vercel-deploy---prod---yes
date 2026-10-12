import type { Metadata } from "next";
import { SectionKicker } from "@/components/ui/section-kicker";
import { getI18n } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.about.metaTitle, description: t.about.metaDescription };
}

export default async function AboutPage() {
  const { t } = await getI18n();
  const c = t.about;
  return (
    <div>
      <section className="border-b border-border py-16 sm:py-20">
        <div className="container-app max-w-2xl">
          <SectionKicker>{c.kicker}</SectionKicker>
          <h1 className="text-2xl font-extrabold text-navy-950 sm:text-3xl">{c.title}</h1>
          <p className="mt-4 text-[15px] leading-8 text-muted-foreground">
            {c.lead}
          </p>
        </div>
      </section>

      <section className="container-app py-14 sm:py-16">
        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {c.values.map((v, i) => (
            <div key={v.title} className="grid grid-cols-[2.5rem_1fr] gap-4">
              <span aria-hidden className="text-lg font-extrabold text-gold-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <dt className="text-[15px] font-bold text-navy-900">{v.title}</dt>
                <dd className="mt-1 text-[13.5px] leading-6 text-muted-foreground">{v.desc}</dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="mt-12 border-t border-gold-300 bg-gold-50/60 p-6 text-[13.5px] leading-7 text-navy-800 sm:p-8">
          <strong className="mb-2 block text-navy-900">{c.disclaimerTitle}</strong>
          {c.disclaimerBody}
        </div>
      </section>
    </div>
  );
}
