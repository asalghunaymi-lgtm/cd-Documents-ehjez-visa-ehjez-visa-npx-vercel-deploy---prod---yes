"use client";

import Link from "@/components/i18n/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, ClipboardList, FileText, Globe, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/logo";
import { useI18n } from "@/lib/i18n/client";
import { stripLocale } from "@/lib/i18n/config";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";

export const ADMIN_NAV = [
  { href: "/admin", key: "overview", icon: LayoutDashboard, exact: true },
  { href: "/admin/customers", key: "customers", icon: Users },
  { href: "/admin/applications", key: "applications", icon: ClipboardList },
  { href: "/admin/documents", key: "documents", icon: FileText },
  { href: "/admin/countries", key: "countries", icon: Globe },
] as const;

/** Is the nav item active? Works for both /admin/... and /en/admin/... */
export function isAdminNavActive(pathname: string, item: { href: string; exact?: boolean }) {
  const path = stripLocale(pathname);
  return "exact" in item && item.exact ? path === item.href : path.startsWith(item.href);
}

export function AdminSidebar() {
  const pathname = usePathname();
  const { t } = useI18n();

  return (
    <aside className="hidden w-64 shrink-0 border-e border-border bg-white lg:block">
      <div className="border-b border-border p-5">
        <Logo />
        <span className="mt-2 inline-block rounded-full bg-navy-50 px-2.5 py-0.5 text-[11px] font-bold text-navy-700">
          {t.admin.badge}
        </span>
      </div>
      <nav className="space-y-1 p-3">
        {ADMIN_NAV.map((item) => {
          const active = isAdminNavActive(pathname, item);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors",
                active ? "bg-navy-900 text-white" : "text-navy-700 hover:bg-navy-50"
              )}
            >
              <item.icon className="size-4" />
              {t.admin.nav[item.key]}
            </Link>
          );
        })}
      </nav>
      <div className="space-y-2 p-3">
        <Link href="/" className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-navy-500 hover:bg-navy-50">
          <ArrowRight className="size-4 ltr:-scale-x-100" />
          {t.admin.backToSite}
        </Link>
        <LanguageSwitcher className="ms-3" />
      </div>
    </aside>
  );
}
