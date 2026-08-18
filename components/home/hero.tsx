import Link from "next/link";
import { ShieldCheck, FileCheck2, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmartSearch } from "./smart-search";

const TRUST_POINTS = [
  { icon: FileCheck2, label: "مراجعة أولية للمستندات" },
  { icon: ShieldCheck, label: "بياناتك محمية بمعايير عالية" },
  { icon: CalendarCheck, label: "توجيه مباشر للحجز الرسمي" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-gold-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 size-96 rounded-full bg-navy-500/30 blur-3xl" />

      <div className="container-app relative py-16 sm:py-20 lg:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-white/5 px-4 py-1.5 text-xs font-semibold text-gold-300">
            نرتب لك طريق التأشيرة… وأنت خطط لرحلتك
          </span>

          <h1 className="text-3xl font-extrabold leading-[1.25] text-white sm:text-4xl lg:text-5xl">
            تأشيرتك <span className="text-gradient-gold">تبدأ من هنا</span>
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-8 text-navy-100 sm:text-base">
            اختر وجهتك، ارفع مستنداتك، ودعنا نساعدك في تجهيز طلب التأشيرة وحجز الموعد لدى القنوات الرسمية.
          </p>

          <div className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="gold" className="w-full sm:w-auto">
              <Link href="/apply">ابدأ طلب التأشيرة</Link>
            </Button>
            <Button asChild size="lg" variant="white" className="w-full sm:w-auto">
              <Link href="/visa">اعرف متطلبات التأشيرة</Link>
            </Button>
          </div>

          <div className="mt-10 w-full">
            <SmartSearch />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {TRUST_POINTS.map((p) => (
              <div key={p.label} className="flex items-center gap-2 text-[13px] font-medium text-navy-200">
                <p.icon className="size-4 text-gold-400" />
                {p.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
