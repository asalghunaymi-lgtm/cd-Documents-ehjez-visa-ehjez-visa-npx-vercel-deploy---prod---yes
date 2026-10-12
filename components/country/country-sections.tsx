import Link from "@/components/i18n/link";
import { getI18n } from "@/lib/i18n/server";
import { CheckCircle2, FileText, ExternalLink, AlertTriangle, ListChecks } from "lucide-react";
import { CountryVisaInfo } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export async function VisaTypesSection({ country }: { country: CountryVisaInfo }) {
  const { t, locale } = await getI18n();
  return (
    <section>
      <h2 className="mb-4 text-lg font-extrabold text-navy-950">{t.country.visaTypes}</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {country.visaTypes.map((v) => (
          <Card key={v.slug}>
            <CardContent className="p-5">
              <div className="mb-1 flex items-center justify-between">
                <h3 className="font-bold text-navy-900">{v.nameAr}</h3>
                {locale === "ar" && <Badge variant="outline">{v.nameEn}</Badge>}
              </div>
              <p className="text-[13px] leading-6 text-muted-foreground">{v.descriptionAr}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export async function RequirementsSection({ country }: { country: CountryVisaInfo }) {
  const { t } = await getI18n();
  return (
    <section>
      <h2 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-navy-950">
        <ListChecks className="size-5 text-gold-600" /> {t.country.requirements}
      </h2>
      <ul className="space-y-2.5">
        {country.requirements.map((r) => (
          <li key={r} className="flex items-start gap-2.5 text-[14px] leading-6 text-navy-800">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" />
            {r}
          </li>
        ))}
      </ul>
    </section>
  );
}

export async function DocumentsPreviewSection({ country }: { country: CountryVisaInfo }) {
  const { t } = await getI18n();
  return (
    <section>
      <h2 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-navy-950">
        <FileText className="size-5 text-gold-600" /> {t.country.documents}
      </h2>
      <div className="flex flex-wrap gap-2">
        {country.documents.map((d) => (
          <Badge key={d} variant="default" className="py-1.5 text-[12.5px]">
            {d}
          </Badge>
        ))}
      </div>
      <p className="mt-3 text-[13px] text-muted-foreground">
        {t.country.documentsNoteStart}{" "}
        <Link href="/documents" className="font-semibold text-navy-800 underline">
          {t.country.documentsNoteLink}
        </Link>
        {t.country.documentsNoteEnd}
      </p>
    </section>
  );
}

export async function ApplicationStepsSection({ country }: { country: CountryVisaInfo }) {
  const { t } = await getI18n();
  return (
    <section>
      <h2 className="mb-5 text-lg font-extrabold text-navy-950">{t.country.steps}</h2>
      <ol className="space-y-5 border-e-2 border-navy-100 pe-6">
        {country.applicationSteps.map((step, i) => (
          <li key={step} className="relative">
            <span className="absolute -end-[calc(1.5rem+9px)] top-0.5 flex size-5 items-center justify-center rounded-full bg-navy-900 text-[10px] font-bold text-white">
              {i + 1}
            </span>
            <p className="text-[14px] leading-6 text-navy-800">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export async function FaqSection({ country }: { country: CountryVisaInfo }) {
  if (!country.faqs.length) return null;
  const { t } = await getI18n();
  return (
    <section>
      <h2 className="mb-4 text-lg font-extrabold text-navy-950">{t.country.faqTitle(country.nameAr)}</h2>
      <Accordion type="single" collapsible className="rounded-xl border border-border bg-white px-5">
        {country.faqs.map((f) => (
          <AccordionItem key={f.question} value={f.question}>
            <AccordionTrigger>{f.question}</AccordionTrigger>
            <AccordionContent>{f.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export async function OfficialSourceCard({ country }: { country: CountryVisaInfo }) {
  const { t } = await getI18n();
  return (
    <Card className="border-gold-200 bg-gold-50/50">
      <CardContent className="p-5">
        <h3 className="mb-1 text-sm font-bold text-navy-900">{t.country.officialSource}</h3>
        <p className="mb-3 text-[13px] leading-6 text-navy-700">{country.officialSource.labelAr}</p>
        <Button asChild variant="default" size="sm" className="w-full">
          <a href={country.officialSource.url} target="_blank" rel="noopener noreferrer">
            {t.country.goToOfficial}
            <ExternalLink className="size-3.5" />
          </a>
        </Button>
        <p className="mt-3 text-[11.5px] leading-5 text-navy-600">
          {t.country.officialDisclaimer}
        </p>
      </CardContent>
    </Card>
  );
}

export async function ImportantNotesSection({ country }: { country: CountryVisaInfo }) {
  if (!country.importantNotesAr.length) return null;
  const { t } = await getI18n();
  return (
    <Alert variant="warning">
      <AlertTriangle className="size-4" />
      <AlertTitle>{t.country.importantNotes}</AlertTitle>
      <AlertDescription>
        <ul className="mt-1.5 space-y-1.5">
          {country.importantNotesAr.map((n) => (
            <li key={n}>• {n}</li>
          ))}
        </ul>
      </AlertDescription>
    </Alert>
  );
}
