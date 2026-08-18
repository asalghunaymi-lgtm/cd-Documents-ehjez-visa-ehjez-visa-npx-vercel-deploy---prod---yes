"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ADMIN_NAV } from "./admin-sidebar";

export function AdminMobileNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-30 -mx-5 mb-5 overflow-x-auto border-b border-border bg-white px-5 py-2.5 lg:hidden">
      <div className="flex w-max gap-2">
        {ADMIN_NAV.map((item) => {
          const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
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
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
