"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionKicker } from "@/components/ui/section-kicker";
import { CountryCard } from "./country-card";
import { SchengenHelper } from "./schengen-helper";
import { getCountriesByRegion } from "@/lib/data/countries";
import { useI18n } from "@/lib/i18n/client";

const REGIONS = ["schengen", "uk", "usa", "australia", "canada"] as const;

export function DestinationsSection() {
  const { t, locale } = useI18n();
  const c = t.home.destinations;
  return (
    <section className="py-16 sm:py-20">
      <div className="container-app">
        <div className="max-w-xl">
          <SectionKicker>{c.kicker}</SectionKicker>
          <h2 className="text-2xl font-extrabold text-navy-950 sm:text-3xl">{c.title}</h2>
          <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
            {c.lead}
          </p>
        </div>

        <Tabs defaultValue="schengen" className="mt-10 items-start">
          <TabsList className="flex-wrap h-auto gap-1 py-1.5">
            {REGIONS.map((r) => (
              <TabsTrigger key={r} value={r}>
                {c.regions[r]}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="schengen" className="mt-8 w-full">
            <div id="schengen-helper" className="mb-8 scroll-mt-24">
              <SchengenHelper />
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {getCountriesByRegion("schengen", locale).map((country) => (
                <CountryCard key={country.slug} country={country} />
              ))}
            </div>
          </TabsContent>

          {(["uk", "usa", "australia", "canada"] as const).map((region) => (
            <TabsContent key={region} value={region} className="mt-8 w-full">
              <div className="mx-auto max-w-sm">
                {getCountriesByRegion(region, locale).map((country) => (
                  <CountryCard key={country.slug} country={country} size="lg" />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
