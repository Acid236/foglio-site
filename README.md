# getfoglio.app

The website of [Foglio](https://github.com/GetFoglio/foglio), the free, open-source, native
spreadsheet app for macOS.

Next.js (App Router) + TypeScript, exported as static HTML. After `next build`,
`scripts/postbuild.mjs` removes the client JavaScript the pages do not need, so visitors get plain
HTML with inline CSS: about 13 KB (compressed) per page, plus one ~20 KB AVIF screenshot.

```sh
npm ci
npm run dev          # http://localhost:3000
npm run lint && npm run typecheck
npm run build        # → out/ (static, no JavaScript)
npx serve out        # preview the exact output
```

## Deploy on Vercel

Import this repository in Vercel. `vercel.json` already sets everything: install `npm ci`, build
`npm run build`, output directory `out`, framework "Other" (static), trailing slashes, security
headers (including a CSP with `script-src 'none'`) and caching. Then add the domain
`getfoglio.app` in the project's *Domains* settings.

## Content

- Six languages: English at `/`, and Italian, Spanish, French, German and Portuguese (Brazil) under
  `/it/`, `/es/`, `/fr/`, `/de/`, `/pt/`. Each has its own root layout in `src/app/(<code>)`.
- All text is in `src/content/`: `copy.en.ts`, `copy.it.ts`, `comparison.ts`, `alternatives.ts`,
  `guides.ts` for English and Italian, `<code>/copy.ts`, `<code>/comparison.ts`, `<code>/articles.ts`
  for the others. Measured numbers come only from `src/content/facts.ts`. `SEO.md` has the keyword
  map, the reasoning and the post-launch checklist.
- Screenshots in `public/screenshots/` are real renders of the app (light/dark, EN/IT, 720 and
  1213 px, AVIF + WebP).

## License

MIT or Apache-2.0, at your option, like Foglio itself.
