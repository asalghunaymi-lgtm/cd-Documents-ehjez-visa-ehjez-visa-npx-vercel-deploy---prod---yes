import { NextResponse, type NextRequest } from "next/server";
import {
  EN_PREFIX,
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE,
  LOCALE_HEADER,
  PATHNAME_HEADER,
  localeFromPathname,
  stripLocale,
} from "@/lib/i18n/config";

// Language routing — توجيه اللغة
//
// • /visa/france        → Arabic (default, unchanged URLs)
// • /en/visa/france     → English; rewritten internally to the same /visa/france page
//
// The proxy only passes the language to the page through a request header and
// remembers it in a cookie. It never touches forms, WhatsApp links, data or APIs.
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const locale = localeFromPathname(pathname);
  const savedLocale = request.cookies.get(LOCALE_COOKIE)?.value;

  // A returning visitor who chose English lands on an Arabic URL (e.g. typed the
  // domain directly): send them to the English version once. Only full page loads
  // are redirected — client-side navigations and prefetches are left alone.
  const isPageLoad =
    request.method === "GET" &&
    !request.headers.has("rsc") &&
    !request.headers.has("next-router-prefetch") &&
    request.headers.get("sec-fetch-dest") !== "empty";

  if (locale === "ar" && savedLocale === "en" && isPageLoad) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? EN_PREFIX : `${EN_PREFIX}${pathname}`;
    return NextResponse.redirect(url);
  }

  const internalPath = stripLocale(pathname);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, locale);
  requestHeaders.set(PATHNAME_HEADER, internalPath);

  const response =
    locale === "en"
      ? NextResponse.rewrite(new URL(`${internalPath}${search}`, request.url), {
          request: { headers: requestHeaders },
        })
      : NextResponse.next({ request: { headers: requestHeaders } });

  // Visiting an /en URL directly (shared link, search result) also remembers English.
  if (locale === "en" && savedLocale !== "en") {
    response.cookies.set(LOCALE_COOKIE, "en", {
      path: "/",
      maxAge: LOCALE_COOKIE_MAX_AGE,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: [
    // Everything except Next internals, API routes and files with an extension
    // (images, icons, sitemap.xml, robots.txt…).
    "/((?!_next/|api/|.*\\.[^/]+$).*)",
  ],
};
