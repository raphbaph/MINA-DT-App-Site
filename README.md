# MINA DT App — Site

A community-facing site for the **MINA Decentralized Treasury (DT) App**. It publishes
**updates / releases** about the DT App and its governance proposal — starting with the
inaugural candidate proposal (proposal lifecycle, adaptive S-curve quorum, phased
deployment cadence, and break-glass safeguards) — plus an interactive threshold
calculator.

Built with **Astro** + **Tailwind CSS v4**. Content lives in Markdown/MDX content
collections, so publishing a new update is just dropping in a file.

## Tech stack

- **Astro** (static output) — pages, content collections, image optimization (`sharp`).
- **Tailwind CSS v4** (via the official Vite plugin) — design tokens in
  `src/styles/global.css` mirror [`DESIGN.md`](./DESIGN.md).
- **MDX** — the proposal/updates content.
- **pnpm** — package manager, hardened (see Supply-chain hardening below).

## Getting started

```sh
pnpm install      # install dependencies (build scripts are allowlisted; see below)
pnpm dev          # dev server at http://localhost:4321
pnpm build        # static build to dist/
pnpm preview      # serve the built dist/
```

Requires Node ≥ 20 and pnpm ≥ 11 (enforced via `engines` + `engine-strict`).

## Project structure

```
src/
  content.config.ts          # `updates` collection schema (glob loader)
  content/updates/*.mdx       # one file per update/release  ← drop new ones here
  layouts/BaseLayout.astro    # html shell, fonts, global styles
  components/                 # Header, Footer, Hero, ThresholdCalculator (island),
                              # InfoSection (fogged glass), Figure
  pages/
    index.astro               # landing: hero, concepts, calculator, latest updates
    updates/index.astro       # list of all updates
    updates/[...slug].astro   # one page per update (slug from frontmatter or filename)
  assets/                     # diagrams (optimized at build via astro:assets)
  styles/global.css           # Tailwind import + @theme tokens + glass + .doc styles
public/                       # favicon, static files
DESIGN.md                     # design system (design.md spec format)
PRODUCT.md                    # product context
```

## Publishing a new update

Drop a Markdown/MDX file into `src/content/updates/` with frontmatter, then rebuild —
it gets its own page at `/updates/<slug>` and appears in the listing automatically.

```mdx
---
title: "Treasury update — July 2026"
summary: "One-line summary shown in listings and meta description."
pubDate: 2026-07-01
version: "v2"          # optional
slug: "treasury-2026-07"  # optional; defaults to the filename
draft: false           # set true to keep it unpublished
---

import Figure from '../../components/Figure.astro';

## Section heading
…content…
```

## Design

The design system is defined in [`DESIGN.md`](./DESIGN.md) using the
[design.md](https://github.com/google-labs-code/design.md) format (YAML token
front-matter + canonical sections). Tokens are sampled from the MINA Foundation brand:
charcoal `#2D2D2D`, a violet accent `#8576C5`, cool blue-gray neutrals; Feijoa Display
(headings) + IBM Plex Sans (body) + IBM Plex Mono (numbers); generous rounding, soft
shadows, and fogged-glass information sections. `PRODUCT.md` describes the product
context. Both are consumed by [Impeccable](https://impeccable.style/).

> Feijoa Display is a licensed typeface; the site falls back to a serif stack where it
> isn't available. IBM Plex Sans/Mono are open (OFL) and loaded from Google Fonts.

## Deployment

Currently a local static build (`dist/`). When hosted on a subdomain root
(e.g. `https://dthq.minafoundation.com`), set `site` in `astro.config.mjs` for canonical
URLs, sitemap, and OG tags — no `base` path needed.

## Supply-chain hardening (pnpm)

`pnpm-workspace.yaml` sets a security baseline for AI-assisted installs:

- `minimumReleaseAge` — quarantines newly published versions (cooldown before they can be
  installed), defending against the detection window after a package is compromised.
- `onlyBuiltDependencies` + `allowBuilds` — only explicitly approved packages
  (`esbuild`, `sharp`, `@tailwindcss/oxide`) may run install/build scripts.
- `dangerouslyAllowAllBuilds: false`, `verifyDepsBeforeRun` — no blanket build approval;
  refuse to run on lockfile drift.

Commit `pnpm-lock.yaml`; use `pnpm install --frozen-lockfile` in CI.
