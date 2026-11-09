import type { Locale } from "@/content/types";
import { site } from "@/content/facts";
import { localeInfo } from "./locales";

/** Locale-aware internal path: "/compare/" → "/it/compare/" for Italian. */
export function href(locale: Locale, path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return p;
  return p === "/" ? `/${locale}/` : `/${locale}${p}`;
}

/** Absolute canonical URL on the production domain. */
export function absolute(locale: Locale, path: string): string {
  return `${site.url}${href(locale, path)}`;
}


/** URL of a file in public/ (kept as a function so a base path can be added in one place). */
export const asset = (p: string) => p;

export function formatDate(locale: Locale, iso: string): string {
  return new Intl.DateTimeFormat(localeInfo[locale].tag === "en" ? "en-US" : localeInfo[locale].tag, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

export function formatNumber(locale: Locale, n: number, opts?: Intl.NumberFormatOptions): string {
  return new Intl.NumberFormat(localeInfo[locale].tag === "en" ? "en-US" : localeInfo[locale].tag, opts).format(n);
}
