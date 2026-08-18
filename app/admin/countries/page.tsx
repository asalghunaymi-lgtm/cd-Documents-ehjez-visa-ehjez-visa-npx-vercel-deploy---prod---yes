import { Pencil, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { COUNTRIES } from "@/lib/data/countries";
import { formatFeeRange } from "@/lib/format-fee";
import { formatArabicDate } from "@/lib/utils";

export default function AdminCountriesPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-extrabold text-navy-950">الدول والتأشيرات</h1>
        <Button variant="default" size="sm">
          <Plus className="size-4" /> إضافة دولة جديدة
        </Button>
      </div>

      <Alert className="mb-6">
        <AlertTitle>ملاحظة</AlertTitle>
        <AlertDescription>
          البيانات المعروضة حاليًا مصدرها ملف محلي (lib/data/countries.ts). بعد ربط Supabase، ستتم قراءة هذه
          البيانات من جدول visa_countries وسيصبح زر &quot;تعديل&quot; فعّالًا لتحديث المتطلبات والرسوم والروابط الرسمية مباشرة
          من هنا.
        </AlertDescription>
      </Alert>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-[12px] text-muted-foreground">
                  <th className="px-5 py-3 text-start font-medium">الدولة</th>
                  <th className="px-5 py-3 text-start font-medium">المنطقة</th>
                  <th className="px-5 py-3 text-start font-medium">الرسوم الحكومية</th>
                  <th className="px-5 py-3 text-start font-medium">رسوم الخدمة</th>
                  <th className="px-5 py-3 text-start font-medium">آخر تحديث</th>
                  <th className="px-5 py-3 text-start font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {COUNTRIES.map((c) => (
                  <tr key={c.slug} className="border-b border-border last:border-0 hover:bg-navy-50/50">
                    <td className="px-5 py-3 font-semibold text-navy-900">
                      {c.flagEmoji} {c.nameAr}
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{c.region}</td>
                    <td className="px-5 py-3">{formatFeeRange(c.governmentFeeSAR)}</td>
                    <td className="px-5 py-3">{formatFeeRange(c.serviceFeeSAR)}</td>
                    <td className="px-5 py-3 text-muted-foreground">{formatArabicDate(c.lastUpdated)}</td>
                    <td className="px-5 py-3">
                      <Button size="sm" variant="ghost">
                        <Pencil className="size-3.5" /> تعديل
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
