# Foglio website: design note

## Direction: "the sheet"

The site is drawn the way the app icon is drawn: a white sheet with hairline grid lines, a pale mint
header row, one solid green **selected cell**, and the icon's green gradient around the sheet.
It is light-first, left-aligned and editorial: big tight headings, few boxes, content arranged on
hairline rules instead of in floating cards. What used to be cards are cells of one shared grid.

Motifs, used sparingly:

- **Hairline grid.** Groups (stats, features, link lists) are one grid whose cells are divided by
  1px rules in the icon's grid-line colour. No shadows, no per-card borders.
- **Selected cell.** A 2px green outline with a small square fill handle in the bottom-right corner,
  like a selected cell in a spreadsheet. It marks the price cell, the Foglio column of the
  comparison table, and appears on hover over linked cells.
- **Header row.** The icon's pale mint is the background of table header rows, step numbers and
  format tags.
- **The frame.** The icon's gradient is used on two surfaces only: the green frame around the hero
  screenshot (the screenshot is the "sheet" in the "icon") and the closing download band (a deeper
  shade of the same gradient, so white text passes AA).

The old look (dark neutrals, centred hero, radial glow, faint background grid, card grids with
shadows) is gone.

## Palette (sampled from `foglio/assets/icon-1024.png`)

| Sample in the icon | Hex |
|---|---|
| Frame, top | `#4ED894` |
| Frame, middle / selected cell | `#23B576` |
| Frame, bottom | `#0B8C62` |
| Header row | `#D0EEE2` |
| Cells | `#FAFBFA` → `#F2F5F4` |
| Grid lines | `#D3DFD9` |

### Tokens

| Token | Light | Dark | Use |
|---|---|---|---|
| `--paper` | `#FFFFFF` | `#0E1512` | page |
| `--paper-2` | `#F4F8F6` | `#111B17` | quiet surfaces (footer, code, group rows) |
| `--head` | `#E4F5EC` | `#13241D` | header-row tint (tables, notes) |
| `--mint` | `#D0EEE2` | `#173A2C` | small header-row accents (tags, step numbers) |
| `--rule` | `#D3DFD9` | `#22322B` | hairlines |
| `--rule-strong` | `#B5C8BF` | `#33473F` | inputs, bars of other apps |
| `--ink` | `#0B1F17` | `#E8F3EE` | headings, body |
| `--ink-2` | `#3D5148` | `#B2C6BC` | secondary text |
| `--muted` | `#55685F` | `#8EA49A` | meta text, captions |
| `--green-ink` | `#0A7A55` | `#4ED894` | links, small green text |
| `--green` | `#23B576` | `#2FC482` | selection outline, fills (non-text) |
| `--grad` | `#4ED894 → #23B576` | same | primary button, selected cell |
| `--frame` | `#4ED894 → #0B8C62` | `#23B576 → #0A5A40` | hero frame |
| `--band` | `#0A7D57 → #065A3F` | `#0B6E4C → #06382A` | closing download band |
| `--on-green` | `#06291C` | `#06291C` | text on `--grad` |
| `--good` / `--bad` / `--partial` | `#0A7A55` / `#B93A26` / `#8F6206` | `#4ED894` / `#F0806C` / `#E3B755` | comparison tones |

### Contrast (WCAG 2.x, computed)

Light:

- ink on paper 17.2:1 · ink-2 on paper 8.5:1 · muted on paper 5.95:1, on paper-2 5.55:1, on head
  5.26:1, on mint 4.82:1
- green-ink on paper 5.35:1, on paper-2 4.99:1, on head 4.73:1, on the Foglio column tint 4.93:1
- on-green on `#4ED894` 8.63:1, on `#23B576` 5.92:1 (both ends of the button gradient)
- white on the band's lightest stop `#0A7D57` 5.14:1
- bad 5.68:1, partial 5.36:1 on paper

Dark:

- ink on paper 16.3:1 · ink-2 10.3:1 · muted 6.99:1 on paper, 6.64:1 on paper-2
- green-ink on paper 10.2:1, on head 8.92:1
- white on the band's lightest stop `#0B6E4C` 6.27:1
- bad 7.06:1 (6.17:1 on head), partial 9.84:1

Rule: green text is never set on `--mint` (4.33:1); text on the band is always pure white.

## Type

System stack only (`-apple-system, BlinkMacSystemFont, …`). Large numbers use
`ui-rounded` (SF Pro Rounded in Safari, a nod to the icon's rounded square) with tabular figures,
falling back to the system font elsewhere. Small labels (eyebrow, breadcrumbs, table groups,
footer titles, format tags) use `ui-monospace` in caps-free small text, the spreadsheet's
"cell reference" voice.

| Role | Size | Weight / tracking |
|---|---|---|
| Home h1 | `clamp(2.4rem, 1.3rem + 4.6vw, 4.9rem)`, line-height 1.02 | 760, -0.045em |
| Page h1 | `clamp(2.2rem, 1.3rem + 3.2vw, 3.7rem)` | 750, -0.04em |
| h2 | `clamp(1.7rem, 1.2rem + 1.8vw, 2.6rem)` | 720, -0.03em |
| h3 | 1.2rem | 650, -0.01em |
| Lead | `clamp(1.12rem, 1rem + .4vw, 1.3rem)` | 400 |
| Body | 17px / 1.6 (16px under 620px); prose 1.08rem / 1.72 | 400 |
| Label | 0.78rem mono | 500 |

Headings balance (`text-wrap: balance`). Under 620px, h1 and h2 also hyphenate (`hyphens: auto`
with a 12-character minimum; the pages carry `lang`), so long German and French compounds wrap at
375px without splitting names like "LibreOffice" on desktop.

## Space and layout

- 4px base; steps 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
- Content width 1200px, reading width 720px. Side gutter 24px, **16px under 620px**.
- Sections are separated by a full-width hairline and 96px (64px mobile) of space, not by
  alternating backgrounds. Section heads are left-aligned: the h2 on the left, the lead on the right
  (stacked on narrow screens).
- Radii: 6px (tags, inputs), 10px (buttons, menus), 14px (screenshot), 28px (hero frame).

## Components

- **Header:** paper, hairline bottom, sticky with blur. Active nav item has a 2px green underline.
  Language picker and menu are `<details>` with 40px+ targets.
- **Buttons:** primary = `--grad` with `--on-green` text; secondary = paper with a `--rule-strong`
  border. 48px tall (36px compact in the header).
- **Stats:** one row of four cells; the price cell is the selected cell.
- **Feature / link grids:** cells in a hairline grid; linked cells show the selection outline and
  fill handle on hover and focus.
- **Bars:** square-ended cell-like bars; Foglio's bar uses the gradient.
- **Comparison table:** mint header row, hairline grid both ways, sticky first column and sticky
  group labels, mono group rows, Foglio column outlined as a selected column, tone icons in tinted
  squares. On phones it bleeds to the screen edges and scrolls sideways inside its own scroller.
- **Page heads:** pages with wide content (compare, the two indexes) align their head to the full
  content width; reading pages (technology, download, articles) use the 720px column throughout.
- **404:** the icon, a big rounded "404" in green, the home button and the language links.
- **FAQ:** heading on the left (sticky on wide screens), questions on the right in hairline rows,
  a square +/− marker that turns into the green selected cell when open.
- **Prose:** 720px column, h2 with a hairline above, square green bullets.
- **Closing band:** `--band` gradient, white text, primary button keeps its mint gradient.
- **Motion:** colour/outline transitions of 120–160ms on hover only; disabled under
  `prefers-reduced-motion`. No JavaScript, no web fonts, no external requests.
