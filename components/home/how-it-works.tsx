import { SectionKicker } from "@/components/ui/section-kicker";

const STEPS = [
  {
    title: "اختر وجهتك ونوع التأشيرة",
    desc: "حدد الدولة والغرض من السفر، وسنعرض لك المتطلبات الدقيقة فورًا.",
  },
  {
    title: "أنشئ ملفك وارفع مستنداتك",
    desc: "عبّئ بياناتك وارفع مستنداتك بسهولة من جوالك مع فحص أولي فوري.",
  },
  {
    title: "نراجع طلبك ونجهزه",
    desc: "يراجع فريقنا ملفك ويجهز نموذج الطلب الرسمي حسب متطلبات الدولة.",
  },
  {
    title: "التقديم الرسمي ومتابعة الحالة",
    desc: "نوجهك لرابط التقديم أو الحجز الرسمي، وتتابع حالة طلبك خطوة بخطوة.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-border bg-muted/40 py-16 sm:py-20">
      <div className="container-app">
        <div className="max-w-xl">
          <SectionKicker>كيف تعمل المنصة</SectionKicker>
          <h2 className="text-2xl font-extrabold text-navy-950 sm:text-3xl">رحلتك في أربع خطوات بسيطة</h2>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="relative border-t-2 border-navy-900 pt-5 lg:border-t-0 lg:border-e-2 lg:pe-6 lg:pt-0 lg:last:border-e-0"
            >
              <span className="text-sm font-extrabold text-navy-300">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-[15px] font-bold text-navy-900">{step.title}</h3>
              <p className="mt-2 text-[13.5px] leading-6 text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
