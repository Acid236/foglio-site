import { alternativesBase } from "./alternatives";
import { copyEn } from "./copy.en";
import { copyIt } from "./copy.it";
import { alternatives as deAlternatives, guides as deGuides } from "./de/articles";
import { copyDe } from "./de/copy";
import { alternatives as esAlternatives, guides as esGuides } from "./es/articles";
import { copyEs } from "./es/copy";
import { alternatives as frAlternatives, guides as frGuides } from "./fr/articles";
import { copyFr } from "./fr/copy";
import { guidesBase } from "./guides";
import { alternatives as ptAlternatives, guides as ptGuides } from "./pt/articles";
import { copyPt } from "./pt/copy";
import type { Article, Locale, SiteCopy } from "./types";

export const copy: Record<Locale, SiteCopy> = { en: copyEn, it: copyIt, es: copyEs, fr: copyFr, de: copyDe, pt: copyPt };

export const alternatives: Record<Locale, Article[]> = {
  ...alternativesBase,
  es: esAlternatives,
  fr: frAlternatives,
  de: deAlternatives,
  pt: ptAlternatives,
};

export const guides: Record<Locale, Article[]> = {
  ...guidesBase,
  es: esGuides,
  fr: frGuides,
  de: deGuides,
  pt: ptGuides,
};

export { comparisonApps, comparisonChecked, comparisonPriceSources, comparisonSources } from "./comparison";
export { comparisonRows } from "./comparison-i18n";
export * from "./facts";
export * from "./types";
