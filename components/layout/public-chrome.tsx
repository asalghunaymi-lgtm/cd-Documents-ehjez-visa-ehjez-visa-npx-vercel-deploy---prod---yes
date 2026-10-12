"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { DisclaimerBanner } from "./disclaimer-banner";
import { WhatsappButton } from "./whatsapp-button";
import { stripLocale } from "@/lib/i18n/config";

export function PublicChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = stripLocale(pathname ?? "/").startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <DisclaimerBanner />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <WhatsappButton />
    </>
  );
}
