import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="border-t border-navy-900 bg-navy-950">
      <div className="container-app flex flex-col items-start justify-between gap-8 py-14 sm:py-16 lg:flex-row lg:items-center">
        <div className="max-w-lg">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">جاهز تبدأ رحلتك؟</h2>
          <p className="mt-3 text-[15px] leading-7 text-navy-300">
            ابدأ طلب التأشيرة الآن، وخلك مطمئن أن كل خطوة واضحة أمامك من البداية للنهاية.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <Button asChild size="lg" variant="gold">
            <Link href="/apply">ابدأ طلب التأشيرة الآن</Link>
          </Button>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy-200 transition-colors hover:text-gold-400"
          >
            لديك سؤال؟ تصفح الأسئلة الشائعة
            <ArrowLeft className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
