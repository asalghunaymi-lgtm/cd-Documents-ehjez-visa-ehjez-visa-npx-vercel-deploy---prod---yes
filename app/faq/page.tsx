import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SITE_FAQS } from "@/lib/data/faq";
import { SectionKicker } from "@/components/ui/section-kicker";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة",
  description: "إجابات على أكثر الأسئلة شيوعًا حول خدمات منفذ السعادة.",
};

export default function FaqPage() {
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
          <SectionKicker>الأسئلة الشائعة</SectionKicker>
          <h1 className="text-2xl font-extrabold text-navy-950 sm:text-3xl">كل ما تحتاج معرفته</h1>
          <p className="mt-3 text-[15px] text-muted-foreground">إجابات مباشرة عن خدمات منفذ السعادة.</p>
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
