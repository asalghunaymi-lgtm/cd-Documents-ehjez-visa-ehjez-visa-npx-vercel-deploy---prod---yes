import type { Metadata } from "next";
import Link from "next/link";
import { COUNTRIES } from "@/lib/data/countries";
import { CountryCard } from "@/components/home/country-card";

export const metadata: Metadata = {
  title: "الدول والتأشيرات",
  description: "تصفح جميع الدول المتاحة ومتطلبات التأشيرة لكل دولة من منصة احجز تأشيرتك.",
};

export default function VisaIndexPage() {
  return (
    <div className="container-app py-12 sm:py-16">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h1 className="text-2xl font-extrabold text-navy-950 sm:text-3xl">الدول والتأشيرات</h1>
        <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
          اختر دولتك لمعرفة أنواع التأشيرات والمتطلبات والمستندات والرسوم وخطوات التقديم بالكامل.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {COUNTRIES.map((c) => (
          <CountryCard key={c.slug} country={c} />
        ))}
      </div>

      <div className="mt-10 text-center text-sm text-muted-foreground">
        لم تجد وجهتك؟{" "}
        <Link href="/faq" className="font-semibold text-navy-800 underline">
          تواصل معنا
        </Link>{" "}
        وسنساعدك.
      </div>
    </div>
  );
}
