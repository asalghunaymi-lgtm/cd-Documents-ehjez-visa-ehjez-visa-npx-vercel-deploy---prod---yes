export interface PricingPlan {
  key: string;
  titleAr: string;
  descriptionAr: string;
  fromPriceSAR: number;
  features: string[];
  highlighted?: boolean;
}

// هذه الأسعار قيمة ابتدائية تجريبية، ومن المفترض إدارتها من جدول prices في
// قاعدة البيانات عبر لوحة التحكم (راجع database/schema.sql).
export const PRICING_PLANS: PricingPlan[] = [
  {
    key: "form-filling",
    titleAr: "تعبئة نموذج التأشيرة",
    descriptionAr: "مساعدتك في تجهيز وتعبئة نموذج طلب التأشيرة الرسمي بدقة وسهولة.",
    fromPriceSAR: 150,
    features: ["مراجعة البيانات قبل التقديم", "تجهيز النموذج بصيغة الجهة الرسمية", "دعم عبر واتساب/بريد"],
  },
  {
    key: "document-review",
    titleAr: "مراجعة المستندات",
    descriptionAr: "فحص أولي لمستنداتك للتأكد من اكتمالها ووضوحها قبل التقديم.",
    fromPriceSAR: 100,
    features: ["فحص نوع وحجم ووضوح الملفات", "تنبيه فوري بالمستندات الناقصة", "ملاحظات موظف مختص"],
  },
  {
    key: "full-preparation",
    titleAr: "تجهيز طلب التأشيرة كاملاً",
    descriptionAr: "خدمة شاملة من رفع المستندات وحتى تجهيز الملف للتقديم الرسمي.",
    fromPriceSAR: 350,
    features: ["إدارة كاملة لملفك", "متابعة حالة الطلب خطوة بخطوة", "دعم أولوية"],
    highlighted: true,
  },
  {
    key: "appointment-service",
    titleAr: "خدمة حجز الموعد",
    descriptionAr: "مساعدتك في تجهيز بيانات حجز الموعد وتوجيهك للمنصة الرسمية.",
    fromPriceSAR: 120,
    features: ["تجهيز بيانات الحجز", "رابط مباشر للمنصة الرسمية", "تذكير بالمواعيد"],
  },
  {
    key: "family-request",
    titleAr: "طلب عائلي",
    descriptionAr: "سعر خاص لتقديم طلبات عائلية متعددة (الزوجة والأبناء) ضمن ملف واحد.",
    fromPriceSAR: 0,
    features: ["ملف عائلي موحّد", "خصم على كل فرد إضافي", "مستندات ونماذج مستقلة لكل فرد"],
  },
];
