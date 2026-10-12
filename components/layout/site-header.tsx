"use client";

import * as React from "react";
import Link from "@/components/i18n/link";
import { Menu, X, UserRound } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/client";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white">
      <div className="container-app flex h-20 items-center justify-between gap-3 py-3">
        <Logo />

        <nav className="hidden items-center gap-1 xl:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative whitespace-nowrap px-4 py-2 text-sm font-semibold text-navy-700 transition-colors after:absolute after:inset-x-4 after:bottom-1 after:h-[2px] after:scale-x-0 after:bg-gold-500 after:transition-transform after:content-[''] hover:text-navy-950 hover:after:scale-x-100"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <LanguageSwitcher />
          <Button asChild variant="ghost" size="sm">
            <Link href="/login">
              <UserRound className="size-4" />
              {t.nav.myFile}
            </Link>
          </Button>
          <Button asChild variant="default" size="default">
            <Link href="/apply" className="whitespace-nowrap">{t.nav.startApplicationShort}</Link>
          </Button>
        </div>

        <div className="flex shrink-0 items-center gap-1 xl:hidden">
          <LanguageSwitcher className="px-2" onSwitch={() => setOpen(false)} />
          <button
            className="flex size-10 items-center justify-center rounded-lg text-navy-900"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-white transition-all duration-300 xl:hidden",
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
              {t.nav[item.key]}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <Button asChild variant="outline" onClick={() => setOpen(false)}>
              <Link href="/login">
                <UserRound className="size-4" />
                {t.nav.myFile}
              </Link>
            </Button>
            <Button asChild variant="default" onClick={() => setOpen(false)}>
              <Link href="/apply">{t.nav.startApplication}</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
