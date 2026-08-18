import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-app">
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-14 text-center sm:px-12">
          <div className="pointer-events-none absolute -left-16 -top-16 size-64 rounded-full bg-gold-500/20 blur-3xl" />
          <h2 className="relative text-2xl font-extrabold text-white sm:text-3xl">جاهز تبدأ رحلتك؟</h2>
          <p className="relative mx-auto mt-3 max-w-lg text-[15px] leading-7 text-navy-100">
            ابدأ طلب التأشيرة الآن، وخلك مطمئن أن كل خطوة واضحة أمامك من البداية للنهاية.
          </p>
          <div className="relative mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="gold">
              <Link href="/apply">ابدأ طلب التأشيرة الآن</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <Link href="/faq">لديك سؤال؟ تصفح الأسئلة الشائعة</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
