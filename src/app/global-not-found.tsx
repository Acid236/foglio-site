import type { Metadata } from "next";
import { locales } from "@/content/types";
import { href } from "@/lib/i18n";
import { localeInfo } from "@/lib/locales";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page not found | Foglio",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <main className="notfound">
          <img src="/icon-192.webp" width={96} height={96} alt="" />
          <h1>404</h1>
          <p>This page does not exist. · Questa pagina non esiste.</p>
          <p className="cta-row center">
            <a className="btn btn-primary" href="/">
              Foglio — Home
            </a>
          </p>
          <nav aria-label="Language" className="footer-langs">
            {locales.map((l) => (
              <a key={l} href={href(l, "/")} hrefLang={localeInfo[l].tag} lang={localeInfo[l].tag}>
                {localeInfo[l].name}
              </a>
            ))}
          </nav>
        </main>
      </body>
    </html>
  );
}
