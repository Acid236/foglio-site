import Link from "next/link";
import type { ReactNode } from "react";
import { copy } from "@/content";
import { downloadUrl, site } from "@/content/facts";
import { locales, type Locale } from "@/content/types";
import { asset, href } from "@/lib/i18n";
import { localeInfo } from "@/lib/locales";
import { Icon } from "./Icon";

/** Header + main + footer around every page. `path` is the locale-less path of the page. */
export function Shell({ locale, path, children }: { locale: Locale; path: string; children: ReactNode }) {
  const t = copy[locale].ui;
  const nav = [
    { label: t.navCompare, to: "/compare/" },
    { label: t.navTechnology, to: "/technology/" },
    { label: t.navAlternatives, to: "/alternatives/" },
    { label: t.navGuides, to: "/guides/" },
  ];
  const navLinks = nav.map((n) => (
    <Link key={n.to} href={href(locale, n.to)} aria-current={path.startsWith(n.to) ? "page" : undefined}>
      {n.label}
    </Link>
  ));
  return (
    <>
      <a className="skip" href="#main">
        {t.skipToContent}
      </a>
      <header className="site-header">
        <div className="wrap header-row">
          <Link href={href(locale, "/")} className="brand" aria-label={t.home}>
            {/* Low priority: otherwise React preloads this icon in <head>, ahead of the hero screenshot (LCP). */}
            <img src={asset("/icon-64.webp")} width={32} height={32} alt="" fetchPriority="low" />
            <span>{site.name}</span>
          </Link>
          <nav className="nav-desktop" aria-label="Main">
            {navLinks}
          </nav>
          <div className="header-actions">
            <LanguagePicker locale={locale} path={path} label={t.languageLabel} />
            <a className="star-link" href={site.repo} aria-label={t.starOnGitHub} title={t.starOnGitHub} rel="noopener">
              <Icon name="github" size={17} />
              <span>Star</span>
              <Icon name="star" size={15} className="star-ico" />
            </a>
            <a className="btn btn-small" href={downloadUrl}>
              <Icon name="download" size={16} />
              {t.navDownload}
            </a>
            <details className="nav-mobile">
              <summary aria-label={t.menu}>
                <Icon name="menu" size={22} />
              </summary>
              <nav aria-label="Mobile">
                {navLinks}
                <Link href={href(locale, "/download/")}>{t.navDownload}</Link>
                <a href={site.repo} rel="noopener">
                  {t.starOnGitHub} ★
                </a>
              </nav>
            </details>
          </div>
        </div>
      </header>
      <main id="main">{children}</main>
      <Footer locale={locale} path={path} />
    </>
  );
}

/** Language menu without JavaScript: a <details> dropdown of links to this page in every language. */
function LanguagePicker({ locale, path, label }: { locale: Locale; path: string; label: string }) {
  return (
    <details className="lang-picker">
      <summary aria-label={`${label}: ${localeInfo[locale].name}`}>
        <Icon name="globe" size={17} />
        <span>{localeInfo[locale].tag.slice(0, 2).toUpperCase()}</span>
      </summary>
      <ul>
        {locales.map((l) => (
          <li key={l}>
            <Link
              href={href(l, path)}
              hrefLang={localeInfo[l].tag}
              lang={localeInfo[l].tag}
              aria-current={l === locale ? "true" : undefined}
            >
              {localeInfo[l].name}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

function Footer({ locale, path }: { locale: Locale; path: string }) {
  const t = copy[locale].ui;
  const cols: { title: string; links: { label: string; to: string; ext?: boolean }[] }[] = [
    {
      title: site.name,
      links: [
        { label: t.navDownload, to: "/download/" },
        { label: t.navCompare, to: "/compare/" },
        { label: t.navTechnology, to: "/technology/" },
      ],
    },
    {
      title: t.navAlternatives,
      links: [
        { label: "Excel", to: "/alternatives/excel-for-mac/" },
        { label: "Numbers", to: "/alternatives/numbers/" },
        { label: "LibreOffice", to: "/alternatives/libreoffice/" },
        { label: "Google Sheets", to: "/alternatives/google-sheets/" },
      ],
    },
    {
      title: t.openSource,
      links: [
        { label: `${t.starOnGitHub} ★`, to: site.repo, ext: true },
        { label: t.releases, to: `${site.repo}/releases`, ext: true },
        { label: t.issues, to: `${site.repo}/issues`, ext: true },
        { label: t.navGuides, to: "/guides/" },
      ],
    },
  ];
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <div className="brand">
            <img src={asset("/icon-64.webp")} width={28} height={28} alt="" loading="lazy" />
            <span>{site.name}</span>
          </div>
          <p className="muted">{t.footerTagline}</p>
          <p className="muted small">{t.footerLicense}</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h2 className="footer-title">{c.title}</h2>
            <ul>
              {c.links.map((l) => (
                <li key={l.to}>
                  {l.ext ? (
                    <a href={l.to} rel="noopener">
                      {l.label}
                    </a>
                  ) : (
                    <Link href={href(locale, l.to)}>{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="wrap">
        <nav className="footer-langs" aria-label={t.languageLabel}>
          {locales.map((l) => (
            <Link key={l} href={href(l, path)} hrefLang={localeInfo[l].tag} lang={localeInfo[l].tag} aria-current={l === locale ? "true" : undefined}>
              {localeInfo[l].name}
            </Link>
          ))}
        </nav>
        <p className="muted small trademark">{t.footerTrademark}</p>
      </div>
    </footer>
  );
}
