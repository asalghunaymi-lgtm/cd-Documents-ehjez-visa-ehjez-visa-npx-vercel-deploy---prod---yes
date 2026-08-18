"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ApplicationStatusBadge } from "@/components/admin/status-badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MOCK_APPLICATIONS } from "@/lib/data/mock-admin";
import { APPLICATION_STATUS_LABELS, ApplicationStatus } from "@/types";
import { formatArabicDate } from "@/lib/utils";

export function ApplicationsTable() {
  const [filter, setFilter] = React.useState<ApplicationStatus | "all">("all");

  const rows = filter === "all" ? MOCK_APPLICATIONS : MOCK_APPLICATIONS.filter((a) => a.status === filter);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-extrabold text-navy-950">الطلبات</h1>
        <Select value={filter} onValueChange={(v) => setFilter(v as ApplicationStatus | "all")}>
          <SelectTrigger className="w-56">
            <SelectValue placeholder="تصفية حسب الحالة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">كل الحالات</SelectItem>
            {Object.entries(APPLICATION_STATUS_LABELS).map(([key, label]) => (
              <SelectItem key={key} value={key}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
                  <th className="px-5 py-3 text-start font-medium">تاريخ الطلب</th>
                  <th className="px-5 py-3 text-start font-medium">الحالة</th>
                  <th className="px-5 py-3 text-start font-medium">الموظف المسؤول</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((a) => (
                  <tr key={a.id} className="border-b border-border last:border-0 hover:bg-navy-50/50">
                    <td className="px-5 py-3 font-mono text-[12.5px] text-navy-700">{a.referenceNumber}</td>
                    <td className="px-5 py-3 font-semibold text-navy-900">{a.name}</td>
                    <td className="px-5 py-3">{a.country}</td>
                    <td className="px-5 py-3 text-muted-foreground">{formatArabicDate(a.createdAt)}</td>
                    <td className="px-5 py-3">
                      <ApplicationStatusBadge status={a.status} />
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{a.employee}</td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-5 py-10 text-center text-muted-foreground">
                      لا توجد طلبات بهذه الحالة حاليًا.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
