import type { Locale } from "../config";
import { ar, type Dictionary } from "./ar";
import { en } from "./en";

const DICTIONARIES: Record<Locale, Dictionary> = { ar, en };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

export type { Dictionary };
