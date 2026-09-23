import type { Metadata } from "next";
import { SectionKicker } from "@/components/ui/section-kicker";

export const metadata: Metadata = {
  title: "من نحن",
  description: "منفذ السعادة منصة سعودية متخصصة في تسهيل إجراءات خدمات التأشيرات والسفر.",
};

const VALUES = [
  { title: "تبسيط الإجراءات", desc: "نحوّل رحلة التأشيرة المعقدة إلى خطوات واضحة ومباشرة." },
  { title: "الشفافية والدقة", desc: "كل معلومة مرتبطة بمصدر رسمي وتاريخ آخر تحديث واضح." },
  { title: "خدمة تليق بك", desc: "دعم عربي كامل يرافقك في كل خطوة من رحلتك." },
  { title: "تجربة عصرية", desc: "منصة سهلة وسريعة الاستخدام، مصممة أولًا للجوال." },
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-border py-16 sm:py-20">
        <div className="container-app max-w-2xl">
          <SectionKicker>من نحن</SectionKicker>
          <h1 className="text-2xl font-extrabold text-navy-950 sm:text-3xl">منصة سعودية لخدمات التأشيرات</h1>
          <p className="mt-4 text-[15px] leading-8 text-muted-foreground">
            منفذ السعادة منصة سعودية متخصصة في تسهيل إجراءات خدمات التأشيرات والسفر، وتهدف إلى تبسيط رحلة العميل من
            معرفة المتطلبات وتجهيز المستندات وحتى الوصول إلى قنوات التقديم والحجز الرسمية.
          </p>
        </div>
      </section>

      <section className="container-app py-14 sm:py-16">
        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {VALUES.map((v, i) => (
            <div key={v.title} className="grid grid-cols-[2.5rem_1fr] gap-4">
              <span aria-hidden className="text-lg font-extrabold text-gold-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <dt className="text-[15px] font-bold text-navy-900">{v.title}</dt>
                <dd className="mt-1 text-[13.5px] leading-6 text-muted-foreground">{v.desc}</dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="mt-12 border-t border-gold-300 bg-gold-50/60 p-6 text-[13.5px] leading-7 text-navy-800 sm:p-8">
          <strong className="mb-2 block text-navy-900">إخلاء مسؤولية مهم</strong>
          منفذ السعادة منصة مستقلة لتقديم خدمات المساعدة في إجراءات التأشيرات، وليست سفارة أو جهة حكومية ولا تضمن
          إصدار التأشيرة. قرار منح أو رفض التأشيرة يعود حصريًا إلى الجهة المختصة في كل دولة.
        </div>
      </section>
    </div>
  );
}
