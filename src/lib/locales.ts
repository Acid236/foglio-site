import type { Locale } from "@/content/types";

/** Per-language settings that are not text to translate. */
export const localeInfo: Record<
  Locale,
  {
    /** Name of the language in that language, for the picker. */
    name: string;
    /** BCP 47 tag for <html lang>, hreflang and Intl formatting. */
    tag: string;
    /** Open Graph locale. */
    og: string;
    /** "Free" price as shown in that market, and the JSON-LD currency. */
    price: string;
    currency: string;
    /** App screenshots exist in English and Italian (the app's UI languages). */
    screenshot: "en" | "it";
  }
> = {
  en: { name: "English", tag: "en", og: "en_US", price: "$0", currency: "USD", screenshot: "en" },
  it: { name: "Italiano", tag: "it", og: "it_IT", price: "0 €", currency: "EUR", screenshot: "it" },
  es: { name: "Español", tag: "es", og: "es_ES", price: "0 €", currency: "EUR", screenshot: "en" },
  fr: { name: "Français", tag: "fr", og: "fr_FR", price: "0 €", currency: "EUR", screenshot: "en" },
  de: { name: "Deutsch", tag: "de", og: "de_DE", price: "0 €", currency: "EUR", screenshot: "en" },
  pt: { name: "Português (Brasil)", tag: "pt-BR", og: "pt_BR", price: "R$ 0", currency: "BRL", screenshot: "en" },
  ja: { name: "日本語", tag: "ja", og: "ja_JP", price: "¥0", currency: "JPY", screenshot: "en" },
};
