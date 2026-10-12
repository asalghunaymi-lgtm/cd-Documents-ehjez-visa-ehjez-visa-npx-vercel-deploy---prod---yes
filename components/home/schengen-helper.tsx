"use client";

import * as React from "react";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getCountriesByRegion } from "@/lib/data/countries";
import { useI18n, useLocalizedRouter } from "@/lib/i18n/client";

export function SchengenHelper() {
  const router = useLocalizedRouter();
  const { t, locale } = useI18n();
  const c = t.home.schengenHelper;
  const schengenCountries = getCountriesByRegion("schengen", locale);
  const [longestStay, setLongestStay] = React.useState<string>("");
  const [equalStay, setEqualStay] = React.useState(false);
  const [firstEntry, setFirstEntry] = React.useState<string>("");

  const recommended = equalStay ? firstEntry : longestStay;

  return (
    <div className="rounded-lg border border-gold-200 bg-gold-50/60 p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-2.5">
        <Compass className="size-5 text-gold-700" />
        <h3 className="text-[15px] font-bold text-navy-900">{c.title}</h3>
      </div>

      <p className="mb-4 text-[13px] leading-6 text-navy-700">
        {c.introStart}
        <b>{c.introLongest}</b>
        {c.introMiddle}
        <b>{c.introFirstEntry}</b>
        {c.introEnd}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-navy-800">
            {c.longestStayLabel}
          </label>
          <Select value={longestStay} onValueChange={setLongestStay}>
            <SelectTrigger>
              <SelectValue placeholder={t.common.chooseCountry} />
            </SelectTrigger>
            <SelectContent>
              {schengenCountries.map((country) => (
                <SelectItem key={country.slug} value={country.slug}>
                  {country.flagEmoji} {country.nameAr}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-navy-800">
            <input
              type="checkbox"
              className="size-4 rounded border-navy-300"
              checked={equalStay}
              onChange={(e) => setEqualStay(e.target.checked)}
            />
            {c.equalStayLabel}
          </label>
          <Select value={firstEntry} onValueChange={setFirstEntry} disabled={!equalStay}>
            <SelectTrigger>
              <SelectValue placeholder={c.firstEntryPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              {schengenCountries.map((country) => (
                <SelectItem key={country.slug} value={country.slug}>
                  {country.flagEmoji} {country.nameAr}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {recommended && (
        <Alert variant="gold" className="mt-4">
          <AlertTitle>{c.resultTitle}</AlertTitle>
          <AlertDescription>
            {c.resultPrefix}{" "}
            <b>{schengenCountries.find((country) => country.slug === recommended)?.nameAr}</b>.
          </AlertDescription>
        </Alert>
      )}

      <Button
        variant="default"
        className="mt-4 w-full sm:w-auto"
        disabled={!recommended}
        onClick={() => recommended && router.push(`/visa/${recommended}`)}
      >
        {c.continue}
      </Button>
    </div>
  );
}
