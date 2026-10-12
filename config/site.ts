export const siteConfig = {
  nameAr: "منفذ السعادة للسياحة والسفر",
  nameEn: "Munfadh Alsa'ada",
  tagline: "نرتب لك طريق التأشيرة… وأنت خطط لرحلتك",
  descriptionAr:
    "منصة سعودية تساعدك على تجهيز طلب التأشيرة من اختيار الدولة ومعرفة المتطلبات، حتى رفع المستندات والوصول إلى قنوات التقديم والحجز الرسمية.",
  url: "https://munfadhalsaada.app",
  supportPhone: "+966559641419",
  supportPhoneDisplay: "+966 55 964 1419",
  whatsappLink: "https://wa.me/966559641419",
  supportEmail: "support@ehjez-visa.sa",
  disclaimer:
    "منفذ السعادة منصة مستقلة لتقديم خدمات المساعدة في إجراءات التأشيرات، وليست سفارة أو جهة حكومية ولا تضمن إصدار التأشيرة. قرار منح أو رفض التأشيرة يعود حصريًا إلى الجهة المختصة.",
  // `key` points to the translated label in lib/i18n/dictionaries (t.nav[key]).
  nav: [
    { href: "/", key: "home", label: "الرئيسية" },
    { href: "/visa", key: "visas", label: "الدول والتأشيرات" },
    { href: "/pricing", key: "services", label: "خدماتنا" },
    { href: "/about", key: "about", label: "من نحن" },
    { href: "/faq", key: "faq", label: "الأسئلة الشائعة" },
  ] as const,
};
