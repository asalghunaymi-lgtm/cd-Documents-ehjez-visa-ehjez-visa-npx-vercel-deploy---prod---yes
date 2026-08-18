import { Lock, Languages, Users, BadgeCheck } from "lucide-react";

const POINTS = [
  { icon: Languages, title: "منصة عربية بالكامل", desc: "واجهة عربية سهلة مصممة خصيصًا للمستخدم السعودي، غير المتخصص." },
  { icon: Lock, title: "حماية بيانات عالية", desc: "تشفير وتخزين آمن لجميع مستنداتك وبياناتك الشخصية والمالية." },
  { icon: Users, title: "دعم طوال رحلتك", desc: "فريق مختص يرافقك من اختيار الوجهة وحتى تجهيز طلبك بالكامل." },
  { icon: BadgeCheck, title: "معلومات موثوقة ومحدثة", desc: "كل متطلب ورسوم مرتبط بمصدر رسمي وتاريخ آخر تحديث واضح." },
];

export function TrustSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-app grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-gold-600">لماذا احجز تأشيرتك</span>
          <h2 className="mt-2 text-2xl font-extrabold text-navy-950 sm:text-3xl">
            تجربة أبسط بكثير من التعامل المباشر مع مواقع التأشيرات المعقدة
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
            نجمع لك كل ما تحتاجه في مكان واحد: المتطلبات، رفع المستندات، تجهيز النموذج، ومتابعة الحالة — بدون تعقيد
            وبدون لغة صعبة.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {POINTS.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-white p-5 card-elevated">
              <div className="mb-3 flex size-11 items-center justify-center rounded-lg bg-navy-900">
                <p.icon className="size-5 text-gold-400" />
              </div>
              <h3 className="mb-1.5 text-sm font-bold text-navy-900">{p.title}</h3>
              <p className="text-[13px] leading-6 text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
