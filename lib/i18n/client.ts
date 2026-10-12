"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { getDirection, localeFromPathname, localizeHref, type Locale } from "./config";
import { getDictionary } from "./dictionaries";

/** Current language, read from the address bar (/en/... = English). */
export function useLocale(): Locale {
  return localeFromPathname(usePathname());
}

/** Translations and helpers for client components. */
export function useI18n() {
  const locale = useLocale();
  return React.useMemo(
    () => ({
      locale,
      dir: getDirection(locale),
      t: getDictionary(locale),
      /** Localizes an internal link, e.g. href("/apply") → "/en/apply" in English. */
      href: (path: string) => localizeHref(path, locale),
    }),
    [locale]
  );
}

/** next/navigation router whose push/replace keep the visitor in their language. */
export function useLocalizedRouter() {
  const router = useRouter();
  const locale = useLocale();
  return React.useMemo(
    () => ({
      ...router,
      push: (href: string, options?: Parameters<typeof router.push>[1]) =>
        router.push(localizeHref(href, locale), options),
      replace: (href: string, options?: Parameters<typeof router.replace>[1]) =>
        router.replace(localizeHref(href, locale), options),
    }),
    [router, locale]
  );
}
