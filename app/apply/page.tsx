import type { Metadata } from "next";
import { Suspense } from "react";
import { ApplyWizard } from "@/components/wizard/apply-wizard";

export const metadata: Metadata = {
  title: "ابدأ طلب التأشيرة",
  description: "ابدأ طلب تأشيرتك خطوة بخطوة: الجنسية، الدولة، نوع التأشيرة، وبياناتك الشخصية.",
};

export default function ApplyPage() {
  return (
    <div className="bg-navy-50/40 py-10 sm:py-14">
      <div className="container-app">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h1 className="text-2xl font-extrabold text-navy-950 sm:text-3xl">ابدأ طلب التأشيرة</h1>
          <p className="mt-2 text-[14px] text-muted-foreground">
            خطوات بسيطة وواضحة — لن تحتاج أكثر من بضع دقائق لإنشاء طلبك.
          </p>
        </div>
        <Suspense>
          <ApplyWizard />
        </Suspense>
      </div>
    </div>
  );
}
