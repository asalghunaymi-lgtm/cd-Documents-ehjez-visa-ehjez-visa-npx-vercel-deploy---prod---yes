"use client";

import * as React from "react";
import { ShieldCheck, Info } from "lucide-react";
import { DocumentUploadCard } from "./document-upload-card";
import { BASE_DOCUMENT_REQUIREMENTS } from "@/lib/data/document-requirements";
import { UploadedDocument } from "@/types";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const MAX_SIZE_MB = 10;

export function DocumentChecklist() {
  const [files, setFiles] = React.useState<Record<string, UploadedDocument | null>>({});

  const requiredItems = BASE_DOCUMENT_REQUIREMENTS.filter((r) => r.required);
  const uploadedRequiredCount = requiredItems.filter((r) => {
    const f = files[r.key];
    return f && (f.status === "uploaded" || f.status === "approved");
  }).length;
  const progress = Math.round((uploadedRequiredCount / requiredItems.length) * 100);

  function handleUpload(key: string, file: File) {
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png", "image/jpg", "image/webp"];
    const isAllowedType = allowedTypes.includes(file.type);
    const tooBig = file.size > MAX_SIZE_MB * 1024 * 1024;
    const looksUnclear = file.size < 15 * 1024; // فحص أولي مبسّط لوضوح/اكتمال الملف

    let status: UploadedDocument["status"] = "uploaded";
    let note: string | undefined;

    if (!isAllowedType) {
      status = "rejected";
      note = "صيغة الملف غير مدعومة. الرجاء رفع صورة (JPG/PNG) أو ملف PDF.";
    } else if (tooBig) {
      status = "rejected";
      note = `حجم الملف أكبر من ${MAX_SIZE_MB} ميجابايت المسموح بها.`;
    } else if (looksUnclear) {
      status = "needs_review";
      note = "يبدو أن المستند غير مكتمل أو غير واضح، يرجى رفع نسخة أوضح.";
    }

    setFiles((prev) => ({
      ...prev,
      [key]: {
        key,
        fileName: file.name,
        uploadedAt: new Date().toISOString(),
        status,
        employeeNote: note,
      },
    }));
  }

  function handleRemove(key: string) {
    setFiles((prev) => ({ ...prev, [key]: null }));
  }

  return (
    <div>
      <div className="mb-6 rounded-2xl border border-border bg-white p-5">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-sm font-bold text-navy-900">اكتمال المستندات الأساسية</h2>
          <span className="text-sm font-extrabold text-navy-900">{progress}%</span>
        </div>
        <Progress value={progress} />
        <p className="mt-2 text-[12.5px] text-muted-foreground">
          {uploadedRequiredCount} من {requiredItems.length} مستندات أساسية مرفوعة
        </p>
      </div>

      <Alert className="mb-6">
        <Info className="size-4" />
        <AlertTitle>كيف يتم فحص مستنداتك؟</AlertTitle>
        <AlertDescription>
          يقوم النظام بفحص أولي لنوع وحجم ووضوح الملف عند الرفع، ثم يراجعه فريقنا يدويًا. هذا الفحص لا يضمن قبول
          السفارة للمستند نهائيًا.
        </AlertDescription>
      </Alert>

      <div className="space-y-3">
        {BASE_DOCUMENT_REQUIREMENTS.map((req) => (
          <DocumentUploadCard
            key={req.key}
            requirement={req}
            file={files[req.key] ?? null}
            onUpload={(file) => handleUpload(req.key, file)}
            onRemove={() => handleRemove(req.key)}
          />
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 rounded-xl bg-navy-50 p-4 text-[12.5px] text-navy-700">
        <ShieldCheck className="size-4 shrink-0 text-navy-600" />
        جميع مستنداتك تُخزَّن بشكل آمن ومشفّر، ولا يمكن لأي عميل آخر الوصول إليها. راجع{" "}
        <a href="/privacy" className="font-semibold underline">سياسة الخصوصية</a>.
      </div>
    </div>
  );
}
