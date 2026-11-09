import { rawComparisonRows } from "./comparison";
import { comparison as de } from "./de/comparison";
import { comparison as es } from "./es/comparison";
import { comparison as fr } from "./fr/comparison";
import { comparison as pt } from "./pt/comparison";
import type { BaseLocale, ComparisonDictionary, ComparisonRow, Locale } from "./types";

const dictionaries: Record<Exclude<Locale, BaseLocale>, ComparisonDictionary> = { es, fr, de, pt };

const missing: string[] = [];

function expand(text: Record<BaseLocale, string>): Record<Locale, string> {
  const out = { ...text } as Record<Locale, string>;
  for (const [locale, dict] of Object.entries(dictionaries) as [Exclude<Locale, BaseLocale>, ComparisonDictionary][]) {
    const t = dict[text.en];
    if (t === undefined) missing.push(`${locale}: ${JSON.stringify(text.en)}`);
    out[locale] = t ?? text.en;
  }
  return out;
}

/** The comparison table in every language. The build fails if a translation is missing. */
export const comparisonRows: ComparisonRow[] = rawComparisonRows.map((r) => ({
  group: expand(r.group),
  label: expand(r.label),
  cells: Object.fromEntries(
    Object.entries(r.cells).map(([app, c]) => [app, { tone: c.tone, text: typeof c.text === "string" ? c.text : expand(c.text) }]),
  ) as ComparisonRow["cells"],
}));

if (missing.length) {
  throw new Error(`Missing comparison translations (content/<locale>/comparison.ts):\n${missing.join("\n")}`);
}
