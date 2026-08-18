import { ApplicationStatus, DocumentStatus } from "@/types";

// بيانات تجريبية لعرض واجهات لوحة التحكم فقط — تُستبدل باستعلامات Supabase
// الحقيقية عبر lib/supabase بعد ربط قاعدة البيانات (راجع database/schema.sql).

export interface MockCustomerRow {
  id: string;
  referenceNumber: string;
  name: string;
  country: string;
  visaType: string;
  createdAt: string;
  status: ApplicationStatus;
  employee: string;
}

export const MOCK_APPLICATIONS: MockCustomerRow[] = [
  { id: "1", referenceNumber: "EV-2026-004821", name: "عبدالله الغنيمي", country: "فرنسا 🇫🇷", visaType: "سياحية", createdAt: "2026-08-10", status: "under_review", employee: "سارة أحمد" },
  { id: "2", referenceNumber: "EV-2026-004822", name: "نورة القحطاني", country: "بريطانيا 🇬🇧", visaType: "زيارة عائلية", createdAt: "2026-08-11", status: "documents_missing", employee: "سارة أحمد" },
  { id: "3", referenceNumber: "EV-2026-004823", name: "فهد العتيبي", country: "أمريكا 🇺🇸", visaType: "B1/B2", createdAt: "2026-08-12", status: "awaiting_customer", employee: "خالد المطيري" },
  { id: "4", referenceNumber: "EV-2026-004824", name: "منيرة الدوسري", country: "كندا 🇨🇦", visaType: "Visitor Visa", createdAt: "2026-08-12", status: "new", employee: "—" },
  { id: "5", referenceNumber: "EV-2026-004825", name: "سلطان الحربي", country: "إيطاليا 🇮🇹", visaType: "سياحية", createdAt: "2026-08-13", status: "ready_for_appointment", employee: "خالد المطيري" },
  { id: "6", referenceNumber: "EV-2026-004826", name: "لمياء الشمري", country: "أستراليا 🇦🇺", visaType: "Visitor", createdAt: "2026-08-14", status: "submitted", employee: "سارة أحمد" },
  { id: "7", referenceNumber: "EV-2026-004827", name: "تركي آل سعود", country: "إسبانيا 🇪🇸", visaType: "أعمال", createdAt: "2026-08-15", status: "approved", employee: "خالد المطيري" },
];

export const MOCK_STATS = {
  totalApplications: 128,
  newThisWeek: 14,
  awaitingDocuments: 22,
  approved: 61,
  rejected: 6,
};

export interface MockDocumentRow {
  id: string;
  applicant: string;
  document: string;
  status: DocumentStatus;
  uploadedAt: string;
}

export const MOCK_PENDING_DOCUMENTS: MockDocumentRow[] = [
  { id: "d1", applicant: "عبدالله الغنيمي", document: "كشف حساب بنكي", status: "needs_review", uploadedAt: "2026-08-15" },
  { id: "d2", applicant: "نورة القحطاني", document: "خطاب جهة العمل", status: "uploaded", uploadedAt: "2026-08-15" },
  { id: "d3", applicant: "فهد العتيبي", document: "جواز السفر", status: "uploaded", uploadedAt: "2026-08-14" },
];
