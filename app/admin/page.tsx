import Link from "@/components/i18n/link";
import { Users, ClipboardList, FileWarning, CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ApplicationStatusBadge } from "@/components/admin/status-badge";
import { getMockApplications, MOCK_STATS } from "@/lib/data/mock-admin";
import { formatArabicDate } from "@/lib/utils";
import { getI18n } from "@/lib/i18n/server";

export default async function AdminOverviewPage() {
  const { t, locale } = await getI18n();
  const o = t.admin.overview;
  const th = t.admin.table;
  const STAT_CARDS = [
    { label: o.stats.total, value: MOCK_STATS.totalApplications, icon: ClipboardList, color: "bg-navy-50 text-navy-700" },
    { label: o.stats.newThisWeek, value: MOCK_STATS.newThisWeek, icon: Users, color: "bg-gold-50 text-gold-700" },
    { label: o.stats.awaitingDocuments, value: MOCK_STATS.awaitingDocuments, icon: FileWarning, color: "bg-amber-50 text-amber-700" },
    { label: o.stats.approved, value: MOCK_STATS.approved, icon: CheckCircle2, color: "bg-emerald-50 text-emerald-700" },
    { label: o.stats.rejected, value: MOCK_STATS.rejected, icon: XCircle, color: "bg-red-50 text-red-700" },
  ];
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-extrabold text-navy-950">{o.title}</h1>
        <p className="text-[12.5px] text-navy-400">{o.demoNote}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {STAT_CARDS.map((s) => (
          <Card key={s.label}>
            <CardContent className="p-5">
              <div className={`mb-3 flex size-10 items-center justify-center rounded-lg ${s.color}`}>
                <s.icon className="size-5" />
              </div>
              <div className="text-2xl font-extrabold text-navy-950">{s.value}</div>
              <div className="text-[12px] text-muted-foreground">{s.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <CardContent className="p-0">
          <div className="flex items-center justify-between border-b border-border p-5">
            <h2 className="text-sm font-bold text-navy-900">{o.latest}</h2>
            <Link href="/admin/applications" className="text-xs font-semibold text-navy-700 hover:underline">
              {o.viewAll}
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-start text-[12px] text-muted-foreground">
                  <th className="px-5 py-3 text-start font-medium">{th.reference}</th>
                  <th className="px-5 py-3 text-start font-medium">{th.name}</th>
                  <th className="px-5 py-3 text-start font-medium">{th.country}</th>
                  <th className="px-5 py-3 text-start font-medium">{th.date}</th>
                  <th className="px-5 py-3 text-start font-medium">{th.status}</th>
                </tr>
              </thead>
              <tbody>
                {getMockApplications(locale).slice(0, 5).map((a) => (
                  <tr key={a.id} className="border-b border-border last:border-0 hover:bg-navy-50/50">
                    <td className="px-5 py-3 font-mono text-[12.5px] text-navy-700">{a.referenceNumber}</td>
                    <td className="px-5 py-3 font-semibold text-navy-900">{a.name}</td>
                    <td className="px-5 py-3">{a.country}</td>
                    <td className="px-5 py-3 text-muted-foreground">{formatArabicDate(a.createdAt, locale)}</td>
                    <td className="px-5 py-3">
                      <ApplicationStatusBadge status={a.status} />
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
