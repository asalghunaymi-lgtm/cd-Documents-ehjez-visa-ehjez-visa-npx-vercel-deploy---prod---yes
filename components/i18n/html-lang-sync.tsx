"use client";

import * as React from "react";
import { useLocale } from "@/lib/i18n/client";
import { getDirection } from "@/lib/i18n/config";

/**
 * Keeps <html lang dir> in step with the current language after client-side
 * language switches (the root layout itself is not re-rendered on navigation).
 */
export function HtmlLangSync() {
  const locale = useLocale();
  React.useLayoutEffect(() => {
    const html = document.documentElement;
    html.lang = locale;
    html.dir = getDirection(locale);
  }, [locale]);
  return null;
}
