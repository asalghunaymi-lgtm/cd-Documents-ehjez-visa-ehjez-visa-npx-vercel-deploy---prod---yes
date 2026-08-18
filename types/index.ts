// أنواع البيانات الأساسية للمنصة — تُستخدم اليوم مع بيانات محلية (lib/data)
// وهي مصممة لتطابق مخطط قاعدة بيانات Supabase في database/schema.sql مباشرة،
// بحيث يسهل استبدال مصدر البيانات لاحقًا دون تغيير الواجهات.

export type RegionSlug = "schengen" | "uk" | "usa" | "australia" | "canada";

export interface CountrySource {
  labelAr: string;
  labelEn: string;
  url: string;
}

export interface VisaTypeSummary {
  slug: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CountryVisaInfo {
  slug: string; // e.g. "france" | "uk" | "usa"
  region: RegionSlug;
  nameAr: string;
  nameEn: string;
  flagEmoji: string;
  heroImageGradient: string;
  shortDescriptionAr: string;
  visaTypes: VisaTypeSummary[];
  requirements: string[];
  documents: string[];
  governmentFeeSAR: [number, number] | number;
  serviceFeeSAR: [number, number] | number;
  processingTimeAr: string;
  applicationSteps: string[];
  applicationCenterAr: string;
  officialSource: CountrySource;
  officialBookingUrl?: string;
  faqs: FaqItem[];
  importantNotesAr: string[];
  lastUpdated: string; // ISO date — "آخر تحديث"
  popular?: boolean;
}

export type DocumentStatus = "missing" | "uploaded" | "needs_review" | "approved" | "rejected";

export interface DocumentRequirementItem {
  key: string;
  labelAr: string;
  descriptionAr?: string;
  required: boolean;
}

export interface UploadedDocument {
  key: string;
  fileName: string;
  uploadedAt: string;
  status: DocumentStatus;
  employeeNote?: string;
}

export type ApplicationStatus =
  | "new"
  | "awaiting_documents"
  | "under_review"
  | "documents_missing"
  | "preparing_form"
  | "awaiting_customer"
  | "ready_for_appointment"
  | "appointment_booked"
  | "submitted"
  | "awaiting_decision"
  | "approved"
  | "rejected"
  | "closed";

export const APPLICATION_STATUS_LABELS: Record<ApplicationStatus, string> = {
  new: "جديد",
  awaiting_documents: "بانتظار المستندات",
  under_review: "تحت المراجعة",
  documents_missing: "مستندات ناقصة",
  preparing_form: "تجهيز النموذج",
  awaiting_customer: "بانتظار العميل",
  ready_for_appointment: "جاهز للموعد",
  appointment_booked: "تم حجز الموعد",
  submitted: "تم تقديم الطلب",
  awaiting_decision: "بانتظار القرار",
  approved: "تمت الموافقة",
  rejected: "مرفوض",
  closed: "مغلق",
};

export interface FamilyMember {
  id: string;
  relation: "spouse" | "son" | "daughter" | "other";
  fullNameAr: string;
  fullNameEn: string;
}

export interface TravelerData {
  fullNameAr: string;
  fullNameEn: string;
  birthDate: string;
  birthPlace: string;
  nationality: string;
  passportNumber: string;
  passportIssueDate: string;
  passportExpiryDate: string;
  gender: "male" | "female";
  maritalStatus: "single" | "married" | "divorced" | "widowed";
  phone: string;
  email: string;
  address: string;
  city: string;
  occupation: string;
  employer: string;
}
