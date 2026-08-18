import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRICING_PLANS } from "@/lib/data/pricing";
import { cn, formatSAR } from "@/lib/utils";

export const metadata: Metadata = {
  title: "خدماتنا",
  description: "تعرّف على أسعار خدمات احجز تأشيرتك: تعبئة النموذج، مراجعة المستندات، تجهيز الطلب، وحجز الموعد.",
};

export default function PricingPage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="container-app">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h1 className="text-2xl font-extrabold text-navy-950 sm:text-3xl">خدماتنا</h1>
          <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
            أسعار واضحة لكل خدمة، منفصلة تمامًا عن الرسوم الحكومية التي تُدفع مباشرة للجهة الرسمية.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <Card
              key={plan.key}
              className={cn("relative flex flex-col", plan.highlighted && "border-gold-300 ring-2 ring-gold-200")}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 start-6 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-bold text-navy-950">
                  الأكثر طلبًا
                </span>
              )}
              <CardContent className="flex flex-1 flex-col p-6">
                <h3 className="text-[15px] font-bold text-navy-900">{plan.titleAr}</h3>
                <p className="mt-2 text-[13px] leading-6 text-muted-foreground">{plan.descriptionAr}</p>
                <div className="my-5">
                  {plan.fromPriceSAR > 0 ? (
                    <div className="text-2xl font-extrabold text-navy-950">
                      {formatSAR(plan.fromPriceSAR)}
                      <span className="text-sm font-medium text-muted-foreground"> ابتداءً من</span>
                    </div>
                  ) : (
                    <div className="text-2xl font-extrabold text-navy-950">سعر خاص</div>
                  )}
                </div>
                <ul className="mb-6 flex-1 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-navy-700">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={plan.highlighted ? "gold" : "outline"}>
                  <Link href="/apply">ابدأ الآن</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-center text-[13px] text-muted-foreground">
          الرسوم الحكومية للسفارات والقنصليات منفصلة تمامًا عن رسوم خدمة المنصة، وتُعرض بوضوح قبل أي عملية دفع.
        </p>
      </div>
    </div>
  );
}
