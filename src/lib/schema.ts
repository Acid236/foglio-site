import { copy } from "@/content";
import { downloadUrl, facts, releasesUrl, site } from "@/content/facts";
import type { Locale } from "@/content/types";
import { absolute } from "./i18n";
import { localeInfo } from "./locales";

/**
 * Shared schema.org nodes. Every page refers to the same entities by @id, so search engines see one
 * organization, one website and one app, whatever the language. No ratings or reviews: there are none.
 */
export const ids = {
  org: `${site.url}/#organization`,
  website: `${site.url}/#website`,
  app: `${site.url}/#app`,
};

const logo = { "@type": "ImageObject", url: `${site.url}/icon-256.png`, width: 256, height: 256 };

/** The project behind Foglio; its profiles are the GitHub organization and the app repository. */
export function organization() {
  return {
    "@type": "Organization",
    "@id": ids.org,
    name: site.name,
    url: site.url,
    logo,
    sameAs: [site.org, site.repo],
  };
}

export function website(locale: Locale) {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    name: site.name,
    url: `${site.url}/`,
    inLanguage: localeInfo[locale].tag,
    publisher: { "@id": ids.org },
  };
}

/** The app itself. The interface exists in English and Italian only, so `inLanguage` says so. */
export function softwareApplication(locale: Locale) {
  const info = localeInfo[locale];
  const shot = (w: number) => `${site.url}/screenshots/${info.screenshot}-light-${w}.webp`;
  return {
    "@type": "SoftwareApplication",
    "@id": ids.app,
    name: site.name,
    description: copy[locale].meta.home.description,
    url: absolute(locale, "/"),
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Spreadsheet",
    operatingSystem: `macOS ${site.minMacOS} or later`,
    processorRequirements: "Apple silicon or Intel (universal app)",
    softwareVersion: site.version,
    datePublished: site.released,
    downloadUrl,
    installUrl: absolute(locale, "/download/"),
    releaseNotes: releasesUrl,
    fileSize: `${facts.dmgMB} MB`,
    license: ["https://opensource.org/licenses/MIT", "https://www.apache.org/licenses/LICENSE-2.0"],
    isAccessibleForFree: true,
    inLanguage: ["en", "it"],
    image: logo,
    screenshot: {
      "@type": "ImageObject",
      url: shot(1213),
      width: 1213,
      height: 813,
      caption: copy[locale].ui.screenshotAlt,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: info.currency,
      availability: "https://schema.org/InStock",
      url: absolute(locale, "/download/"),
    },
    author: { "@id": ids.org },
    publisher: { "@id": ids.org },
    sameAs: [site.repo],
  };
}
