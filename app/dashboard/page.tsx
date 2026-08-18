import type { Metadata } from "next";
import Link from "next/link";
import { FileUp, FileText, CalendarClock, Bell, MessageCircle, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ApplicationProgress } from "@/components/dashboard/application-progress";
import { MOCK_APPLICATION, PROGRESS_STEPS } from "@/lib/data/mock-application";
import { APPLICATION_STATUS_LABELS } from "@/types";
import { formatArabicDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ملفي",
  description: "تابع حالة طلب تأشيرتك خطوة بخطوة من لوحة ملفي.",
};

const QUICK_ACTIONS = [
  { href: "/documents", icon: FileUp, label: "رفع المستندات" },
  { href: "/apply", icon: FileText, label: "تعبئة نموذج التأشيرة" },
  { href: "/appointments", icon: CalendarClock, label: "حجز موعد" },
  { href: "/apply", icon: Users, label: "إضافة فرد للعائلة" },
];

export default function DashboardPage() {
  const app = MOCK_APPLICATION;

  return (
    <div className="bg-navy-50/40 py-10 sm:py-14">
      <div className="container-app grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-extrabold text-navy-950">ملفي</h1>
            <Badge variant="gold">{APPLICATION_STATUS_LABELS[app.status]}</Badge>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-navy-50 text-2xl">
                    {app.countryFlag}
                  </span>
                  <div>
                    <h2 className="text-sm font-bold text-navy-900">
                      طلب تأشيرة {app.countryNameAr} — {app.visaTypeAr}
                    </h2>
                    <p className="text-[12.5px] text-muted-foreground">
                      رقم الطلب: {app.referenceNumber} · تاريخ الإنشاء: {formatArabicDate(app.createdAt)}
                    </p>
                  </div>
                </div>
              </div>

              <ApplicationProgress steps={PROGRESS_STEPS} />
            </CardContent>
          </Card>

          <div>
            <h3 className="mb-3 text-sm font-bold text-navy-900">إجراءات سريعة</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {QUICK_ACTIONS.map((a) => (
                <Link
                  key={a.label}
                  href={a.href}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-white p-4 text-center text-[12.5px] font-semibold text-navy-800 transition-colors hover:border-navy-300 hover:bg-navy-50"
                >
                  <a.icon className="size-5 text-gold-600" />
                  {a.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <Card>
            <CardContent className="p-5">
              <div className="mb-3 flex items-center gap-2">
                <Bell className="size-4 text-gold-600" />
                <h3 className="text-sm font-bold text-navy-900">آخر التنبيهات</h3>
              </div>
              <ul className="space-y-3 text-[13px]">
                <li className="rounded-lg bg-amber-50 p-3 text-amber-800">
                  لديك مستند ناقص — يرجى رفع كشف الحساب البنكي لاستكمال طلبك.
                </li>
                <li className="rounded-lg bg-emerald-50 p-3 text-emerald-800">
                  تمت مراجعة مستنداتك مبدئيًا، يمكنك الانتقال للخطوة التالية.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <div className="mb-3 flex items-center gap-2">
                <MessageCircle className="size-4 text-gold-600" />
                <h3 className="text-sm font-bold text-navy-900">هل تحتاج مساعدة؟</h3>
              </div>
              <p className="mb-3 text-[13px] text-muted-foreground">
                فريق الدعم متاح لمساعدتك في أي استفسار متعلق بطلبك.
              </p>
              <Button variant="outline" className="w-full" size="sm">
                تواصل مع فريق الدعم
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
