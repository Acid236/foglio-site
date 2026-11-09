import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { facts } from "@/content/facts";
import type { Locale } from "@/content/types";

const dec = (n: number) => String(n).replace(".", ",");

const text: Record<Locale, { title: string; line: string }> = {
  en: {
    title: "The free, native spreadsheet for Mac",
    line: `Opens Excel files · ${facts.dmgMB} MB · launches in ${facts.launchSeconds} s · open source`,
  },
  it: {
    title: "Il foglio di calcolo gratuito e nativo per Mac",
    line: `Apre i file Excel · ${dec(facts.dmgMB)} MB · si avvia in ${dec(facts.launchSeconds)} s · open source`,
  },
  es: {
    title: "La hoja de cálculo gratuita y nativa para Mac",
    line: `Abre archivos de Excel · ${dec(facts.dmgMB)} MB · se abre en ${dec(facts.launchSeconds)} s · código abierto`,
  },
  fr: {
    title: "Le tableur gratuit et natif pour Mac",
    line: `Ouvre les fichiers Excel · ${dec(facts.dmgMB)} Mo · s'ouvre en ${dec(facts.launchSeconds)} s · open source`,
  },
  de: {
    title: "Die kostenlose, native Tabellenkalkulation für den Mac",
    line: `Öffnet Excel-Dateien · ${dec(facts.dmgMB)} MB · startet in ${dec(facts.launchSeconds)} s · Open Source`,
  },
  pt: {
    title: "A planilha gratuita e nativa para Mac",
    line: `Abre arquivos do Excel · ${dec(facts.dmgMB)} MB · abre em ${dec(facts.launchSeconds)} s · código aberto`,
  },
  // The image font has no Japanese glyphs: the Japanese preview uses the English text.
  ja: {
    title: "The free, native spreadsheet for Mac",
    line: `Opens Excel files · ${facts.dmgMB} MB · launches in ${facts.launchSeconds} s · open source`,
  },
};

/** 1200×630 social preview image, rendered once at build time. */
export function ogImage(locale: Locale) {
  const icon = readFileSync(join(process.cwd(), "public", "icon-256.png")).toString("base64");
  const t = text[locale];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 88px",
          background: "linear-gradient(135deg, #f3fbf6 0%, #ffffff 55%, #e2f5ea 100%)",
          color: "#0d1f16",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <img src={`data:image/png;base64,${icon}`} width={132} height={132} alt="" />
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>Foglio</div>
        </div>
        <div style={{ fontSize: 58, fontWeight: 700, marginTop: 40, lineHeight: 1.1, letterSpacing: -1, maxWidth: 1000 }}>
          {t.title}
        </div>
        <div style={{ fontSize: 30, marginTop: 28, color: "#1b7a4a" }}>{t.line}</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
