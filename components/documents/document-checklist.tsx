"use client";

import * as React from "react";
import { ShieldCheck, Info } from "lucide-react";
import { DocumentUploadCard } from "./document-upload-card";
import { getDocumentRequirements } from "@/lib/data/document-requirements";
import { useI18n } from "@/lib/i18n/client";
import Link from "@/components/i18n/link";
import { UploadedDocument } from "@/types";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const MAX_SIZE_MB = 10;

type UploadNoteKey = "unsupportedType" | "tooLarge" | "unclear";

/** Turns the stored note key into text in the current language. */
function noteToText(
  file: UploadedDocument | null,
  errors: { unsupportedType: string; tooLarge: (mb: number) => string; unclear: string }
): UploadedDocument | null {
  if (!file?.employeeNote) return file;
  const key = file.employeeNote as UploadNoteKey;
  const text = key === "tooLarge" ? errors.tooLarge(MAX_SIZE_MB) : errors[key];
  return { ...file, employeeNote: text ?? file.employeeNote };
}

export function DocumentChecklist() {
  const [files, setFiles] = React.useState<Record<string, UploadedDocument | null>>({});
  const { t, locale } = useI18n();
  const d = t.documents;
  const BASE_DOCUMENT_REQUIREMENTS = getDocumentRequirements(locale);

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
    // Store a message key, not text, so the note follows later language switches.
    let note: UploadNoteKey | undefined;

    if (!isAllowedType) {
      status = "rejected";
      note = "unsupportedType";
    } else if (tooBig) {
      status = "rejected";
      note = "tooLarge";
    } else if (looksUnclear) {
      status = "needs_review";
      note = "unclear";
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
          <h2 className="text-sm font-bold text-navy-900">{d.completeness}</h2>
          <span className="text-sm font-extrabold text-navy-900">{progress}%</span>
        </div>
        <Progress value={progress} />
        <p className="mt-2 text-[12.5px] text-muted-foreground">
          {d.progress(uploadedRequiredCount, requiredItems.length)}
        </p>
      </div>

      <Alert className="mb-6">
        <Info className="size-4" />
        <AlertTitle>{d.checkTitle}</AlertTitle>
        <AlertDescription>
          {d.checkBody}
        </AlertDescription>
      </Alert>

      <div className="space-y-3">
        {BASE_DOCUMENT_REQUIREMENTS.map((req) => (
          <DocumentUploadCard
            key={req.key}
            requirement={req}
            file={noteToText(files[req.key] ?? null, d.errors)}
            onUpload={(file) => handleUpload(req.key, file)}
            onRemove={() => handleRemove(req.key)}
          />
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 rounded-xl bg-navy-50 p-4 text-[12.5px] text-navy-700">
        <ShieldCheck className="size-4 shrink-0 text-navy-600" />
        <span>
          {d.securityStart}{" "}
          <Link href="/privacy" className="font-semibold underline">{d.securityLink}</Link>
          {d.securityEnd}
        </span>
      </div>
    </div>
  );
}
