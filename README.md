# Tulane Math Club

Production-ready website for the Tulane University Math Club. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and lucide-react.

> **Brand note:** This site uses an unofficial text-based "Tulane Math Club" wordmark. Official Tulane marks (shield, seal, Angry Wave, athletics logos) are **not** included — those require approval from Tulane's licensing and brand offices. Once you have approved assets, replace `components/Wordmark.tsx` and add any logo files.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Other useful scripts:

```bash
npm run lint     # ESLint (next/core-web-vitals)
npm run build    # Production build
npm start        # Start the production build
```

## Edit content

All site content lives in `/lib`. No CMS, no env vars — just edit a TypeScript file and save.

### Events — `lib/events.ts`

Each event is an object with these fields:

| Field         | Notes                                                                 |
| ------------- | --------------------------------------------------------------------- |
| `id`          | Unique slug (used as React key).                                      |
| `title`       | Event name.                                                           |
| `category`    | One of `Problem Solving`, `Putnam Prep`, `Talk`, `Social`, `Career / Grad School`. |
| `date`        | ISO date `YYYY-MM-DD`.                                                |
| `time`        | Human string, e.g. `"6:00 – 7:30 PM"`.                                |
| `location`    | Building + room or address.                                           |
| `description` | 1–3 sentences.                                                        |
| `rsvpUrl`     | RSVP link (use `LINKS.mailingList` as a sensible default).            |

Add a new event by appending to the `events` array.

### Officers — `lib/officers.ts`

Replace the placeholder names, emails, and bios each year. Set `isAdvisor: true` for the faculty advisor entry. `initials` shows in the avatar circle when there is no photo.

### Resources — `lib/resources.ts`

Each resource has a `category` from a fixed list (see `lib/types.ts`). Use `"#"` for `href` if the link isn't ready yet — the card automatically labels it "Link coming soon".

### FAQs — `lib/faqs.ts`

Plain Q&A pairs used on the About / Join page.

### Placeholder links — `lib/links.ts`

Central registry of external URLs (WaveSync, mailing list, Discord, Instagram, calendar, math department). **Replace these as URLs become available.** Anything still set to `"#"` will render but won't navigate anywhere meaningful.

## Project structure

```
app/
  layout.tsx          Root layout (Navbar, Footer, SEO metadata)
  page.tsx            Home
  events/             /events route + client filter list
  putnam/             /putnam route
  resources/          /resources route + client search/filter
  officers/           /officers route
  about/              /about route + FAQ
  not-found.tsx       Custom 404
  globals.css         Tailwind layers + base styles
components/           Reusable UI (Navbar, Hero, EventCard, etc.)
lib/                  Data, types, helpers
```

## Theme

Tulane-inspired colors are configured in `tailwind.config.ts` under `colors.tulane.*`:

```
tulane-green             #255C4E
tulane-pale-green        #E7F2E0
tulane-olive             #9BA64A
tulane-secondary-green   #688C3E
tulane-cream             #F0EBDB
tulane-warm-gray         #EDECE8
tulane-sky               #6FC5E8
tulane-blue              #138094
tulane-navy              #001B3F
tulane-charcoal          #343333
```

Fonts: Helvetica Neue / Helvetica / Arial for sans, Georgia for serif headings.

## Deploy

### GitHub Pages (current setup)

This repo deploys to <https://tulanemathsociety.github.io/> via GitHub Actions.

One-time setup:

1. In the repo on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.

After that, every push to `main` triggers `.github/workflows/deploy.yml`, which runs `npm run build` and publishes the static `out/` directory to Pages.

Implementation notes:

- `next.config.mjs` sets `output: "export"` and `trailingSlash: true` so Next produces fully static HTML.
- `public/.nojekyll` is included so GitHub Pages doesn't run Jekyll (which would mangle the `_next/` folder).
- Because the repo is `tulanemathsociety.github.io`, the site serves from the root path — no `basePath` is needed. If you ever fork this into a project repo like `tulane-math-club`, add `basePath: "/tulane-math-club"` and `assetPrefix: "/tulane-math-club/"` to `next.config.mjs`.

### Vercel (alternative)

If you'd rather use Vercel: import the repo at <https://vercel.com>, accept defaults, deploy. You can leave the static-export config in place — Vercel handles both.

## Where to replace placeholders

| Placeholder                | Location                  |
| -------------------------- | ------------------------- |
| WaveSync URL               | `lib/links.ts → wavesync` |
| Mailing list address       | `lib/links.ts → mailingList` |
| Discord invite             | `lib/links.ts → discord`  |
| Instagram URL              | `lib/links.ts → instagram` |
| Calendar subscribe URL     | `lib/links.ts → calendar` |
| Math department URL        | `lib/links.ts → mathDept` |
| Officer names / bios       | `lib/officers.ts`         |
| Putnam archive link        | `app/putnam/page.tsx` (Browse archive button) |
| Resource external links    | `lib/resources.ts`        |

## License & attribution

Site code is for the Tulane Math Club to use freely. The wordmark and visual treatment in this repository are unofficial student work and do not imply endorsement by Tulane University.
