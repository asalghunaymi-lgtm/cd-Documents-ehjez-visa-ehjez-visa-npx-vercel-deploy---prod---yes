import { Pencil, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getCountries } from "@/lib/data/countries";
import { getI18n } from "@/lib/i18n/server";
import { formatFeeRange } from "@/lib/format-fee";
import { formatArabicDate } from "@/lib/utils";

export default async function AdminCountriesPage() {
  const { t, locale } = await getI18n();
  const c = t.admin.countries;
  const th = t.admin.table;
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-extrabold text-navy-950">{c.title}</h1>
        <Button variant="default" size="sm">
          <Plus className="size-4" /> {c.add}
        </Button>
      </div>

      <Alert className="mb-6">
        <AlertTitle>{c.noteTitle}</AlertTitle>
        <AlertDescription>
          {c.noteBody}
        </AlertDescription>
      </Alert>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-[12px] text-muted-foreground">
                  <th className="px-5 py-3 text-start font-medium">{th.country}</th>
                  <th className="px-5 py-3 text-start font-medium">{th.region}</th>
                  <th className="px-5 py-3 text-start font-medium">{th.governmentFee}</th>
                  <th className="px-5 py-3 text-start font-medium">{th.serviceFee}</th>
                  <th className="px-5 py-3 text-start font-medium">{th.lastUpdated}</th>
                  <th className="px-5 py-3 text-start font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {getCountries(locale).map((c) => (
                  <tr key={c.slug} className="border-b border-border last:border-0 hover:bg-navy-50/50">
                    <td className="px-5 py-3 font-semibold text-navy-900">
                      {c.flagEmoji} {c.nameAr}
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{c.region}</td>
                    <td className="px-5 py-3">{formatFeeRange(c.governmentFeeSAR, locale)}</td>
                    <td className="px-5 py-3">{formatFeeRange(c.serviceFeeSAR, locale)}</td>
                    <td className="px-5 py-3 text-muted-foreground">{formatArabicDate(c.lastUpdated, locale)}</td>
                    <td className="px-5 py-3">
                      <Button size="sm" variant="ghost">
                        <Pencil className="size-3.5" /> {t.admin.countries.edit}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
