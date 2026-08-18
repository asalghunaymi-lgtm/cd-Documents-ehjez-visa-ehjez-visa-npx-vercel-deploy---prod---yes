import { ShieldAlert } from "lucide-react";
import { siteConfig } from "@/config/site";

export function DisclaimerBanner() {
  return (
    <div className="bg-navy-950 text-navy-100">
      <div className="container-app flex items-center gap-2.5 py-2 text-[12.5px] leading-relaxed sm:text-[13px]">
        <ShieldAlert className="size-4 shrink-0 text-gold-400" />
        <p>{siteConfig.disclaimer}</p>
      </div>
    </div>
  );
}
