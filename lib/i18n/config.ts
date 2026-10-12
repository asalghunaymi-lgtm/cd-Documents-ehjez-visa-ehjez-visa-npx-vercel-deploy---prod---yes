// إعدادات اللغات — Language configuration shared by the proxy, the server and the client.
//
// Arabic is the default language and keeps every existing URL exactly as it was
// (e.g. /visa/france). English lives under the /en prefix (e.g. /en/visa/france).
// The proxy (proxy.ts) rewrites /en/* to the same page files internally, so no
// page or route was moved or duplicated to add English.

export const LOCALES = ["ar", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "ar";

/** Cookie that remembers the visitor's chosen language across pages and visits. */
export const LOCALE_COOKIE = "NEXT_LOCALE";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // one year

/** Request header the proxy uses to tell server components which language to render. */
export const LOCALE_HEADER = "x-locale";
/** Request header carrying the locale-free pathname (used for hreflang / canonical tags). */
export const PATHNAME_HEADER = "x-pathname";

export const EN_PREFIX = "/en";

export function isLocale(value: unknown): value is Locale {
  return value === "ar" || value === "en";
}

export function getDirection(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

/** Locale implied by a browser pathname such as "/en/visa" → "en", "/visa" → "ar". */
export function localeFromPathname(pathname: string | null | undefined): Locale {
  if (!pathname) return DEFAULT_LOCALE;
  return pathname === EN_PREFIX || pathname.startsWith(`${EN_PREFIX}/`) ? "en" : "ar";
}

/** Removes the /en prefix: "/en/visa/uk" → "/visa/uk", "/en" → "/". */
export function stripLocale(pathname: string): string {
  if (pathname === EN_PREFIX) return "/";
  if (pathname.startsWith(`${EN_PREFIX}/`)) return pathname.slice(EN_PREFIX.length) || "/";
  return pathname || "/";
}

/**
 * Builds the URL of an internal link for the given language.
 * External links, mailto/tel and hash-only links are returned unchanged.
 */
export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;

  // Split off ?query and #hash so they are preserved as-is.
  const match = href.match(/^([^?#]*)(.*)$/);
  const path = stripLocale(match?.[1] || "/");
  const rest = match?.[2] ?? "";

  if (locale === "ar") return `${path}${rest}`;
  return `${path === "/" ? EN_PREFIX : `${EN_PREFIX}${path}`}${rest}`;
}
