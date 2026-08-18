import { MapPinned, FolderUp, ClipboardCheck, CalendarClock } from "lucide-react";

const STEPS = [
  {
    icon: MapPinned,
    title: "اختر وجهتك ونوع التأشيرة",
    desc: "حدد الدولة والغرض من السفر، وسنعرض لك المتطلبات الدقيقة فورًا.",
  },
  {
    icon: FolderUp,
    title: "أنشئ ملفك وارفع مستنداتك",
    desc: "عبّئ بياناتك وارفع مستنداتك بسهولة من جوالك مع فحص أولي فوري.",
  },
  {
    icon: ClipboardCheck,
    title: "نراجع طلبك ونجهزه",
    desc: "يراجع فريقنا ملفك ويجهز نموذج الطلب الرسمي حسب متطلبات الدولة.",
  },
  {
    icon: CalendarClock,
    title: "التقديم الرسمي ومتابعة الحالة",
    desc: "نوجهك لرابط التقديم أو الحجز الرسمي، وتتابع حالة طلبك خطوة بخطوة.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-navy-50/60 py-16 sm:py-20">
      <div className="container-app">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-600">كيف تعمل المنصة</span>
          <h2 className="mt-2 text-2xl font-extrabold text-navy-950 sm:text-3xl">رحلتك في 4 خطوات بسيطة</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.title} className="relative rounded-2xl border border-border bg-white p-6 card-elevated">
              <span className="absolute -top-3 end-6 flex size-7 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-white">
                {i + 1}
              </span>
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-gold-50">
                <step.icon className="size-6 text-gold-600" />
              </div>
              <h3 className="mb-2 text-[15px] font-bold text-navy-900">{step.title}</h3>
              <p className="text-[13.5px] leading-6 text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
