"use client";

import * as React from "react";
import { UploadCloud, FileCheck, Trash2, RefreshCw, AlertCircle, MessageSquareText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DocumentRequirementItem, DocumentStatus, UploadedDocument } from "@/types";
import { cn } from "@/lib/utils";
import { formatArabicDate } from "@/lib/utils";

const STATUS_META: Record<DocumentStatus, { label: string; dot: string; badge: "default" | "success" | "warning" | "destructive" }> = {
  missing: { label: "لم يتم الرفع", dot: "bg-red-500", badge: "destructive" },
  uploaded: { label: "تم الرفع", dot: "bg-emerald-500", badge: "success" },
  needs_review: { label: "يحتاج مراجعة", dot: "bg-amber-500", badge: "warning" },
  approved: { label: "تم القبول", dot: "bg-emerald-500", badge: "success" },
  rejected: { label: "مرفوض - أعد الرفع", dot: "bg-red-500", badge: "destructive" },
};

export function DocumentUploadCard({
  requirement,
  file,
  onUpload,
  onRemove,
}: {
  requirement: DocumentRequirementItem;
  file: UploadedDocument | null;
  onUpload: (file: File) => void;
  onRemove: () => void;
}) {
  const [dragOver, setDragOver] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const status = file?.status ?? "missing";
  const meta = STATUS_META[status];

  function handleFiles(files: FileList | null) {
    if (files && files[0]) onUpload(files[0]);
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragOver(false);
        handleFiles(e.dataTransfer.files);
      }}
      className={cn(
        "rounded-xl border-2 border-dashed p-4 transition-colors sm:p-5",
        dragOver ? "border-navy-400 bg-navy-50" : "border-border bg-white",
        status === "uploaded" || status === "approved" ? "border-solid border-emerald-200 bg-emerald-50/40" : "",
        status === "rejected" ? "border-solid border-red-200 bg-red-50/40" : ""
      )}
    >
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
            {file ? <FileCheck className="size-5 text-emerald-600" /> : <UploadCloud className="size-5 text-navy-400" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-navy-900">{requirement.labelAr}</h4>
              {requirement.required && <span className="text-[11px] text-destructive">إلزامي</span>}
            </div>
            {requirement.descriptionAr && (
              <p className="mt-0.5 text-[12px] text-muted-foreground">{requirement.descriptionAr}</p>
            )}
            {file && (
              <p className="mt-1 text-[12px] text-navy-600">
                {file.fileName} · رُفع بتاريخ {formatArabicDate(file.uploadedAt)}
              </p>
            )}
            {file?.employeeNote && (
              <p className="mt-1 flex items-center gap-1 text-[12px] text-amber-700">
                <MessageSquareText className="size-3.5" /> ملاحظة الموظف: {file.employeeNote}
              </p>
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Badge variant={meta.badge}>
            <span className={cn("size-1.5 rounded-full", meta.dot)} />
            {meta.label}
          </Badge>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept="image/*,.pdf"
          onChange={(e) => handleFiles(e.target.files)}
        />
        {!file ? (
          <Button size="sm" variant="outline" onClick={() => inputRef.current?.click()}>
            <UploadCloud className="size-4" /> رفع الملف أو اسحبه هنا
          </Button>
        ) : (
          <>
            <Button size="sm" variant="outline" onClick={() => inputRef.current?.click()}>
              <RefreshCw className="size-4" /> استبدال
            </Button>
            <Button size="sm" variant="ghost" onClick={onRemove} className="text-destructive hover:bg-red-50">
              <Trash2 className="size-4" /> حذف
            </Button>
          </>
        )}
        {status === "needs_review" && (
          <span className="flex items-center gap-1 text-[11.5px] text-amber-700">
            <AlertCircle className="size-3.5" /> يبدو أن المستند غير مكتمل أو غير واضح، يرجى رفع نسخة أوضح.
          </span>
        )}
      </div>
    </div>
  );
}
