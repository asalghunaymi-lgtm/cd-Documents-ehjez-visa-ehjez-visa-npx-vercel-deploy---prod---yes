import { Card, CardContent } from "@/components/ui/card";
import { ApplicationStatusBadge } from "@/components/admin/status-badge";
import { MOCK_APPLICATIONS } from "@/lib/data/mock-admin";
import { formatArabicDate } from "@/lib/utils";

export default function AdminCustomersPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-extrabold text-navy-950">العملاء</h1>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-[12px] text-muted-foreground">
                  <th className="px-5 py-3 text-start font-medium">رقم الطلب</th>
                  <th className="px-5 py-3 text-start font-medium">الاسم</th>
                  <th className="px-5 py-3 text-start font-medium">الدولة</th>
                  <th className="px-5 py-3 text-start font-medium">نوع التأشيرة</th>
                  <th className="px-5 py-3 text-start font-medium">تاريخ الطلب</th>
                  <th className="px-5 py-3 text-start font-medium">الحالة</th>
                  <th className="px-5 py-3 text-start font-medium">الموظف المسؤول</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_APPLICATIONS.map((a) => (
                  <tr key={a.id} className="border-b border-border last:border-0 hover:bg-navy-50/50">
                    <td className="px-5 py-3 font-mono text-[12.5px] text-navy-700">{a.referenceNumber}</td>
                    <td className="px-5 py-3 font-semibold text-navy-900">{a.name}</td>
                    <td className="px-5 py-3">{a.country}</td>
                    <td className="px-5 py-3">{a.visaType}</td>
                    <td className="px-5 py-3 text-muted-foreground">{formatArabicDate(a.createdAt)}</td>
                    <td className="px-5 py-3">
                      <ApplicationStatusBadge status={a.status} />
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{a.employee}</td>
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
