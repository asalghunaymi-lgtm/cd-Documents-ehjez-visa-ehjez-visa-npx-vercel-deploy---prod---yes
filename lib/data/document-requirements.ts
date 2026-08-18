import { DocumentRequirementItem } from "@/types";

export const BASE_DOCUMENT_REQUIREMENTS: DocumentRequirementItem[] = [
  { key: "passport", labelAr: "جواز السفر", descriptionAr: "صفحة البيانات الشخصية، سارية 6 أشهر على الأقل.", required: true },
  { key: "photo", labelAr: "صورة شخصية", descriptionAr: "خلفية بيضاء، حديثة (لا تتجاوز 6 أشهر).", required: true },
  { key: "national_id", labelAr: "الهوية الوطنية", descriptionAr: "صورة واضحة للوجهين.", required: true },
  { key: "salary_certificate", labelAr: "تعريف بالراتب", descriptionAr: "خطاب رسمي موقع من جهة العمل.", required: true },
  { key: "bank_statement", labelAr: "كشف حساب بنكي", descriptionAr: "لآخر 3 أشهر على الأقل.", required: true },
  { key: "employer_letter", labelAr: "خطاب جهة العمل", descriptionAr: "يوضح المسمى الوظيفي ومدة الإجازة الممنوحة.", required: true },
  { key: "travel_bookings", labelAr: "حجوزات السفر", descriptionAr: "تذاكر الطيران ذهاب وعودة أو تأكيد حجز.", required: true },
  { key: "accommodation_bookings", labelAr: "حجوزات السكن", descriptionAr: "حجز فندق أو إثبات سكن طوال مدة الرحلة.", required: true },
  { key: "medical_insurance", labelAr: "التأمين الطبي", descriptionAr: "تغطية لا تقل عن 30,000 يورو لدول شنغن.", required: true },
  { key: "additional_docs", labelAr: "مستندات إضافية", descriptionAr: "أي مستندات إضافية يطلبها الموظف المختص.", required: false },
];
