"use client";

import Link from "@/components/i18n/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ADMIN_NAV, isAdminNavActive } from "./admin-sidebar";
import { useI18n } from "@/lib/i18n/client";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";

export function AdminMobileNav() {
  const pathname = usePathname();
  const { t } = useI18n();

  return (
    <div className="sticky top-0 z-30 -mx-5 mb-5 overflow-x-auto border-b border-border bg-white px-5 py-2.5 lg:hidden">
      <div className="flex w-max gap-2">
        {ADMIN_NAV.map((item) => {
          const active = isAdminNavActive(pathname, item);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold transition-colors",
                active ? "bg-navy-900 text-white" : "bg-navy-50 text-navy-700"
              )}
            >
              <item.icon className="size-3.5" />
              {t.admin.nav[item.key]}
            </Link>
          );
        })}
        <LanguageSwitcher className="h-8 shrink-0 rounded-full px-3 text-[12.5px]" />
      </div>
    </div>
  );
}
