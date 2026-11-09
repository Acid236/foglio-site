# Foglio website: SEO notes

Last updated 2026-11-09. The site has six languages: English at `/`, and Italian, Spanish, French,
German and Portuguese (Brazil) under `/it/`, `/es/`, `/fr/`, `/de/`, `/pt/`. Content lives in
`src/content/`: `copy.en.ts`, `copy.it.ts`, `comparison.ts`, `alternatives.ts`, `guides.ts` for
English and Italian, and `<code>/copy.ts`, `<code>/comparison.ts`, `<code>/articles.ts` for the
others. This file holds the research and reasoning behind it.

## How the keyword research was done (and its limits)

I had no access to a keyword tool with real search volumes (Ahrefs, Semrush, Google Keyword
Planner). The signals below come from:

- **SERP inspection** (web search, November 2026): who ranks, how many pages target the term, and
  whether results are listicles, vendor pages, forum threads or Apple/Microsoft help pages.
- **Question patterns** in Apple Community threads and Italian how-to sites (Aranzulla, Navigaweb,
  iPhoneItalia), which show how people phrase the problem.
- **Experience** with how these queries usually behave. "Volume" below is a relative estimate
  (High / Medium / Low), not a measured number. **Check it in Search Console after 4–8 weeks** and
  in Keyword Planner before investing in new pages.

General picture:

- "excel alternative mac" style queries are **high volume, very competitive**, dominated by
  listicles from SaaS vendors (ClickUp, WPS, Setapp, Softpicker, Spreadsheetpoint). A new domain
  will not rank for the head term quickly. The long tail ("free excel alternative for mac that opens
  xlsx", "lightweight", "native", "open source", "no subscription") is reachable.
- **How-to problems** ("open xlsx on mac without excel", "csv opens in one column mac",
  "numbers can't open xls") are medium volume, high intent, and answered mostly by thin vendor
  posts and old forum threads. **Best near-term opportunity**: we can answer them better and
  honestly.
- **Italian** SERPs are far less crowded. "alternativa gratuita a excel per mac", "aprire file
  xlsx su mac", "foglio di calcolo gratis mac" are covered mainly by Aranzulla, ONLYOFFICE's
  Italian blog and translated ClickUp pages. The brand name is itself an Italian word, which helps
  relevance but makes brand search ambiguous ("foglio" also means a sheet of paper / a sheet in
  Excel). Always pair the brand with "Mac" or "app" in copy.
- The **Italian↔English function names** page targets a steady, evergreen query family
  ("cerca.vert in inglese", "vlookup in italiano", "funzioni excel inglese italiano") with weak,
  ad-heavy results. Good link-bait for both languages.

## Target keyword per page

One primary keyword per page; secondaries are used naturally in headings and body.

| Page | EN primary | EN secondary | IT primary | IT secondary | Intent / volume (est.) |
|---|---|---|---|---|---|
| `/` | free spreadsheet app for Mac | excel compatible, open source spreadsheet mac, native | foglio di calcolo gratis per Mac | programma excel gratis mac, foglio elettronico mac | Commercial / High |
| `/compare/` | Excel vs Numbers vs LibreOffice vs Google Sheets | mac spreadsheet comparison, best spreadsheet app mac | confronto Excel Numbers LibreOffice Fogli Google | miglior foglio di calcolo per Mac | Commercial investigation / Medium |
| `/technology/` | native Mac spreadsheet Swift Rust | IronCalc, not Electron, AppKit | foglio di calcolo nativo Mac Swift Rust | — | Informational, dev audience / Low (links, HN/Reddit) |
| `/download/` | download Foglio for Mac | free spreadsheet download mac, unidentified developer | scaricare Foglio per Mac | foglio di calcolo gratis da scaricare, sviluppatore non identificato | Navigational / brand |
| `/alternatives/` | Excel, Numbers, Google Sheets alternatives Mac | — | alternative a Excel, Numbers, Fogli Google | — | Hub page |
| `/alternatives/excel-for-mac/` | free Excel alternative for Mac | excel without subscription mac, open xlsx free | alternativa gratuita a Excel per Mac | excel gratis mac, senza abbonamento microsoft 365 | Commercial / High (competitive) |
| `/alternatives/numbers/` | Numbers alternative (for Excel files) | numbers vs excel, numbers xlsx | alternativa a Numbers | numbers file excel, numbers non apre xlsx | Commercial / Low–Medium |
| `/alternatives/libreoffice/` | lightweight LibreOffice Calc alternative Mac | libreoffice mac slow / heavy | alternativa leggera a LibreOffice Calc | libreoffice mac pesante | Commercial / Low |
| `/alternatives/google-sheets/` | offline Google Sheets alternative | google sheets desktop app mac, private spreadsheet | alternativa offline a Fogli Google | fogli google offline mac | Commercial / Medium |
| `/guides/open-xlsx-on-mac-without-excel/` | open xlsx on Mac without Excel | how to open excel files on mac free | aprire file xlsx su Mac senza Excel | come aprire file excel su mac gratis | Informational, high intent / High |
| `/guides/open-xls-on-mac/` | open xls file on Mac | numbers unsupported version of excel, convert xls to xlsx mac | aprire file xls su Mac | convertire xls in xlsx mac | Informational / Medium |
| `/guides/open-csv-on-mac/` | open CSV file on Mac | csv one column mac, csv encoding mac, csv semicolon | aprire file CSV su Mac | csv una sola colonna, csv caratteri strani, csv punto e virgola | Informational / Medium–High |
| `/guides/free-spreadsheet-apps-for-mac/` | free spreadsheet apps for Mac | best free spreadsheet mac 2026 | fogli di calcolo gratis per Mac | programmi gratis fogli di calcolo mac | Commercial / High (competitive) |
| `/guides/excel-functions-italian-english/` | Excel function names in Italian | vlookup in italian, excel italian english translation | funzioni Excel in italiano e inglese | cerca.vert in inglese, somma.se in inglese | Informational / Medium, evergreen |

### Cannibalisation decisions

- The home page targets **"free spreadsheet app for Mac" / "foglio di calcolo gratis per Mac"**,
  and `/alternatives/excel-for-mac/` targets **"free Excel alternative for Mac" / "alternativa
  gratuita a Excel per Mac"**. Earlier drafts gave both the Excel keyword; I split them so they do not
  compete. The home page still mentions Excel heavily (it must), but its title leads with "spreadsheet".
- `/compare/` (table, all five apps) vs `/guides/free-spreadsheet-apps-for-mac/` (roundup, six
  free apps incl. Excel for the web and ONLYOFFICE): the comparison is the "vs" query, the roundup is
  the "best free … list" query. They link to each other.

## Multilingual keyword map

Same slugs in every language (hreflang ties them together). English and Italian come from the
research above; the Spanish, French, German and Portuguese keywords are the ones the translators
chose for each market, checked in this pass for placement (title, h1, intro, one h2, description).
Volumes are unknown: verify them in Search Console per language after launch.

| Page | es | fr | de | pt-BR |
|---|---|---|---|---|
| `/` | hoja de cálculo gratis para Mac | tableur gratuit pour Mac | kostenlose Tabellenkalkulation für den Mac | planilha grátis para Mac |
| `/compare/` | Foglio frente a Excel, Numbers, LibreOffice y Google Sheets | Foglio vs Excel, Numbers, LibreOffice et Google Sheets | Foglio vs. Excel, Numbers, LibreOffice und Google Sheets | Foglio vs Excel, Numbers, LibreOffice e Google Sheets |
| `/download/` | descargar Foglio para Mac | télécharger Foglio pour Mac | Foglio für Mac herunterladen | baixar o Foglio para Mac |
| `/alternatives/excel-for-mac/` | alternativa gratis a Excel para Mac | alternative gratuite à Excel pour Mac | kostenlose Excel-Alternative für Mac | alternativa gratuita ao Excel para Mac |
| `/alternatives/numbers/` | alternativa a Numbers (archivos Excel) | alternative à Numbers (xlsx) | Numbers-Alternative für Excel-Dateien | alternativa ao Numbers (arquivos do Excel) |
| `/alternatives/libreoffice/` | alternativa ligera a LibreOffice Calc | alternative légère à LibreOffice Calc | schlanke LibreOffice-Calc-Alternative | alternativa leve ao LibreOffice Calc |
| `/alternatives/google-sheets/` | alternativa a Google Sheets sin conexión | alternative à Google Sheets hors ligne | Offline-Alternative zu Google Sheets | alternativa offline ao Google Sheets |
| `/guides/open-xlsx-on-mac-without-excel/` | abrir archivos xlsx en Mac sin Excel | ouvrir un fichier xlsx sur Mac sans Excel | xlsx-Datei auf dem Mac ohne Excel öffnen | abrir arquivo xlsx no Mac sem Excel |
| `/guides/open-xls-on-mac/` | abrir archivos .xls en Mac | ouvrir un fichier .xls sur Mac | .xls-Dateien auf dem Mac öffnen | abrir arquivos .xls no Mac |
| `/guides/open-csv-on-mac/` | abrir CSV en Mac (columnas, acentos) | ouvrir un CSV sur Mac (colonnes, accents) | CSV auf dem Mac öffnen (Spalten, Umlaute) | abrir CSV no Mac (colunas, acentos) |
| `/guides/free-spreadsheet-apps-for-mac/` | hojas de cálculo gratis para Mac | tableurs gratuits pour Mac | Tabellenkalkulation kostenlos für Mac | planilha grátis para Mac (apps) |
| `/guides/excel-functions-italian-english/` | funciones de Excel en inglés y español (BUSCARV en inglés) | fonctions Excel français anglais (RECHERCHEV en anglais) | Excel-Funktionen Deutsch Englisch (SVERWEIS englisch) | funções do Excel em italiano e inglês |

Notes per language:

- **Spanish, French, German** show local prices (Spain, France, Germany, VAT included) with the
  official Microsoft and Apple pages of that country as sources. **Portuguese** shows Brazilian
  prices in reais. **English** shows US prices, **Italian** Italian prices.
- **Formula languages.** Foglio localizes function names for en, it, de, es and fr only. On a
  Portuguese Mac you type English names (`SUM`, `VLOOKUP`), and the Portuguese pages say so. The app
  UI is English and Italian only, which every non-English page states where it matters.
- **Cannibalisation** follows the English split: the home targets "spreadsheet app" wording, the
  roundup the plural "apps / hojas de cálculo / tableurs" list query, and the Excel alternative page
  the "alternative" query. In Portuguese the home ("planilha grátis para Mac") and the roundup
  share the head term; the roundup title says "Apps de planilha grátis … comparados" to lean to
  the list intent. Watch both in Search Console and retitle one if they swap positions.

## Titles and descriptions

Rules applied (and checked by script): title ≤ 60 characters including "| Foglio", description
120–155 characters, all unique across all six languages, primary keyword at the start of the title,
brand at the end except on the home page where the brand leads (brand + category is the norm for
home pages and reads better in SERPs).

Rationale per pattern:

- **"How to …" titles** for guides match the query phrasing exactly ("How to Open xlsx Files on a
  Mac Without Excel"). Italian uses the infinitive/"Come …" forms people actually type ("Come aprire
  file xlsx su Mac senza Excel").
- **Descriptions lead with the user's problem** ("CSV opening in one column, with garbled accents…")
  and end with what the page delivers. No exclamation marks, no superlatives we cannot back.
- **Numbers in snippets** (7.5 MB, ~500 functions, 2026) improve CTR and are all from `facts.ts`.
- Year "(2026)" only on the roundup, the one page where freshness is part of the query. Remember to
  update it (title, description, `updated`) each year, or drop it.
- `ogTitle` set on the home page only, as a friendlier social share line.

## Internal linking plan

Every page links up to a hub and across to siblings. Implemented in the content:

- **Home** → `/compare/`, `/technology/`, `/download/`, all four alternatives, `/alternatives/`,
  guides for xlsx, xls, CSV, the function list (from the FAQ).
- **Compare** → roundup guide (FAQ); alternatives pages should be linked from the table's column
  headers by the design (suggestion: each competitor name links to its `/alternatives/<slug>/`).
- **Alternatives** → each links to `/compare/`, `/download/`, and to 1–3 sibling alternatives
  and relevant guides (Excel → roundup; Numbers → xlsx guide + function list; LibreOffice → xls
  guide + technology; Google Sheets → compare).
- **Guides** → each links to `/` (Foglio first mention), `/download/`, the matching alternatives
  page(s) and at least one other guide (xlsx ↔ CSV ↔ xls).
- **Index pages** `/alternatives/` ↔ `/guides/` link to each other in their intros.
- **Technology** → GitHub, IronCalc, calamine (external, authoritative) and `/download/`.

Implemented in the components:

- "More guides" / "Other alternatives" cards at the end of each article, plus a link to the other
  hub (guides ↔ alternatives). The compare page ends with the four alternatives cards and a link
  to the guides; the home links to both hubs under its alternatives cards.
- Breadcrumbs (Home ▸ Guides ▸ …) with `BreadcrumbList` JSON-LD.
- `hreflang` for all six languages (`pt-BR` for Portuguese) plus `x-default` → English, in the
  `<head>` and in the sitemap.
- Structured data in `src/lib/schema.ts`: one `Organization` (`sameAs` the GitHub organization and
  the app repository), one `WebSite`, one `SoftwareApplication` (`operatingSystem`,
  `applicationCategory`, `offers` price 0 in the page's currency, `downloadUrl`, `installUrl`,
  `fileSize`, `softwareVersion`, `screenshot`, both licenses, `inLanguage` en/it = the app's UI
  languages), all linked by `@id`. Articles are `Article` (alternatives) or `TechArticle` (guides)
  pointing at the Organization. **Do not add `aggregateRating` or `review`**: there are none.
  Consequence to accept: Google's software-app rich result requires a rating or review, so the app
  markup will not produce stars; it still feeds the knowledge graph.
- `HowTo` JSON-LD is no longer shown as a rich result by Google; FAQPage rich results are limited
  to a few authoritative sites, but the markup costs nothing.

## What the design should highlight

In order of persuasive weight, from what I learned writing the copy:

1. **Free with no catch**: price 0, no account, no ads, no telemetry, MIT/Apache. Put "no account"
   and "no subscription" next to the download button; that is the main objection for Excel users.
2. **It opens their `.xlsx` and saves it back as `.xlsx`**: the single feature most visitors need.
   A file-format strip (xlsx, xlsm, xls, xlsb, ods, csv, tsv in; xlsx, csv, pdf out) works well.
3. **Size bar chart** (7.5 MB vs hundreds of MB / GB): the most striking visual. See the data
   caveat below.
4. **Formulas in your language**: unusual and very concrete for Italian/German/Spanish/French
   visitors. Show a formula bar with `=SOMMA(A1:A10;B2)` on the Italian site and the same formula in
   English on the English site.
5. **Speed numbers**: 0.24 s launch, 16 ms recalculation on 300k formulas, and the 1,703 ms →
   1.3 ms VLOOKUP story (great for the technology page and for developer audiences).
6. **Honesty block**: a visible "What Foglio doesn't do yet" list (pivot tables, macros, password
   files, shapes, sparklines, collaboration, iOS). It builds trust and pre-empts bad reviews.
7. **Gatekeeper step**: screenshots of the Privacy & Security "Open Anyway" button (macOS 15+)
   and the right-click ▸ Open dialog (macOS 14). This is the biggest drop-off risk after download.
8. Smaller touches worth a screenshot: EMF/WMF clip art rendering, CSV auto-detection, dark mode,
   Insert Function browser, picture crop handles.

## Product claims to double-check before launch

- **Competitor sizes in `facts.ts` vs `comparison.ts` disagree.** `sizeComparisonMB` has Numbers
  260 MB, LibreOffice 595 MB, Excel 2,400 MB. What I found on 2026-11-09: Numbers App Store listing
  **661 MB** (a single universal listing for Mac/iPhone/iPad; the 260 MB figure matches older
  Mac-only listings), Excel Mac App Store **1.2 GB**, LibreOffice 26.8.2 Apple silicon DMG
  **≈ 299 MB** download (system requirements say up to 800 MB on disk; 595 MB may be a fair
  installed size but I could not verify it). The comparison table uses the figures I verified. The
  chart caption says "download or installed sizes", which covers the mix, but someone should
  align the two or label the chart bars precisely.
- **Numbers now requires macOS 26** (current version 15.4.2). Used in the copy as a point in
  Foglio's favour; re-check if Apple changes it.
- **Office Home 2024 price**: Microsoft's US page lists **$179.99**; many retailers still quote the
  older $149.99 MSRP. On Microsoft's own country pages (checked 2026-11-09): Italy, Spain, Germany
  **149 €**; France **149 €** (sold there as "Microsoft Famille 2024"); Brazil **R$ 899**.
  Microsoft 365 Personal / Family per year: $99.99 / $129.99 (US); 99 € / 129 € (IT, ES, FR, DE;
  "Single" in Germany, "Personnel/Famille" in France); R$ 509 / R$ 599 (BR).
- **Apple Creator Studio** (apple.com country pages, checked 2026-11-09): $12.99/month or
  $129/year (US); 12,99 € / month or 129 € / year (IT, ES, FR, DE); R$ 39,90 / month or R$ 399 /
  year (BR). Numbers itself stays free.
- **"No network connections of its own"**: I grepped `app/Sources` and `core/` for networking code
  (URLSession, HTTP crates, Sparkle, analytics) and found none; the only outbound action is
  `NSWorkspace.open` when the user clicks a cell hyperlink. Keep this true (an update checker would
  change the copy in several places: home features, FAQ, download FAQ, Google Sheets page).
- **`.xls` / `.xlsb` / `.ods` import keeps values, formulas and dates but not cell formatting**
  (calamine path). The copy says so explicitly. If formatting import is added, update the xls guide,
  the LibreOffice page and two comparison cells.
- **Saving `.xlsm`**: Foglio's writable types are xlsx and csv, so macros are lost on save. Copy
  says "macros are not run and are not kept when you save". Verify the actual behaviour when saving
  an opened `.xlsm` (does it prompt Save As?).
- **LibreOffice has no LAMBDA**: based on the open bug tdf#138749; re-check against the 26.8
  release notes before launch.
- **Excel telemetry**: Microsoft's own page confirms required vs optional diagnostic data, not
  precisely what the Mac consumer app sends; the cell wording stays general.
- **Google Sheets + Gemini**: availability by plan changes often; the cell says "depending on plan".
- **Function names follow the Mac's language; separators and decimals follow the region**
  (`FormulaLocale.current` in `app/Sources/Engine.swift`). Function descriptions in autocomplete
  exist only in English and Italian (`FunctionDocs.swift`), so the copy promises "Italian
  descriptions" only on Italian pages.
- The README's Italian section is outdated ("circa 400 funzioni", "prime fasi di sviluppo"). Not
  used on the site, but worth updating because Google may surface the GitHub page for Italian queries.

## Ideas for future pages

High to low expected value:

1. **"Excel shortcuts on Mac" cheat sheet** (EN/IT): high-volume evergreen query; Foglio follows
   Excel for Mac conventions, so it doubles as product documentation.
2. **"Excel without subscription on Mac" / "Excel senza abbonamento"**: price-anxiety query
   adjacent to the Excel alternative page; cover Excel for the web, Office Home one-time purchase,
   and free apps honestly.
3. **"Open xlsx on an older Mac" (macOS 14 Sonoma)**: Numbers now needs macOS 26, so owners of
   older Macs are a real, under-served audience.
4. **Function landing pages for the top 10 functions** (`/guides/vlookup-in-italian/` → CERCA.VERT,
   SOMMA.SE, SE.ERRORE…), each with examples in both syntaxes. Only if the translation page performs.
5. **"CSV with semicolons on Mac"** as its own short page if Search Console shows that sub-query
   bringing impressions to the CSV guide.
6. **Portuguese ↔ English function list** (`PROCV` = `VLOOKUP`, a big Brazilian query): Foglio
   does not localize Portuguese formulas, which makes the list *more* useful to Brazilian users, who
   type English names in Foglio. The engine has no Portuguese data, so the names must be checked
   against Microsoft's own pt-BR function reference before publishing. Until then the Portuguese
   page of that guide stays Italian ↔ English.
7. **Changelog / release notes page** on the site (fresh content, "what's new in Foglio 1.1").
8. **Developer posts** for the technology audience (HN, Reddit r/rust, r/macapps): "Making
   IronCalc's VLOOKUP 1,300× faster", "A spreadsheet in 7.5 MB: Swift + Rust without Xcode".
   These earn backlinks, which the commercial pages need.

## Sources consulted

Competitor facts (also listed on the comparison page):

- Microsoft 365 plans and Office Home 2024, per country (`comparisonPriceSources` in
  `comparison.ts`): https://www.microsoft.com/{en-us,it-it,es-es,fr-fr,de-de,pt-br}/microsoft-365/buy/compare-all-microsoft-365-products
- Apple Creator Studio, per country: https://www.apple.com/apple-creator-studio/ and
  https://www.apple.com/{it,es,fr,de,br}/apple-creator-studio/
- Excel on the Mac App Store: https://apps.apple.com/us/app/microsoft-excel/id462058435?mt=12
- Microsoft required diagnostic data: https://learn.microsoft.com/en-us/microsoft-365-apps/privacy/required-diagnostic-data
- Numbers on the App Store: https://apps.apple.com/us/app/numbers-make-spreadsheets/id361304891
- About Apple Creator Studio: https://support.apple.com/en-ca/125029
- Numbers functions help: https://support.apple.com/guide/functions
- LibreOffice download / system requirements: https://www.libreoffice.org/download/download-libreoffice/ , https://www.libreoffice.org/get-help/system-requirements/
- LibreOffice DMG size: HEAD request on download.documentfoundation.org (26.8.2 aarch64, 299,236,406 bytes)
- LibreOffice LAMBDA request: https://www.libreoffice.org/bugzilla/show_bug.cgi?id=138749
- LibreOffice 26.8 "no AI": https://itsfoss.com/news/libreoffice-26-8-release/
- Google Docs offline: https://support.google.com/docs/answer/6388102
- Google Sheets and Office files: https://support.google.com/docs/answer/6055139
- Google Sheets size limits: https://support.google.com/docs/answer/37603

SERP research (examples of what currently ranks):

- EN "best free excel alternative for mac": clickup.com, wps.com, setapp.com, softpicker.com,
  spreadsheetpoint.com, viasocket.com, sourceforge.net.
- IT "aprire file xlsx su mac senza excel": aranzulla.it, navigaweb.net, onlyoffice.com/blog/it,
  clickup.com/it, canva.com (online viewer).
- EN "open xls file on mac": discussions.apple.com threads (Numbers "unsupported version of Excel",
  HTML disguised as .xls), alphr.com, thebricks.com, wildandfreetools.com.

## SEO pass of 2026-11-09: what changed and why

Technical:

- **LCP**: React preloaded the 32 px header logo (`<link rel="preload" as="image">` in `<head>`)
  ahead of the hero screenshot, which sits inside `<picture>` and is never preloaded by React. The
  logo now has `fetchpriority="low"` (React skips the preload) and the footer logo is lazy, so the
  AVIF screenshot with `fetchpriority="high"` is the first image the browser asks for.
- **Alt text**: the screenshot alt repeated the h1; it now describes what the screenshot shows, in
  each language (and says the interface is English where the screenshot is English).
- **Dead weight**: postbuild also removes the build-manifest JS left in `_next/static/<id>/` and the
  duplicate `/404/` and `/_not-found/` pages. Vercel serves `out/404.html` (noindex) for unknown
  URLs; it now links to all six home pages.
- **Markup bug**: `*Summarize by*` was shown with literal asterisks; `*italic*` now renders `<em>`.
- **Sitemap**: `lastmod` per language from each article's own `updated` date; compare uses the
  date prices were checked.
- Footer and menu labels are translated ("Open source", "Releases", "Report a problem", "Menu",
  the logo link's accessible name). The non-standard `content-language` meta was removed
  (`<html lang>` carries the language).

Structured data: see "Implemented in the components" above (Organization with GitHub `sameAs`,
WebSite, SoftwareApplication with en/it `inLanguage`, Article/TechArticle linked by `@id`).

Content:

- **Function guide retargeted in German and French** to "Excel-Funktionen Deutsch Englisch" and
  "fonctions Excel français anglais" (same slug): 54 functions each, generated from the engine's
  own `de`/`fr` language data (`third_party/ironcalc_base/src/language/language.bin` in the app
  repo), so every name is one Foglio really accepts. Spanish already targeted Spanish ↔ English;
  its names and the Italian/English list were checked against the same data and all match.
- **Local prices** for France and Brazil (they quoted US dollars), and official country sources for
  every language's prices (the Italian price source was a press article).
- **Keyword placement** in every language: the home lead paragraph and one h2 carry the primary
  keyword; the compare description and table heading name the five apps; the Excel alternative
  page has the keyword in its description, intro and an h2; the xlsx guide, the roundup and the
  function guide have keyworded h2s.
- Italian Excel alternative page gained the performance FAQ the other languages had.

Checked and fine: one h1 per page; unique titles and descriptions across all 90 pages; title and
description lengths; canonical = self; seven hreflang links (six languages + x-default) on every
page and in the sitemap; `og:*`/twitter tags with a per-language OG image and `og:locale`; robots
allows everything and points to the sitemap; every internal link and asset resolves; no `<script>`
other than JSON-LD; ~11–14 KB gzip per page.

## After launch: checklist

1. **Domain**: add `getfoglio.app` in Vercel ▸ Domains, redirect `www` to the apex, and check that
   `https://getfoglio.app/compare` redirects to `/compare/` (trailing slash) and that an unknown URL
   returns the 404 page with status 404.
2. **Google Search Console**: add a *Domain* property for `getfoglio.app` (DNS TXT record). The
   single property covers all languages; use the page filter (`/it/`, `/es/`, `/fr/`, `/de/`,
   `/pt/`) and the country filter to read each market. Submit `https://getfoglio.app/sitemap.xml`.
3. **Bing Webmaster Tools**: import the site from Search Console (or verify by DNS) and submit the
   same sitemap. Bing also feeds DuckDuckGo and Ecosia, which matter for this privacy-minded audience.
4. **Request indexing** (URL Inspection) for the six home pages and, first, these pages per
   language: `/alternatives/excel-for-mac/`, `/guides/open-xlsx-on-mac-without-excel/`,
   `/guides/open-csv-on-mac/`, `/compare/`.
5. **Validate** one page of each template with the Rich Results Test and the Schema.org validator
   (home, download, an alternatives page, a guide): no errors expected; the software-app result is
   not eligible for stars by design.
6. **Watch after 4–8 weeks**: impressions and average position per language for the xlsx guide,
   the CSV guide, the Excel alternative page and the function guide (de/fr/es variants are new
   targets). Check the International Targeting / hreflang report for "no return tags" errors.
   Re-check competitor prices and the "(2026)" titles every year.

