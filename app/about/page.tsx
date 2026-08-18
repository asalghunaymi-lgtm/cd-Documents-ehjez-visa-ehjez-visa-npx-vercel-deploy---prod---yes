import type { Metadata } from "next";
import { ShieldCheck, Globe2, HeartHandshake, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "من نحن",
  description: "احجز تأشيرتك منصة سعودية متخصصة في تسهيل إجراءات خدمات التأشيرات والسفر.",
};

const VALUES = [
  { icon: Globe2, title: "تبسيط الإجراءات", desc: "نحوّل رحلة التأشيرة المعقدة إلى خطوات واضحة ومباشرة." },
  { icon: ShieldCheck, title: "الشفافية والدقة", desc: "كل معلومة مرتبطة بمصدر رسمي وتاريخ آخر تحديث واضح." },
  { icon: HeartHandshake, title: "خدمة تليق بك", desc: "دعم عربي كامل يرافقك في كل خطوة من رحلتك." },
  { icon: Sparkles, title: "تجربة عصرية", desc: "منصة سهلة وسريعة الاستخدام، مصممة أولًا للجوال." },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-brand-gradient py-16 sm:py-20">
        <div className="container-app text-center">
          <h1 className="text-2xl font-extrabold text-white sm:text-3xl">من نحن</h1>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-8 text-navy-100">
            احجز تأشيرتك منصة سعودية متخصصة في تسهيل إجراءات خدمات التأشيرات والسفر، وتهدف إلى تبسيط رحلة العميل من
            معرفة المتطلبات وتجهيز المستندات وحتى الوصول إلى قنوات التقديم والحجز الرسمية.
          </p>
        </div>
      </section>

      <section className="container-app py-14 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-white p-6 card-elevated">
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-gold-50">
                <v.icon className="size-6 text-gold-600" />
              </div>
              <h3 className="mb-2 text-[15px] font-bold text-navy-900">{v.title}</h3>
              <p className="text-[13.5px] leading-6 text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-gold-200 bg-gold-50/60 p-6 text-[13.5px] leading-7 text-navy-800 sm:p-8">
          <strong className="block mb-2 text-navy-900">إخلاء مسؤولية مهم</strong>
          احجز تأشيرتك منصة مستقلة لتقديم خدمات المساعدة في إجراءات التأشيرات، وليست سفارة أو جهة حكومية ولا تضمن
          إصدار التأشيرة. قرار منح أو رفض التأشيرة يعود حصريًا إلى الجهة المختصة في كل دولة.
        </div>
      </section>
    </div>
  );
}
