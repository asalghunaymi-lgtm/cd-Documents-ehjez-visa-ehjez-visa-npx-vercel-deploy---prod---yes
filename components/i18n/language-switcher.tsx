"use client";

import { useRouter } from "next/navigation";
import { Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n/client";
import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE, localizeHref, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

/**
 * Language toggle — shows "English" on Arabic pages and "العربية" on English pages.
 * Switching is a client-side navigation to the same page in the other language,
 * so anything already typed into a form on the page is kept.
 */
export function LanguageSwitcher({ className, onSwitch }: { className?: string; onSwitch?: () => void }) {
  const router = useRouter();
  const { locale, t } = useI18n();
  const target: Locale = locale === "ar" ? "en" : "ar";

  function switchLanguage() {
    // Remember the choice for future pages and visits.
    document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; samesite=lax`;
    const { pathname, search, hash } = window.location;
    router.push(localizeHref(`${pathname}${search}${hash}`, target), { scroll: false });
    onSwitch?.();
  }

  return (
    <button
      type="button"
      onClick={switchLanguage}
      lang={target}
      aria-label={t.languageSwitch.ariaLabel}
      className={cn(
        "inline-flex h-9 items-center gap-1.5 rounded-md border border-navy-200 px-3 text-sm font-bold text-navy-800 transition-colors hover:border-navy-400 hover:bg-navy-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500",
        className
      )}
    >
      <Languages className="size-4 shrink-0" aria-hidden />
      {t.languageSwitch.label}
    </button>
  );
}
