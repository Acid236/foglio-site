import type { MetadataRoute } from "next";
import { alternatives, comparisonChecked, guides } from "@/content";
import { site } from "@/content/facts";
import { locales, type Article, type Locale } from "@/content/types";
import { absolute } from "@/lib/i18n";
import { languageAlternates } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // lastmod: the article's own `updated` date in each language, the release date for the other pages.
  const fixed = (updated: string) => () => updated;
  const article = (list: Record<Locale, Article[]>, slug: string) => (l: Locale) =>
    list[l].find((a) => a.slug === slug)?.updated ?? site.released;
  const lastUpdated = (list: Record<Locale, Article[]>) => (l: Locale) =>
    list[l].reduce<string>((max, a) => (a.updated > max ? a.updated : max), site.released);
  const pages: { path: string; priority: number; updated: (l: Locale) => string }[] = [
    { path: "/", priority: 1, updated: fixed(comparisonChecked > site.released ? comparisonChecked : site.released) },
    { path: "/download/", priority: 0.9, updated: fixed(site.released) },
    { path: "/compare/", priority: 0.9, updated: fixed(comparisonChecked) },
    { path: "/technology/", priority: 0.7, updated: fixed(site.released) },
    { path: "/alternatives/", priority: 0.7, updated: lastUpdated(alternatives) },
    { path: "/guides/", priority: 0.6, updated: lastUpdated(guides) },
    ...alternatives.en.map((a) => ({ path: `/alternatives/${a.slug}/`, priority: 0.8, updated: article(alternatives, a.slug) })),
    ...guides.en.map((a) => ({ path: `/guides/${a.slug}/`, priority: 0.7, updated: article(guides, a.slug) })),
  ];
  return pages.flatMap((p) =>
    locales.map((locale) => ({
      url: absolute(locale, p.path),
      lastModified: p.updated(locale),
      changeFrequency: "monthly" as const,
      priority: locale === "en" ? p.priority : Math.round(p.priority * 90) / 100,
      alternates: { languages: languageAlternates(p.path, true) },
    })),
  );
}
