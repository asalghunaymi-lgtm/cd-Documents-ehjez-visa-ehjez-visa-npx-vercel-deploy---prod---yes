import Link from "@/components/i18n/link";
import { getI18n } from "@/lib/i18n/server";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export async function CtaSection() {
  const { t } = await getI18n();
  const c = t.home.cta;
  return (
    <section className="border-t border-navy-900 bg-navy-950">
      <div className="container-app flex flex-col items-start justify-between gap-8 py-14 sm:py-16 lg:flex-row lg:items-center">
        <div className="max-w-lg">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{c.title}</h2>
          <p className="mt-3 text-[15px] leading-7 text-navy-300">
            {c.lead}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <Button asChild size="lg" variant="gold">
            <Link href="/apply">{c.primary}</Link>
          </Button>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy-200 transition-colors hover:text-gold-400"
          >
            {c.faqLink}
            <ArrowLeft className="size-4 ltr:-scale-x-100" />
          </Link>
        </div>
      </div>
    </section>
  );
}
