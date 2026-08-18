"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, UserRound } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-white/90 backdrop-blur-md">
      <div className="container-app flex h-[4.5rem] items-center justify-between py-3">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <Link href="/login">
              <UserRound className="size-4" />
              ملفي
            </Link>
          </Button>
          <Button asChild variant="default" size="default">
            <Link href="/apply">ابدأ طلب التأشيرة</Link>
          </Button>
        </div>

        <button
          className="flex size-10 items-center justify-center rounded-lg text-navy-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="فتح القائمة"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-white transition-all duration-300 lg:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0"
        )}
      >
        <div className="container-app flex flex-col gap-1 py-3">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-navy-800 hover:bg-navy-50"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <Button asChild variant="outline" onClick={() => setOpen(false)}>
              <Link href="/login">
                <UserRound className="size-4" />
                ملفي
              </Link>
            </Button>
            <Button asChild variant="default" onClick={() => setOpen(false)}>
              <Link href="/apply">ابدأ طلب التأشيرة</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
