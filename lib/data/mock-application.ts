import { ApplicationStatus } from "@/types";
import type { Locale } from "@/lib/i18n/config";
import { MOCK_APPLICATION_EN, PROGRESS_STEPS_EN } from "@/lib/i18n/content/site.en";

export interface ProgressStep {
  key: string;
  label: string;
  state: "done" | "current" | "upcoming";
}

// بيانات تجريبية محلية لعرض لوحة "ملفي" — ستُستبدل ببيانات حقيقية من Supabase
// (جدول applications + application_status_history) بعد الربط.
export const MOCK_APPLICATION = {
  referenceNumber: "EV-2026-004821",
  countryNameAr: "فرنسا",
  countryFlag: "🇫🇷",
  visaTypeAr: "سياحية",
  status: "under_review" as ApplicationStatus,
  createdAt: "2026-08-10",
  assignedEmployeeAr: "فريق الدعم",
};

export const PROGRESS_STEPS: ProgressStep[] = [
  { key: "personal_data", label: "البيانات الشخصية", state: "done" },
  { key: "documents", label: "المستندات", state: "done" },
  { key: "review", label: "مراجعة الطلب", state: "current" },
  { key: "visa_form", label: "تعبئة نموذج التأشيرة", state: "upcoming" },
  { key: "payment", label: "دفع الرسوم", state: "upcoming" },
  { key: "appointment", label: "حجز الموعد", state: "upcoming" },
  { key: "interview", label: "البصمة / المقابلة", state: "upcoming" },
  { key: "decision", label: "انتظار القرار", state: "upcoming" },
];

/** Demo application in the requested language. */
export function getMockApplication(locale: Locale = "ar") {
  return locale === "en" ? { ...MOCK_APPLICATION, ...MOCK_APPLICATION_EN } : MOCK_APPLICATION;
}

export function getProgressSteps(locale: Locale = "ar"): ProgressStep[] {
  if (locale === "ar") return PROGRESS_STEPS;
  return PROGRESS_STEPS.map((s) => ({ ...s, label: PROGRESS_STEPS_EN[s.key] ?? s.label }));
}
