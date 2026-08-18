import { Clock, Landmark, Wallet, Building2 } from "lucide-react";
import { CountryVisaInfo } from "@/types";
import { formatFeeRange } from "@/lib/format-fee";

export function CountryInfoStrip({ country }: { country: CountryVisaInfo }) {
  const items = [
    { icon: Clock, label: "مدة المعالجة التقريبية", value: country.processingTimeAr },
    { icon: Landmark, label: "الرسوم الحكومية", value: formatFeeRange(country.governmentFeeSAR) },
    { icon: Wallet, label: "رسوم خدمة المنصة", value: `تبدأ من ${formatFeeRange(country.serviceFeeSAR)}` },
    { icon: Building2, label: "مركز التقديم", value: country.applicationCenterAr },
  ];

  return (
    <div className="container-app -mt-8 sm:-mt-10">
      <div className="grid gap-3 rounded-2xl border border-border bg-white p-4 shadow-lg sm:grid-cols-2 sm:p-5 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-3 p-2">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy-50">
              <item.icon className="size-5 text-navy-700" />
            </div>
            <div>
              <div className="text-[11.5px] font-medium text-muted-foreground">{item.label}</div>
              <div className="text-[13.5px] font-bold leading-tight text-navy-900">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
