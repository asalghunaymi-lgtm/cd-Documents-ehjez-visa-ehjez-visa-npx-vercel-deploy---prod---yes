"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getCountriesByRegion } from "@/lib/data/countries";

export function SchengenHelper() {
  const router = useRouter();
  const schengenCountries = getCountriesByRegion("schengen");
  const [longestStay, setLongestStay] = React.useState<string>("");
  const [equalStay, setEqualStay] = React.useState(false);
  const [firstEntry, setFirstEntry] = React.useState<string>("");

  const recommended = equalStay ? firstEntry : longestStay;

  return (
    <div className="rounded-2xl border border-gold-200 bg-gold-50/60 p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-2.5">
        <Compass className="size-5 text-gold-700" />
        <h3 className="text-[15px] font-bold text-navy-900">ما هي وجهتك الرئيسية داخل منطقة شنغن؟</h3>
      </div>

      <p className="mb-4 text-[13px] leading-6 text-navy-700">
        لا يمكنك اختيار أي دولة شنغن عشوائيًا. إذا كنت ستزور أكثر من دولة، يجب التقديم عبر
        <b> الدولة التي ستقضي فيها أطول مدة</b>، وإذا تساوت المدد فالعبرة
        <b> بدولة الدخول الأول</b>.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-navy-800">
            الدولة التي ستقضي فيها أطول مدة
          </label>
          <Select value={longestStay} onValueChange={setLongestStay}>
            <SelectTrigger>
              <SelectValue placeholder="اختر الدولة" />
            </SelectTrigger>
            <SelectContent>
              {schengenCountries.map((c) => (
                <SelectItem key={c.slug} value={c.slug}>
                  {c.flagEmoji} {c.nameAr}
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
            المدد متساوية بين أكثر من دولة؟
          </label>
          <Select value={firstEntry} onValueChange={setFirstEntry} disabled={!equalStay}>
            <SelectTrigger>
              <SelectValue placeholder="دولة الدخول الأول" />
            </SelectTrigger>
            <SelectContent>
              {schengenCountries.map((c) => (
                <SelectItem key={c.slug} value={c.slug}>
                  {c.flagEmoji} {c.nameAr}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {recommended && (
        <Alert variant="gold" className="mt-4">
          <AlertTitle>وجهتك الصحيحة للتقديم</AlertTitle>
          <AlertDescription>
            بناءً على إجاباتك، يجب عليك التقديم عبر{" "}
            <b>{schengenCountries.find((c) => c.slug === recommended)?.nameAr}</b>.
          </AlertDescription>
        </Alert>
      )}

      <Button
        variant="default"
        className="mt-4 w-full sm:w-auto"
        disabled={!recommended}
        onClick={() => recommended && router.push(`/visa/${recommended}`)}
      >
        متابعة إلى صفحة الدولة
      </Button>
    </div>
  );
}
