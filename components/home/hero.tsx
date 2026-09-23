import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionKicker } from "@/components/ui/section-kicker";
import { SmartSearch } from "./smart-search";
import { RoutePanel } from "./route-panel";

const HIGHLIGHTS = [
  { value: "+12", label: "دولة ووجهة مغطاة" },
  { value: "100%", label: "عربي من الطلب للمتابعة" },
  { value: "24/7", label: "متابعة حالة الطلب" },
];

export function Hero() {
  return (
    <section className="border-b border-border bg-background">
      <div className="container-app grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-20">
        <div>
          <SectionKicker>خدمة تأشيرات سعودية</SectionKicker>

          <h1 className="max-w-xl text-[2rem] font-extrabold leading-[1.2] text-navy-950 sm:text-4xl lg:text-[2.75rem]">
            تأشيرتك <span className="text-gold-600">تبدأ من هنا</span>
          </h1>

          <p className="mt-5 max-w-md text-[15.5px] leading-8 text-muted-foreground">
            اختر وجهتك، ارفع مستنداتك، ودعنا نساعدك في تجهيز طلب التأشيرة وحجز الموعد لدى القنوات الرسمية — بلغة
            واضحة وخطوات محددة من البداية للنهاية.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button asChild size="lg" variant="default">
              <Link href="/apply">ابدأ طلب التأشيرة</Link>
            </Button>
            <Link
              href="/visa"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy-800 transition-colors hover:text-gold-700"
            >
              اعرف متطلبات التأشيرة
              <ArrowLeft className="size-4" />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-6">
            {HIGHLIGHTS.map((p) => (
              <div key={p.label}>
                <div className="text-xl font-extrabold text-navy-950">{p.value}</div>
                <div className="text-[12.5px] text-muted-foreground">{p.label}</div>
              </div>
            ))}
          </div>
        </div>

        <RoutePanel />
      </div>

      <div className="container-app pb-14 sm:pb-16 lg:pb-20">
        <SmartSearch />
      </div>
    </section>
  );
}
