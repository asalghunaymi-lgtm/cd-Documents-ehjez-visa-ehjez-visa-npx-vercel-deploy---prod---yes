"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useLocale } from "@/lib/i18n/client";
import { localizeHref } from "@/lib/i18n/config";

/**
 * Drop-in replacement for next/link that keeps the visitor in their language:
 * href="/apply" renders as "/apply" in Arabic and "/en/apply" in English.
 */
export default function Link({ href, ...props }: ComponentProps<typeof NextLink>) {
  const locale = useLocale();
  const localized = typeof href === "string" ? localizeHref(href, locale) : href;
  return <NextLink href={localized} {...props} />;
}
