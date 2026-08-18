"use client";

import * as React from "react";
import { Eye, Download, Check, X, RotateCcw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_PENDING_DOCUMENTS } from "@/lib/data/mock-admin";
import { DocumentStatus } from "@/types";
import { formatArabicDate } from "@/lib/utils";

const STATUS_LABEL: Record<DocumentStatus, string> = {
  missing: "لم يتم الرفع",
  uploaded: "تم الرفع",
  needs_review: "يحتاج مراجعة",
  approved: "تم القبول",
  rejected: "مرفوض",
};

const STATUS_VARIANT: Record<DocumentStatus, "default" | "success" | "warning" | "destructive"> = {
  missing: "destructive",
  uploaded: "default",
  needs_review: "warning",
  approved: "success",
  rejected: "destructive",
};

export function DocumentsReview() {
  const [docs, setDocs] = React.useState(MOCK_PENDING_DOCUMENTS.map((d) => ({ ...d })));

  function updateStatus(id: string, status: DocumentStatus) {
    setDocs((prev) => prev.map((d) => (d.id === id ? { ...d, status } : d)));
  }

  return (
    <div>
      <h1 className="mb-6 text-xl font-extrabold text-navy-950">المستندات بانتظار المراجعة</h1>

      <div className="space-y-3">
        {docs.map((d) => (
          <Card key={d.id}>
            <CardContent className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-navy-900">{d.document}</h3>
                  <Badge variant={STATUS_VARIANT[d.status]}>{STATUS_LABEL[d.status]}</Badge>
                </div>
                <p className="mt-1 text-[12.5px] text-muted-foreground">
                  العميل: {d.applicant} · رُفع بتاريخ {formatArabicDate(d.uploadedAt)}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Button size="sm" variant="outline">
                  <Eye className="size-4" /> معاينة
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="size-4" /> تنزيل
                </Button>
                <Button size="sm" variant="default" onClick={() => updateStatus(d.id, "approved")}>
                  <Check className="size-4" /> قبول
                </Button>
                <Button size="sm" variant="outline" className="text-amber-700" onClick={() => updateStatus(d.id, "needs_review")}>
                  <RotateCcw className="size-4" /> طلب إعادة رفع
                </Button>
                <Button size="sm" variant="ghost" className="text-destructive hover:bg-red-50" onClick={() => updateStatus(d.id, "rejected")}>
                  <X className="size-4" /> رفض
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
