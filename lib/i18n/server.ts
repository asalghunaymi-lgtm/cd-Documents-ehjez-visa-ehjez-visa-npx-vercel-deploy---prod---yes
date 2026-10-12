import { headers } from "next/headers";
import type { Metadata } from "next";
import {
  DEFAULT_LOCALE,
  LOCALE_HEADER,
  PATHNAME_HEADER,
  getDirection,
  isLocale,
  localizeHref,
  type Locale,
} from "./config";
import { getDictionary } from "./dictionaries";

/** Language of the current request, as set by proxy.ts. */
export async function getLocale(): Promise<Locale> {
  const value = (await headers()).get(LOCALE_HEADER);
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

/** Locale-free pathname of the current request (e.g. "/visa/uk"). */
export async function getPathname(): Promise<string> {
  return (await headers()).get(PATHNAME_HEADER) || "/";
}

/** Translations and helpers for server components and generateMetadata. */
export async function getI18n() {
  const locale = await getLocale();
  return {
    locale,
    dir: getDirection(locale),
    t: getDictionary(locale),
    href: (path: string) => localizeHref(path, locale),
  };
}

/**
 * canonical + hreflang links for a page, so search engines index the Arabic and
 * English versions as language alternates of each other.
 */
export function languageAlternates(path: string, locale: Locale): Metadata["alternates"] {
  return {
    canonical: localizeHref(path, locale),
    languages: {
      ar: localizeHref(path, "ar"),
      en: localizeHref(path, "en"),
      "x-default": localizeHref(path, "ar"),
    },
  };
}
