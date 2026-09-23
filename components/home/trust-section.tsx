import { SectionKicker } from "@/components/ui/section-kicker";

const POINTS = [
  { title: "منصة عربية بالكامل", desc: "واجهة عربية سهلة مصممة خصيصًا للمستخدم السعودي، غير المتخصص." },
  { title: "حماية بيانات عالية", desc: "تشفير وتخزين آمن لجميع مستنداتك وبياناتك الشخصية والمالية." },
  { title: "دعم طوال رحلتك", desc: "فريق مختص يرافقك من اختيار الوجهة وحتى تجهيز طلبك بالكامل." },
  { title: "معلومات موثوقة ومحدثة", desc: "كل متطلب ورسوم مرتبط بمصدر رسمي وتاريخ آخر تحديث واضح." },
];

export function TrustSection() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="container-app grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionKicker>لماذا منفذ السعادة</SectionKicker>
          <h2 className="text-2xl font-extrabold leading-tight text-navy-950 sm:text-3xl">
            تجربة أبسط بكثير من التعامل المباشر مع مواقع التأشيرات المعقدة
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-7 text-muted-foreground">
            نجمع لك كل ما تحتاجه في مكان واحد: المتطلبات، رفع المستندات، تجهيز النموذج، ومتابعة الحالة — بدون تعقيد
            وبدون لغة صعبة.
          </p>
        </div>

        <dl className="divide-y divide-border border-t border-border">
          {POINTS.map((p, i) => (
            <div key={p.title} className="grid grid-cols-[3rem_1fr] gap-4 py-5 sm:grid-cols-[3.5rem_1fr] sm:gap-6">
              <span aria-hidden className="text-lg font-extrabold text-gold-600">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <dt className="text-[15px] font-bold text-navy-900">{p.title}</dt>
                <dd className="mt-1 text-[13.5px] leading-6 text-muted-foreground">{p.desc}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
