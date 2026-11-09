import type { Metadata } from "next";
import { locales, type Locale, type Meta } from "@/content/types";
import { site } from "@/content/facts";
import { absolute, href } from "./i18n";
import { localeInfo } from "./locales";

/** hreflang alternates of one path in every language, plus x-default (English). */
export function languageAlternates(path: string, abs = false): Record<string, string> {
  const url = abs ? absolute : href;
  const out: Record<string, string> = {};
  for (const l of locales) out[localeInfo[l].tag] = url(l, path);
  out["x-default"] = url("en", path);
  return out;
}

/** Page metadata with canonical URL, hreflang alternates and Open Graph / Twitter cards. */
export function pageMetadata(locale: Locale, path: string, meta: Meta, type: "website" | "article" = "website"): Metadata {
  const url = absolute(locale, path);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: href(locale, path),
      languages: languageAlternates(path),
    },
    openGraph: {
      type,
      url,
      siteName: site.name,
      title: meta.ogTitle ?? meta.title,
      description: meta.description,
      locale: localeInfo[locale].og,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeInfo[l].og),
      images: [{ url: `/og-${locale}.png`, width: 1200, height: 630, alt: meta.ogTitle ?? meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.ogTitle ?? meta.title,
      description: meta.description,
      images: [`/og-${locale}.png`],
    },
  };
}
