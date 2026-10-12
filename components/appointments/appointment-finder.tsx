"use client";

import * as React from "react";
import { ExternalLink, Building2, Info } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getCountries } from "@/lib/data/countries";
import { useI18n } from "@/lib/i18n/client";

export function AppointmentFinder({ initialCountry }: { initialCountry?: string }) {
  const [slug, setSlug] = React.useState(initialCountry ?? "");
  const { t, locale } = useI18n();
  const a = t.appointments;
  const COUNTRIES = getCountries(locale);
  const country = COUNTRIES.find((c) => c.slug === slug);

  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-navy-800">{a.chooseCountry}</label>
      <Select value={slug} onValueChange={setSlug}>
        <SelectTrigger>
          <SelectValue placeholder={a.chooseCountry} />
        </SelectTrigger>
        <SelectContent>
          {COUNTRIES.map((c) => (
            <SelectItem key={c.slug} value={c.slug}>
              {c.flagEmoji} {c.nameAr}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {country && (
        <Card className="mt-5">
          <CardContent className="space-y-4 p-6">
            <div className="flex items-start gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-navy-50">
                <Building2 className="size-5 text-navy-700" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-navy-900">{a.centre}</h3>
                <p className="text-[13px] text-muted-foreground">{country.applicationCenterAr}</p>
              </div>
            </div>

            <Alert>
              <Info className="size-4" />
              <AlertTitle>{a.noInventedTitle}</AlertTitle>
              <AlertDescription>
                {a.noInventedBody}
              </AlertDescription>
            </Alert>

            {country.officialBookingUrl && (
              <Button asChild variant="default" className="w-full">
                <a href={country.officialBookingUrl} target="_blank" rel="noopener noreferrer">
                  {a.goToBooking}
                  <ExternalLink className="size-4" />
                </a>
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
