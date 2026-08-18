"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, ClipboardList, FileText, Globe, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/logo";

export const ADMIN_NAV = [
  { href: "/admin", label: "نظرة عامة", icon: LayoutDashboard, exact: true },
  { href: "/admin/customers", label: "العملاء", icon: Users },
  { href: "/admin/applications", label: "الطلبات", icon: ClipboardList },
  { href: "/admin/documents", label: "المستندات", icon: FileText },
  { href: "/admin/countries", label: "الدول والتأشيرات", icon: Globe },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-e border-border bg-white lg:block">
      <div className="border-b border-border p-5">
        <Logo />
        <span className="mt-2 inline-block rounded-full bg-navy-50 px-2.5 py-0.5 text-[11px] font-bold text-navy-700">
          لوحة التحكم
        </span>
      </div>
      <nav className="space-y-1 p-3">
        {ADMIN_NAV.map((item) => {
          const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
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
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-3">
        <Link href="/" className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-navy-500 hover:bg-navy-50">
          <ArrowRight className="size-4" />
          العودة للموقع
        </Link>
      </div>
    </aside>
  );
}
