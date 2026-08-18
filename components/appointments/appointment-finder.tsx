"use client";

import * as React from "react";
import { ExternalLink, Building2, Info } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { COUNTRIES } from "@/lib/data/countries";

export function AppointmentFinder({ initialCountry }: { initialCountry?: string }) {
  const [slug, setSlug] = React.useState(initialCountry ?? "");
  const country = COUNTRIES.find((c) => c.slug === slug);

  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-navy-800">اختر الدولة</label>
      <Select value={slug} onValueChange={setSlug}>
        <SelectTrigger>
          <SelectValue placeholder="اختر الدولة" />
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
                <h3 className="text-sm font-bold text-navy-900">مركز التقديم المعتمد</h3>
                <p className="text-[13px] text-muted-foreground">{country.applicationCenterAr}</p>
              </div>
            </div>

            <Alert>
              <Info className="size-4" />
              <AlertTitle>لا نخترع مواعيد</AlertTitle>
              <AlertDescription>
                لا تتوفر لدينا حاليًا بيانات مباشرة من واجهة برمجية رسمية لعرض أقرب موعد متاح. للحصول على أحدث
                المواعيد المتوفرة، انتقل مباشرة إلى منصة الحجز الرسمية أدناه.
              </AlertDescription>
            </Alert>

            {country.officialBookingUrl && (
              <Button asChild variant="gold" className="w-full">
                <a href={country.officialBookingUrl} target="_blank" rel="noopener noreferrer">
                  الانتقال إلى منصة الحجز الرسمية
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
