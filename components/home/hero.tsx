import Link from "next/link";
import { ShieldCheck, FileCheck2, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmartSearch } from "./smart-search";
import { LandmarksWatermark } from "./landmarks-watermark";

const TRUST_POINTS = [
  { icon: FileCheck2, label: "مراجعة أولية للمستندات" },
  { icon: ShieldCheck, label: "بياناتك محمية بمعايير عالية" },
  { icon: CalendarCheck, label: "توجيه مباشر للحجز الرسمي" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <LandmarksWatermark className="pointer-events-none absolute inset-0 h-full w-full text-navy-900 opacity-[0.05]" />

      <div className="container-app relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-300/60 bg-accent px-4 py-1.5 text-xs font-semibold text-navy-800">
            نرتب لك طريق التأشيرة… وأنت خطط لرحلتك
          </span>

          <h1 className="text-3xl font-extrabold leading-[1.25] text-navy-950 sm:text-4xl lg:text-5xl">
            تأشيرتك <span className="text-gold-600">تبدأ من هنا</span>
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-8 text-muted-foreground sm:text-base">
            اختر وجهتك، ارفع مستنداتك، ودعنا نساعدك في تجهيز طلب التأشيرة وحجز الموعد لدى القنوات الرسمية.
          </p>

          <div className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="default" className="w-full sm:w-auto">
              <Link href="/apply">ابدأ طلب التأشيرة</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="/visa">اعرف متطلبات التأشيرة</Link>
            </Button>
          </div>

          <div className="mt-10 w-full">
            <SmartSearch />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {TRUST_POINTS.map((p) => (
              <div key={p.label} className="flex items-center gap-2 text-[13px] font-medium text-navy-700">
                <p.icon className="size-4 text-gold-600" />
                {p.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
