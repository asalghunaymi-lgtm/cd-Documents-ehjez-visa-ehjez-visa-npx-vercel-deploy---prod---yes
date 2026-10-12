"use client";

import Image from "next/image";
import Link from "@/components/i18n/link";
import { useI18n } from "@/lib/i18n/client";
import { cn } from "@/lib/utils";

export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  const { t, locale } = useI18n();
  return (
    <Link href="/" className={cn("flex min-w-0 items-center gap-2 sm:gap-2.5 xl:shrink-0", className)}>
      <span className="relative flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 ring-1 ring-gold-400/40 shadow-sm">
        <Image
          src="/logo.png"
          alt={t.brand.agencyName}
          width={776}
          height={717}
          priority
          className="h-full w-full object-contain"
        />
      </span>
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className={cn("text-[13.5px] sm:text-[17px] font-extrabold leading-tight tracking-normal", dark ? "text-white" : "text-navy-950")}>
          {t.brand.agencyName}
        </span>
        <span
          lang={locale === "ar" ? "en" : "ar"}
          className={cn("truncate text-[9px] sm:text-[10px] font-medium leading-tight tracking-wide", dark ? "text-navy-300" : "text-muted-foreground")}
        >
          {t.brand.agencySubtitle}
        </span>
      </span>
    </Link>
  );
}
