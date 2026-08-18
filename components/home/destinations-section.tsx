"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CountryCard } from "./country-card";
import { SchengenHelper } from "./schengen-helper";
import { getCountriesByRegion } from "@/lib/data/countries";

const REGIONS = [
  { value: "schengen", label: "🇪🇺 شنغن" },
  { value: "uk", label: "🇬🇧 بريطانيا" },
  { value: "usa", label: "🇺🇸 أمريكا" },
  { value: "australia", label: "🇦🇺 أستراليا" },
  { value: "canada", label: "🇨🇦 كندا" },
];

export function DestinationsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-app">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-600">وجهاتنا</span>
          <h2 className="mt-2 text-2xl font-extrabold text-navy-950 sm:text-3xl">اختر وجهتك بثقة</h2>
          <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
            نغطي أهم وجهات السفر المطلوبة من المسافرين السعوديين، مع دليل واضح لمتطلبات كل دولة.
          </p>
        </div>

        <Tabs defaultValue="schengen" className="items-center">
          <TabsList className="mx-auto flex-wrap h-auto gap-1 py-1.5">
            {REGIONS.map((r) => (
              <TabsTrigger key={r.value} value={r.value}>
                {r.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="schengen" className="mt-8 w-full">
            <div id="schengen-helper" className="mb-8 scroll-mt-24">
              <SchengenHelper />
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {getCountriesByRegion("schengen").map((c) => (
                <CountryCard key={c.slug} country={c} />
              ))}
            </div>
          </TabsContent>

          {(["uk", "usa", "australia", "canada"] as const).map((region) => (
            <TabsContent key={region} value={region} className="mt-8 w-full">
              <div className="mx-auto max-w-sm">
                {getCountriesByRegion(region).map((c) => (
                  <CountryCard key={c.slug} country={c} size="lg" />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
