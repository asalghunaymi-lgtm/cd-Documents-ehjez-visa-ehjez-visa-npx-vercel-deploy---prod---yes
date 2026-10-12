import Link from "@/components/i18n/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionKicker } from "@/components/ui/section-kicker";
import { SmartSearch } from "./smart-search";
import { RoutePanel } from "./route-panel";
import { getI18n } from "@/lib/i18n/server";

export async function Hero() {
  const { t } = await getI18n();
  const h = t.home.hero;
  return (
    <section className="border-b border-border bg-background">
      <div className="container-app grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-20">
        <div>
          <SectionKicker>{h.kicker}</SectionKicker>

          <h1 className="max-w-xl text-[2rem] font-extrabold leading-[1.2] text-navy-950 sm:text-4xl lg:text-[2.75rem]">
            {h.titleStart} <span className="text-gold-600">{h.titleHighlight}</span>
          </h1>

          <p className="mt-5 max-w-md text-[15.5px] leading-8 text-muted-foreground">
            {h.lead}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button asChild size="lg" variant="default">
              <Link href="/apply">{h.primaryCta}</Link>
            </Button>
            <Link
              href="/visa"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy-800 transition-colors hover:text-gold-700"
            >
              {h.secondaryCta}
              <ArrowLeft className="size-4 ltr:-scale-x-100" />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-6">
            {h.highlights.map((p) => (
              <div key={p.label}>
                <div className="text-xl font-extrabold text-navy-950">{p.value}</div>
                <div className="text-[12.5px] text-muted-foreground">{p.label}</div>
              </div>
            ))}
          </div>
        </div>

        <RoutePanel />
      </div>

      <div className="container-app pb-14 sm:pb-16 lg:pb-20">
        <SmartSearch />
      </div>
    </section>
  );
}
