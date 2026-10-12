import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatSAR(amount: number, locale: "ar" | "en" = "ar") {
  return new Intl.NumberFormat(locale === "en" ? "en-SA" : "ar-SA", {
    style: "currency",
    currency: "SAR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Formats a date for display — Arabic by default, or English (e.g. "1 August 2026"). */
export function formatArabicDate(date: string | Date, locale: "ar" | "en" = "ar") {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "ar-SA-u-nu-latn", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}
