import type { Metadata } from "next";
import Link from "@/components/i18n/link";
import { FileUp, FileText, CalendarClock, Bell, MessageCircle, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ApplicationProgress } from "@/components/dashboard/application-progress";
import { getMockApplication, getProgressSteps } from "@/lib/data/mock-application";
import { formatArabicDate } from "@/lib/utils";
import { getI18n } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.dashboard.metaTitle, description: t.dashboard.metaDescription };
}

const QUICK_ACTIONS = [
  { href: "/documents", icon: FileUp, key: "uploadDocuments" },
  { href: "/apply", icon: FileText, key: "fillForm" },
  { href: "/appointments", icon: CalendarClock, key: "bookAppointment" },
  { href: "/apply", icon: Users, key: "addFamilyMember" },
] as const;

export default async function DashboardPage() {
  const { t, locale } = await getI18n();
  const d = t.dashboard;
  const app = getMockApplication(locale);

  return (
    <div className="bg-navy-50/40 py-10 sm:py-14">
      <div className="container-app grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-extrabold text-navy-950">{d.title}</h1>
            <Badge variant="gold">{t.applicationStatus[app.status]}</Badge>
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
                      {d.applicationTitle(app.countryNameAr, app.visaTypeAr)}
                    </h2>
                    <p className="text-[12.5px] text-muted-foreground">
                      {d.reference} <span dir="ltr">{app.referenceNumber}</span> · {d.createdAt}{" "}
                      {formatArabicDate(app.createdAt, locale)}
                    </p>
                  </div>
                </div>
              </div>

              <ApplicationProgress steps={getProgressSteps(locale)} currentLabel={d.currentStep} />
            </CardContent>
          </Card>

          <div>
            <h3 className="mb-3 text-sm font-bold text-navy-900">{d.quickActions}</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {QUICK_ACTIONS.map((a) => (
                <Link
                  key={a.key}
                  href={a.href}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-white p-4 text-center text-[12.5px] font-semibold text-navy-800 transition-colors hover:border-navy-300 hover:bg-navy-50"
                >
                  <a.icon className="size-5 text-gold-600" />
                  {d.actions[a.key]}
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
                <h3 className="text-sm font-bold text-navy-900">{d.notifications}</h3>
              </div>
              <ul className="space-y-3 text-[13px]">
                <li className="rounded-lg bg-amber-50 p-3 text-amber-800">
                  {d.notificationMissing}
                </li>
                <li className="rounded-lg bg-emerald-50 p-3 text-emerald-800">
                  {d.notificationReviewed}
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <div className="mb-3 flex items-center gap-2">
                <MessageCircle className="size-4 text-gold-600" />
                <h3 className="text-sm font-bold text-navy-900">{d.helpTitle}</h3>
              </div>
              <p className="mb-3 text-[13px] text-muted-foreground">
                {d.helpBody}
              </p>
              <Button variant="outline" className="w-full" size="sm">
                {d.contactSupport}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
