import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SITE_FAQS } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة",
  description: "إجابات على أكثر الأسئلة شيوعًا حول خدمات احجز تأشيرتك.",
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
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-extrabold text-navy-950 sm:text-3xl">الأسئلة الشائعة</h1>
          <p className="mt-3 text-[15px] text-muted-foreground">كل ما تحتاج معرفته عن منصة احجز تأشيرتك.</p>
        </div>

        <Accordion type="single" collapsible className="rounded-2xl border border-border bg-white px-6">
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
