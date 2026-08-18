import type { Metadata } from "next";
import { DocumentChecklist } from "@/components/documents/document-checklist";

export const metadata: Metadata = {
  title: "ارفع مستنداتك",
  description: "ارفع مستنداتك بسهولة من جوالك أو حاسوبك، وتابع حالة كل مستند خطوة بخطوة.",
};

export default function DocumentsPage() {
  return (
    <div className="bg-navy-50/40 py-10 sm:py-14">
      <div className="container-app max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-extrabold text-navy-950 sm:text-3xl">ارفع مستنداتك</h1>
          <p className="mt-2 text-[14px] text-muted-foreground">
            القائمة أدناه تشمل المستندات الأساسية المطلوبة غالبًا. قد تختلف القائمة الدقيقة حسب الدولة ونوع التأشيرة
            بعد ربطها بطلبك.
          </p>
        </div>
        <DocumentChecklist />
      </div>
    </div>
  );
}
