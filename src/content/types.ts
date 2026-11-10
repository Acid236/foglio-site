/**
 * Content model for the Foglio website.
 *
 * Every string may use a tiny inline markup that the site renders:
 *   **bold**, *italic*, `code`, [link text](/internal/path/) or [link text](https://external.example)
 * Internal links are written WITHOUT the locale prefix (e.g. "/compare/"); the site adds "/it" itself.
 * No other Markdown, no HTML.
 */

/** Languages written by hand in the source files (comparison rows carry both inline). */
export type BaseLocale = "en" | "it";
/** All site languages. English is the default (served at "/"), the others under "/<code>/". */
export type Locale = BaseLocale | "es" | "fr" | "de" | "pt";
export const locales: Locale[] = ["en", "it", "es", "fr", "de", "pt"];

/** <title> (≤ 60 characters, the site appends nothing) and meta description (120–155 characters). */
export interface Meta {
  title: string;
  description: string;
  /** Open Graph title, if different from `title`. */
  ogTitle?: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Section {
  /** Rendered as <h2>. */
  heading: string;
  /** Paragraphs. */
  body: string[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[];
  /** Optional <h3> sub-sections. */
  sub?: { heading: string; body: string[]; bullets?: string[] }[];
}

/** A long-form page: an "alternative to X" landing page or a how-to guide. */
export interface Article {
  /** URL slug, identical in both locales (e.g. "excel-for-mac"). */
  slug: string;
  meta: Meta;
  /** The page's single <h1>. */
  h1: string;
  /** Lead paragraph(s) shown under the h1. */
  intro: string[];
  sections: Section[];
  /** Rendered as an FAQ block + FAQPage JSON-LD. */
  faq?: FAQ[];
  /** ISO date (YYYY-MM-DD) of the last content update. */
  updated: string;
  /** Short label used in cards and navigation (≤ 40 characters). */
  cardTitle: string;
  /** One-sentence teaser used in cards (≤ 140 characters). */
  cardText: string;
}

export interface Feature {
  /** Icon name; one of the keys in src/components/Icon.tsx. */
  icon: "bolt" | "feather" | "gift" | "file" | "function" | "chart" | "globe" | "lock" | "apple" | "code" | "image" | "filter";
  title: string;
  text: string;
}

export interface Step {
  title: string;
  text: string;
}

export interface SiteCopy {
  /** Navigation and shared UI labels. */
  ui: {
    navCompare: string;
    navTechnology: string;
    navAlternatives: string;
    navGuides: string;
    navDownload: string;
    download: string; // primary button, e.g. "Download for Mac"
    downloadSub: string; // under the button, e.g. "Free · macOS 14+ · Apple silicon & Intel · 7.5 MB"
    starOnGitHub: string; // secondary button, links to the repository: "Star on GitHub"
    readMore: string;
    faqTitle: string;
    updated: string; // "Updated" (followed by a date)
    languageLabel: string; // "Language", label of the language picker
    sources: string; // "Sources" (comparison table)
    allReleases: string; // "All releases and checksums"
    smallerIsBetter: string; // "smaller is better" (bar chart)
    lookupTitle: string; // "1,000 VLOOKUPs over 10,000 rows" (use the function's local name)
    /** Under the lookup metric; {before} = seconds in the original engine, {times} = speed-up. */
    lookupSub: string;
    tested: string; // "Tested on a Mac with an M4 processor, macOS 27."
    opens: string; // "Opens" (before the list of file formats)
    /** Architecture diagram: [app layer text, core title, core text, aria label]. */
    arch: [string, string, string, string];
    skipToContent: string;
    footerTagline: string;
    footerLicense: string;
    footerTrademark: string; // "Excel is a trademark of Microsoft…; Foglio is not affiliated…"
    notFoundTitle: string;
    notFoundText: string;
    backHome: string;
    yes: string;
    no: string;
    partial: string;
    home: string; // accessible name of the logo link, e.g. "Foglio home page"
    menu: string; // accessible name of the mobile menu button
    openSource: string; // footer column title
    releases: string; // footer link to GitHub releases
    issues: string; // footer link to GitHub issues
    moreGuides: string; // heading of the related-guides block
    moreAlternatives: string; // heading of the related-alternatives block
    /** Alt text of the app screenshot: what it shows, not the page headline. */
    screenshotAlt: string;
  };

  meta: {
    home: Meta;
    compare: Meta;
    technology: Meta;
    download: Meta;
    alternatives: Meta; // index page of /alternatives/
    guides: Meta; // index page of /guides/
  };

  home: {
    eyebrow: string; // small line above the h1
    h1: string;
    subtitle: string;
    /** Three to four short trust points under the buttons. */
    badges: string[];
    /** Labels for the measured numbers shown in the stats strip (values come from facts.ts). */
    statLabels: {
      download: string;
      launch: string;
      memory: string;
      open100k: string;
      recalc: string;
      price: string;
    };
    featuresTitle: string;
    featuresIntro: string;
    features: Feature[]; // 6 to 9
    speedTitle: string;
    speedIntro: string;
    /** Caption under the bar charts, must say how/where it was measured. */
    speedNote: string;
    freeTitle: string;
    freeText: string[];
    compareTitle: string;
    compareText: string;
    techTitle: string;
    techText: string;
    formatsTitle: string;
    formatsText: string;
    alternativesTitle: string;
    alternativesText: string;
    ctaTitle: string;
    ctaText: string;
    faq: FAQ[]; // 6 to 10, also used for FAQPage JSON-LD
  };

  compare: {
    h1: string;
    intro: string[];
    /** Table headings. */
    tableTitle: string;
    tableNote: string; // how the figures were gathered, with date
    sections: Section[];
    faq: FAQ[];
  };

  technology: {
    h1: string;
    intro: string[];
    sections: Section[];
    faq?: FAQ[];
  };

  download: {
    h1: string;
    intro: string[];
    steps: Step[]; // install steps
    gatekeeperTitle: string;
    gatekeeperText: string[]; // the "unidentified developer" / Open Anyway explanation
    requirementsTitle: string;
    requirements: string[];
    sourceTitle: string;
    sourceText: string[];
    faq: FAQ[];
  };

  /** What Foglio is (and is not) trying to be. Shown on the home and above the comparison table. */
  positioning: {
    title: string;
    text: string[];
    points: { title: string; text: string }[];
  };

  alternativesIndex: { h1: string; intro: string[] };
  guidesIndex: { h1: string; intro: string[] };
}

/** One row of the big comparison table, as written in comparison.ts (English + Italian). */
export interface RawComparisonRow {
  label: Record<BaseLocale, string>;
  /** Group heading the row belongs to (rows are grouped in the order they appear). */
  group: Record<BaseLocale, string>;
  cells: Record<AppId, RawComparisonCell>;
}

export interface RawComparisonCell {
  /** Text shown in the cell. A plain string is the same in every language (e.g. "MPL-2.0"). */
  text: string | Record<BaseLocale, string>;
  tone: ComparisonCell["tone"];
}

/** A comparison row with every language filled in (see content/comparison-i18n.ts). */
export interface ComparisonRow {
  label: Record<Locale, string>;
  group: Record<Locale, string>;
  cells: Record<AppId, ComparisonCell>;
}

/**
 * Translations of the comparison table for the languages that are not written inline:
 * English source text (row labels, group names, cell texts) → translated text.
 */
export type ComparisonDictionary = Record<string, string>;

export type AppId = "foglio" | "excel" | "numbers" | "libreoffice" | "sheets";

export interface ComparisonCell {
  /** Text shown in the cell. A plain string is the same in every language. */
  text: string | Record<Locale, string>;
  /** Colours the cell: good = green check, bad = red cross, partial = amber, neutral = plain. */
  tone: "good" | "bad" | "partial" | "neutral";
}

export interface ComparisonSource {
  label: string;
  url: string;
}
