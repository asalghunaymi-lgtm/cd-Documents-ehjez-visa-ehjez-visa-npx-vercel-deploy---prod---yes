"use client";

import * as React from "react";
import { Eye, Download, Check, X, RotateCcw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getMockPendingDocuments } from "@/lib/data/mock-admin";
import { useI18n } from "@/lib/i18n/client";
import { DocumentStatus } from "@/types";
import { formatArabicDate } from "@/lib/utils";

const STATUS_VARIANT: Record<DocumentStatus, "default" | "success" | "warning" | "destructive"> = {
  missing: "destructive",
  uploaded: "default",
  needs_review: "warning",
  approved: "success",
  rejected: "destructive",
};

export function DocumentsReview() {
  const { t, locale } = useI18n();
  const c = t.admin.documents;
  // Review decisions are kept by document id so they survive a language switch.
  const [statuses, setStatuses] = React.useState<Record<string, DocumentStatus>>({});
  const docs = getMockPendingDocuments(locale).map((d) => ({ ...d, status: statuses[d.id] ?? d.status }));

  function updateStatus(id: string, status: DocumentStatus) {
    setStatuses((prev) => ({ ...prev, [id]: status }));
  }

  return (
    <div>
      <h1 className="mb-6 text-xl font-extrabold text-navy-950">{c.title}</h1>

      <div className="space-y-3">
        {docs.map((d) => (
          <Card key={d.id}>
            <CardContent className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-navy-900">{d.document}</h3>
                  <Badge variant={STATUS_VARIANT[d.status]}>{c.status[d.status]}</Badge>
                </div>
                <p className="mt-1 text-[12.5px] text-muted-foreground">
                  {c.customer(d.applicant)} · {c.uploadedOn(formatArabicDate(d.uploadedAt, locale))}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Button size="sm" variant="outline">
                  <Eye className="size-4" /> {c.preview}
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="size-4" /> {c.download}
                </Button>
                <Button size="sm" variant="default" onClick={() => updateStatus(d.id, "approved")}>
                  <Check className="size-4" /> {c.approve}
                </Button>
                <Button size="sm" variant="outline" className="text-amber-700" onClick={() => updateStatus(d.id, "needs_review")}>
                  <RotateCcw className="size-4" /> {c.requestReupload}
                </Button>
                <Button size="sm" variant="ghost" className="text-destructive hover:bg-red-50" onClick={() => updateStatus(d.id, "rejected")}>
                  <X className="size-4" /> {c.reject}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
