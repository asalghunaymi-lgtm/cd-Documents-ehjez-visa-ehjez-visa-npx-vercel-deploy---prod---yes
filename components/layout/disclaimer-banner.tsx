"use client";

import { ShieldAlert } from "lucide-react";
import { useI18n } from "@/lib/i18n/client";

export function DisclaimerBanner() {
  const { t } = useI18n();
  return (
    <div className="bg-navy-950 text-navy-100">
      <div className="container-app flex items-center gap-2.5 py-2 text-[12.5px] leading-relaxed sm:text-[13px]">
        <ShieldAlert className="size-4 shrink-0 text-gold-400" />
        <p>{t.disclaimer}</p>
      </div>
    </div>
  );
}
