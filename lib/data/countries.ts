import { CountryVisaInfo } from "@/types";

const SCHENGEN_REQUIREMENTS = [
  "جواز سفر ساري المفعول لا تقل مدته عن 6 أشهر بعد تاريخ العودة، ويحتوي على صفحتين فارغتين على الأقل.",
  "تعبئة نموذج طلب التأشيرة الموحد لدول شنغن.",
  "صورة شخصية حديثة بمواصفات شنغن (خلفية بيضاء).",
  "تأمين طبي للسفر يغطي كامل مدة الرحلة بحد أدنى 30,000 يورو.",
  "إثبات الحجز في الفندق أو مكان الإقامة طوال مدة الرحلة.",
  "تذاكر طيران محجوزة (ذهاب وعودة) أو تأكيد الحجز.",
  "كشف حساب بنكي لآخر 3 أشهر يوضح القدرة المالية.",
  "خطاب تعريف من جهة العمل يوضح الوظيفة والراتب والإجازة الممنوحة.",
  "خطة سفر (Itinerary) توضح برنامج الرحلة اليومي.",
];

const SCHENGEN_DOCUMENTS = [
  "جواز السفر",
  "صورة شخصية",
  "الهوية الوطنية",
  "تعريف بالراتب",
  "كشف حساب بنكي",
  "خطاب جهة العمل",
  "حجوزات السفر",
  "حجوزات السكن",
  "التأمين الطبي",
];

const SCHENGEN_STEPS = [
  "تحديد الدولة الشنغنية المختصة بطلبك (حسب أطول مدة إقامة أو دولة الدخول الأول).",
  "إنشاء ملفك على منصة احجز تأشيرتك وتعبئة بياناتك.",
  "رفع كامل المستندات المطلوبة ومراجعتها.",
  "تجهيز نموذج طلب التأشيرة الرسمي.",
  "حجز موعد لدى مركز التقديم المعتمد (VFS Global / TLScontact وغيرها حسب الدولة).",
  "الحضور الشخصي لتقديم البصمة والمستندات.",
  "انتظار قرار السفارة أو القنصلية.",
];

const SCHENGEN_FAQS = [
  {
    question: "كم تستغرق معالجة تأشيرة شنغن؟",
    answer: "غالبًا ما تستغرق المعالجة من 10 إلى 15 يوم عمل، وقد تصل إلى 30 يومًا في بعض الحالات حسب السفارة والموسم.",
  },
  {
    question: "هل يمكنني اختيار أي دولة شنغن للتقديم؟",
    answer:
      "لا. يجب التقديم عبر الدولة التي ستقضي فيها أطول مدة من رحلتك، وإذا تساوت المدد فالعبرة بدولة الدخول الأول إلى منطقة شنغن.",
  },
];

function schengenCountry(params: {
  slug: string;
  nameAr: string;
  nameEn: string;
  flagEmoji: string;
  gradient: string;
  applicationCenterAr: string;
  officialUrl: string;
  officialLabel: string;
  popular?: boolean;
}): CountryVisaInfo {
  return {
    slug: params.slug,
    region: "schengen",
    nameAr: params.nameAr,
    nameEn: params.nameEn,
    flagEmoji: params.flagEmoji,
    heroImageGradient: params.gradient,
    shortDescriptionAr: `دليلك الكامل للتقديم على تأشيرة ${params.nameAr} ضمن منطقة شنغن، من المتطلبات وحتى حجز الموعد الرسمي.`,
    visaTypes: [
      { slug: "tourism", nameAr: "سياحية", nameEn: "Tourism", descriptionAr: "للزيارات السياحية القصيرة حتى 90 يومًا." },
      { slug: "family-visit", nameAr: "زيارة عائلية", nameEn: "Family Visit", descriptionAr: "لزيارة أقارب أو عائلة مقيمة في الدولة." },
      { slug: "business", nameAr: "أعمال", nameEn: "Business", descriptionAr: "لاجتماعات العمل والمعارض التجارية." },
      { slug: "transit", nameAr: "ترانزيت", nameEn: "Transit", descriptionAr: "للعبور عبر مطارات منطقة شنغن." },
    ],
    requirements: SCHENGEN_REQUIREMENTS,
    documents: SCHENGEN_DOCUMENTS,
    governmentFeeSAR: [340, 380],
    serviceFeeSAR: [250, 450],
    processingTimeAr: "10 - 15 يوم عمل (تقديري)",
    applicationSteps: SCHENGEN_STEPS,
    applicationCenterAr: params.applicationCenterAr,
    officialSource: { labelAr: params.officialLabel, labelEn: params.officialLabel, url: params.officialUrl },
    officialBookingUrl: params.officialUrl,
    faqs: SCHENGEN_FAQS,
    importantNotesAr: [
      "الرسوم الحكومية تُدفع مباشرة للسفارة أو مركز التقديم المعتمد وليست جزءًا من رسوم منصة احجز تأشيرتك.",
      "قرار قبول أو رفض التأشيرة يعود حصريًا للسفارة أو القنصلية المختصة.",
      "يجب أن يكون التقديم عبر الدولة الشنغنية الصحيحة حسب قواعد أطول إقامة / أول دخول.",
    ],
    lastUpdated: "2026-08-01",
    popular: params.popular,
  };
}

export const COUNTRIES: CountryVisaInfo[] = [
  schengenCountry({
    slug: "france",
    nameAr: "فرنسا",
    nameEn: "France",
    flagEmoji: "🇫🇷",
    gradient: "from-navy-900 to-navy-700",
    applicationCenterAr: "مركز TLScontact لتأشيرات فرنسا في الرياض وجدة",
    officialUrl: "https://france-visas.gouv.fr",
    officialLabel: "France-Visas — الموقع الرسمي",
    popular: true,
  }),
  schengenCountry({
    slug: "italy",
    nameAr: "إيطاليا",
    nameEn: "Italy",
    flagEmoji: "🇮🇹",
    gradient: "from-navy-900 to-emerald-800",
    applicationCenterAr: "مركز VFS Global لتأشيرات إيطاليا في الرياض وجدة",
    officialUrl: "https://vfsglobal.com/italy/saudiarabia",
    officialLabel: "VFS Global — إيطاليا",
    popular: true,
  }),
  schengenCountry({
    slug: "spain",
    nameAr: "إسبانيا",
    nameEn: "Spain",
    flagEmoji: "🇪🇸",
    gradient: "from-navy-900 to-red-800",
    applicationCenterAr: "مركز BLS International لتأشيرات إسبانيا في الرياض وجدة",
    officialUrl: "https://blsspainvisa.com/saudiarabia",
    officialLabel: "BLS International — إسبانيا",
    popular: true,
  }),
  schengenCountry({
    slug: "germany",
    nameAr: "ألمانيا",
    nameEn: "Germany",
    flagEmoji: "🇩🇪",
    gradient: "from-navy-900 to-zinc-700",
    applicationCenterAr: "مركز VFS Global لتأشيرات ألمانيا في الرياض وجدة",
    officialUrl: "https://saudiarabia.diplo.de",
    officialLabel: "السفارة الألمانية — الموقع الرسمي",
    popular: true,
  }),
  schengenCountry({
    slug: "greece",
    nameAr: "اليونان",
    nameEn: "Greece",
    flagEmoji: "🇬🇷",
    gradient: "from-navy-900 to-sky-800",
    applicationCenterAr: "مركز VFS Global لتأشيرات اليونان في الرياض وجدة",
    officialUrl: "https://www.mfa.gr",
    officialLabel: "وزارة الخارجية اليونانية",
  }),
  schengenCountry({
    slug: "austria",
    nameAr: "النمسا",
    nameEn: "Austria",
    flagEmoji: "🇦🇹",
    gradient: "from-navy-900 to-red-900",
    applicationCenterAr: "مركز VFS Global لتأشيرات النمسا في الرياض",
    officialUrl: "https://www.bmeia.gv.at",
    officialLabel: "وزارة الخارجية النمساوية",
  }),
  schengenCountry({
    slug: "switzerland",
    nameAr: "سويسرا",
    nameEn: "Switzerland",
    flagEmoji: "🇨🇭",
    gradient: "from-navy-900 to-red-700",
    applicationCenterAr: "مركز VFS Global لتأشيرات سويسرا في الرياض وجدة",
    officialUrl: "https://www.sem.admin.ch",
    officialLabel: "مكتب الهجرة الفيدرالي السويسري",
  }),
  schengenCountry({
    slug: "netherlands",
    nameAr: "هولندا",
    nameEn: "Netherlands",
    flagEmoji: "🇳🇱",
    gradient: "from-navy-900 to-orange-700",
    applicationCenterAr: "مركز VFS Global لتأشيرات هولندا في الرياض",
    officialUrl: "https://www.netherlandsandyou.nl",
    officialLabel: "الحكومة الهولندية — الموقع الرسمي",
  }),
  schengenCountry({
    slug: "belgium",
    nameAr: "بلجيكا",
    nameEn: "Belgium",
    flagEmoji: "🇧🇪",
    gradient: "from-navy-900 to-yellow-700",
    applicationCenterAr: "مركز VFS Global لتأشيرات بلجيكا في الرياض",
    officialUrl: "https://diplomatie.belgium.be",
    officialLabel: "وزارة الخارجية البلجيكية",
  }),
  schengenCountry({
    slug: "portugal",
    nameAr: "البرتغال",
    nameEn: "Portugal",
    flagEmoji: "🇵🇹",
    gradient: "from-navy-900 to-green-800",
    applicationCenterAr: "مركز VFS Global لتأشيرات البرتغال في الرياض",
    officialUrl: "https://vistos.mne.gov.pt",
    officialLabel: "البوابة الرسمية للتأشيرات البرتغالية",
  }),

  // بريطانيا
  {
    slug: "uk",
    region: "uk",
    nameAr: "بريطانيا",
    nameEn: "United Kingdom",
    flagEmoji: "🇬🇧",
    heroImageGradient: "from-navy-950 to-navy-800",
    shortDescriptionAr: "دليلك لتأشيرة بريطانيا بأنواعها من السياحة إلى الدراسة، مع خطوات التقديم عبر UKVI ومراكز TLScontact.",
    visaTypes: [
      { slug: "tourism", nameAr: "سياحية (Standard Visitor)", nameEn: "Tourism", descriptionAr: "للزيارات السياحية حتى 6 أشهر." },
      { slug: "family-visit", nameAr: "زيارة عائلية", nameEn: "Family Visit", descriptionAr: "لزيارة أفراد العائلة المقيمين في بريطانيا." },
      { slug: "business", nameAr: "أعمال", nameEn: "Business Visitor", descriptionAr: "للاجتماعات والمؤتمرات وأنشطة الأعمال القصيرة." },
      { slug: "study", nameAr: "دراسة", nameEn: "Student Visa", descriptionAr: "للدراسة في مؤسسة تعليمية معتمدة (Student Sponsor)." },
      { slug: "other", nameAr: "أنواع أخرى", nameEn: "Other", descriptionAr: "تأشيرات العمل، العلاج الطبي، والعبور." },
    ],
    requirements: [
      "جواز سفر ساري المفعول.",
      "تعبئة النموذج الإلكتروني على موقع UKVI الرسمي.",
      "دفع رسوم التأشيرة الحكومية إلكترونيًا (يقوم بها العميل مباشرة أو بمساعدة فريق الدعم).",
      "إثبات القدرة المالية (كشف حساب بنكي لآخر 6 أشهر).",
      "إثبات الإقامة والعمل في السعودية.",
      "خطاب دعوة (في حال الزيارة العائلية).",
      "قبول جامعي معتمد (لتأشيرة الدراسة فقط).",
    ],
    documents: SCHENGEN_DOCUMENTS,
    governmentFeeSAR: [500, 750],
    serviceFeeSAR: [300, 500],
    processingTimeAr: "15 - 20 يوم عمل (تقديري)، مع إمكانية خدمة مستعجلة رسمية",
    applicationSteps: [
      "تعبئة النموذج الإلكتروني الرسمي على UKVI.",
      "دفع الرسوم الحكومية إلكترونيًا عبر الموقع الرسمي.",
      "تجهيز ملفك ومستنداتك على منصة احجز تأشيرتك.",
      "حجز موعد في مركز TLScontact المعتمد.",
      "الحضور الشخصي لتقديم البصمة والمستندات.",
      "متابعة حالة الطلب حتى صدور القرار.",
    ],
    applicationCenterAr: "مركز TLScontact لتأشيرات بريطانيا في الرياض وجدة",
    officialSource: { labelAr: "UK Visas and Immigration (UKVI)", labelEn: "UKVI", url: "https://www.gov.uk/browse/visas-immigration" },
    officialBookingUrl: "https://www.tlscontact.com/sa2gb",
    faqs: [
      { question: "هل تحجزون موعد التأشيرة البريطانية نيابة عني؟", answer: "لا نحجز الموعد آليًا؛ نساعدك في تجهيز الملف ثم نوجهك مباشرة لرابط الحجز الرسمي على TLScontact." },
      { question: "هل رسوم UKVI مشمولة في رسوم الخدمة؟", answer: "لا، الرسوم الحكومية تُدفع من العميل مباشرة للجهة الرسمية وتُعرض بشكل منفصل عن رسوم خدمة المنصة." },
    ],
    importantNotesAr: [
      "احجز تأشيرتك لا تُقدّم أي بيانات نيابة عنك لموقع UKVI دون علمك وموافقتك الصريحة.",
      "قرار منح التأشيرة يعود حصريًا لسفارة/قنصلية المملكة المتحدة.",
    ],
    lastUpdated: "2026-08-01",
    popular: true,
  },

  // أمريكا
  {
    slug: "usa",
    region: "usa",
    nameAr: "الولايات المتحدة",
    nameEn: "United States",
    flagEmoji: "🇺🇸",
    heroImageGradient: "from-navy-950 to-blue-900",
    shortDescriptionAr: "نساعدك في تجهيز نموذج DS-160 والمستندات ومتابعة ملف موعد السفارة الأمريكية، دون أي حجز آلي للموعد.",
    visaTypes: [
      { slug: "b1-b2", nameAr: "B1/B2 (زيارة/سياحة)", nameEn: "B1/B2", descriptionAr: "للسياحة والزيارة والأعمال قصيرة المدى." },
      { slug: "study", nameAr: "دراسة", nameEn: "F1 Student", descriptionAr: "للدراسة في مؤسسة تعليمية أمريكية معتمدة." },
      { slug: "business", nameAr: "أعمال", nameEn: "Business", descriptionAr: "لأنشطة الأعمال والمؤتمرات." },
      { slug: "other", nameAr: "أنواع أخرى", nameEn: "Other", descriptionAr: "تأشيرات العبور والعلاج وغيرها." },
    ],
    requirements: [
      "جواز سفر ساري المفعول لمدة 6 أشهر على الأقل بعد تاريخ الرحلة.",
      "تعبئة نموذج DS-160 الإلكتروني الرسمي.",
      "دفع رسوم MRV (رسوم طلب التأشيرة غير المستردة).",
      "صورة شخصية بمواصفات السفارة الأمريكية.",
      "إثبات الروابط بالسعودية (عمل، عائلة، ممتلكات).",
      "كشف حساب بنكي وإثبات القدرة المالية.",
    ],
    documents: [...SCHENGEN_DOCUMENTS, "تأكيد موعد المقابلة (DS-160 Confirmation)"],
    governmentFeeSAR: 650,
    serviceFeeSAR: [350, 600],
    processingTimeAr: "يعتمد على توفر مواعيد المقابلة في السفارة/القنصلية (متغير)",
    applicationSteps: [
      "تعبئة نموذج DS-160 بمساعدة فريقنا (يتم تجهيز البيانات وليس الإرسال الآلي دون علمك).",
      "دفع رسوم MRV عبر القنوات الرسمية المعتمدة.",
      "إنشاء/متابعة ملف الموعد على موقع السفارة الأمريكية.",
      "حجز موعد المقابلة الشخصية بنفسك عبر الموقع الرسمي (نوجهك للرابط المباشر).",
      "تجهيز كامل المستندات المطلوبة ليوم المقابلة.",
      "حضور المقابلة الشخصية في السفارة أو القنصلية.",
    ],
    applicationCenterAr: "السفارة الأمريكية بالرياض أو القنصلية بجدة (حسب موقعك)",
    officialSource: { labelAr: "U.S. Embassy & Consulates in Saudi Arabia", labelEn: "U.S. Embassy KSA", url: "https://sa.usembassy.gov" },
    officialBookingUrl: "https://ais.usvisa-info.com/en-sa/niv",
    faqs: [
      { question: "هل تحجزون موعد السفارة الأمريكية تلقائيًا؟", answer: "لا يوجد API رسمي متاح لذلك، فنحن لا ندّعي حجزًا آليًا للموعد. نساعدك في تجهيز الملف وتعبئة DS-160 ثم توجيهك للحجز الرسمي بنفسك." },
      { question: "هل رسوم MRV مشمولة برسوم الخدمة؟", answer: "لا، رسوم MRV رسوم حكومية غير مستردة تُدفع مباشرة للجهة الرسمية، منفصلة تمامًا عن رسوم خدمتنا." },
    ],
    importantNotesAr: [
      "لا تضمن منصة احجز تأشيرتك حجز موعد أو قبول الطلب؛ التقديم والمقابلة الشخصية إلزامية أمام الجهة الرسمية.",
      "نفرّق بوضوح بين: تعبئة DS-160، دفع الرسوم، إنشاء/متابعة ملف الموعد، حجز الموعد، وتجهيز المستندات — كل خطوة منفصلة وواضحة لك.",
    ],
    lastUpdated: "2026-08-01",
    popular: true,
  },

  // أستراليا
  {
    slug: "australia",
    region: "australia",
    nameAr: "أستراليا",
    nameEn: "Australia",
    flagEmoji: "🇦🇺",
    heroImageGradient: "from-navy-950 to-amber-900",
    shortDescriptionAr: "دليل التقديم على تأشيرات أستراليا للزيارة والدراسة والأعمال عبر النظام الإلكتروني الرسمي ImmiAccount.",
    visaTypes: [
      { slug: "visitor", nameAr: "زيارة (Visitor 600)", nameEn: "Visitor", descriptionAr: "للسياحة وزيارة الأقارب." },
      { slug: "student", nameAr: "دراسة (Student 500)", nameEn: "Student", descriptionAr: "للدراسة في مؤسسة تعليمية أسترالية معتمدة." },
      { slug: "business", nameAr: "أعمال", nameEn: "Business", descriptionAr: "لأنشطة الأعمال القصيرة المدى." },
    ],
    requirements: [
      "جواز سفر ساري المفعول.",
      "تعبئة الطلب إلكترونيًا عبر نظام ImmiAccount الرسمي.",
      "إثبات القدرة المالية وكشف حساب بنكي.",
      "تأمين صحي للسفر.",
      "إثبات الغرض من الزيارة (حجوزات، خطاب دعوة، أو قبول دراسي).",
    ],
    documents: SCHENGEN_DOCUMENTS,
    governmentFeeSAR: [450, 900],
    serviceFeeSAR: [300, 550],
    processingTimeAr: "20 - 30 يوم عمل (تقديري)",
    applicationSteps: [
      "إنشاء حساب ImmiAccount وتجهيز البيانات المطلوبة.",
      "رفع المستندات ومراجعتها على منصتنا.",
      "تعبئة نموذج الطلب الرسمي بمساعدتنا.",
      "دفع الرسوم الحكومية عبر النظام الرسمي.",
      "متابعة حالة الطلب حتى صدور القرار (لا توجد مقابلة شخصية غالبًا).",
    ],
    applicationCenterAr: "التقديم إلكترونيًا بالكامل عبر ImmiAccount — لا يوجد مركز تقديم فعلي في الرياض",
    officialSource: { labelAr: "Department of Home Affairs — Australia", labelEn: "Home Affairs Australia", url: "https://immi.homeaffairs.gov.au" },
    officialBookingUrl: "https://online.immi.gov.au",
    faqs: [
      { question: "هل التقديم الأسترالي يتطلب مقابلة شخصية؟", answer: "غالبًا لا تتطلب تأشيرة الزيارة مقابلة شخصية، والتقديم يتم إلكترونيًا بالكامل عبر ImmiAccount." },
    ],
    importantNotesAr: ["القرار النهائي بشأن التأشيرة يعود حصريًا لإدارة الشؤون الداخلية الأسترالية (Department of Home Affairs)."],
    lastUpdated: "2026-08-01",
  },

  // كندا
  {
    slug: "canada",
    region: "canada",
    nameAr: "كندا",
    nameEn: "Canada",
    flagEmoji: "🇨🇦",
    heroImageGradient: "from-navy-950 to-red-900",
    shortDescriptionAr: "نرافقك في تجهيز طلب تأشيرة كندا للزيارة أو الدراسة أو العمل عبر النظام الإلكتروني الرسمي IRCC.",
    visaTypes: [
      { slug: "visitor", nameAr: "زيارة (Visitor Visa)", nameEn: "Visitor Visa", descriptionAr: "للسياحة وزيارة الأقارب حتى 6 أشهر." },
      { slug: "study", nameAr: "دراسة (Study Permit)", nameEn: "Study Permit", descriptionAr: "للدراسة في مؤسسة تعليمية معتمدة (DLI)." },
      { slug: "work", nameAr: "عمل (Work Permit)", nameEn: "Work Permit", descriptionAr: "للعمل لدى صاحب عمل كندي معتمد." },
    ],
    requirements: [
      "جواز سفر ساري المفعول.",
      "تعبئة الطلب إلكترونيًا عبر بوابة IRCC الرسمية.",
      "صورة بيومترية وبصمات (تُؤخذ في مركز VFS المعتمد).",
      "إثبات القدرة المالية.",
      "خطاب دعوة أو قبول دراسي/عرض عمل حسب نوع التأشيرة.",
    ],
    documents: [...SCHENGEN_DOCUMENTS, "الاستمارة البيومترية (Biometrics)"],
    governmentFeeSAR: [400, 850],
    serviceFeeSAR: [300, 550],
    processingTimeAr: "20 - 45 يوم عمل (تقديري)",
    applicationSteps: [
      "إنشاء حساب على بوابة IRCC وتجهيز البيانات.",
      "رفع المستندات ومراجعتها على منصتنا.",
      "تعبئة نموذج الطلب الرسمي بمساعدتنا.",
      "دفع الرسوم الحكومية ورسوم البصمة.",
      "حجز موعد البصمة في مركز VFS Global المعتمد.",
      "متابعة حالة الطلب حتى صدور القرار.",
    ],
    applicationCenterAr: "مركز VFS Global لتأشيرات كندا في الرياض وجدة",
    officialSource: { labelAr: "Immigration, Refugees and Citizenship Canada (IRCC)", labelEn: "IRCC", url: "https://www.canada.ca/en/immigration-refugees-citizenship.html" },
    officialBookingUrl: "https://www.vfsglobal.ca/canada/saudiarabia",
    faqs: [
      { question: "هل يمكنني إضافة أفراد العائلة في نفس طلب كندا؟", answer: "نعم، عبر خاصية الطلب العائلي يمكن إضافة الزوجة والأبناء، ولكل فرد ملف ومستندات ونموذج مستقل ضمن نفس الطلب العائلي." },
    ],
    importantNotesAr: ["القرار النهائي بشأن التأشيرة يعود حصريًا لهيئة IRCC الكندية."],
    lastUpdated: "2026-08-01",
  },
];

export function getCountryBySlug(slug: string) {
  return COUNTRIES.find((c) => c.slug === slug);
}

export function getCountriesByRegion(region: RegionSlugFilter) {
  if (region === "all") return COUNTRIES;
  return COUNTRIES.filter((c) => c.region === region);
}

type RegionSlugFilter = CountryVisaInfo["region"] | "all";

export const POPULAR_COUNTRIES = COUNTRIES.filter((c) => c.popular);
