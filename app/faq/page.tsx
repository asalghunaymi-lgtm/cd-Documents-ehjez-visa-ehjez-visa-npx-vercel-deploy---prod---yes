import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getSiteFaqs } from "@/lib/data/faq";
import { getI18n } from "@/lib/i18n/server";
import { SectionKicker } from "@/components/ui/section-kicker";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.faq.metaTitle, description: t.faq.metaDescription };
}

export default async function FaqPage() {
  const { t, locale } = await getI18n();
  const SITE_FAQS = getSiteFaqs(locale);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SITE_FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="py-14 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="container-app max-w-3xl">
        <div className="mb-10">
          <SectionKicker>{t.faq.kicker}</SectionKicker>
          <h1 className="text-2xl font-extrabold text-navy-950 sm:text-3xl">{t.faq.title}</h1>
          <p className="mt-3 text-[15px] text-muted-foreground">{t.faq.lead}</p>
        </div>

        <Accordion type="single" collapsible className="rounded-lg border border-border bg-white px-6">
          {SITE_FAQS.map((f) => (
            <AccordionItem key={f.question} value={f.question}>
              <AccordionTrigger>{f.question}</AccordionTrigger>
              <AccordionContent>{f.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
