# AGENTS.md — MINA DT App Site

Guide for any agent or contributor working in this repo. Read this first — then read the two
sources of truth before making changes, and **keep them in sync** as you work:

- **[`PRODUCT.md`](./PRODUCT.md)** — what this is, the information architecture, audience, voice.
- **[`DESIGN.md`](./DESIGN.md)** — the design system (tokens, surfaces, components, do's/don'ts),
  in the [design.md](https://github.com/google-labs-code/design.md) spec format.

Any product/IA change → update `PRODUCT.md`. Any visual/token change → update `DESIGN.md`
(and the matching `@theme` tokens in `src/styles/global.css`).

## What this is
A community-facing site for the **MINA Decentralized Treasury (DT) App**. The **landing
(`/`) is the main deliverable**: a fun, on-brand **educational primer** that teaches the DT
App (concept, failure modes, proposal lifecycle, adaptive S-curve thresholds + an
interactive calculator, deployment cadence, break-glass safeguards, validator concentration,
next steps). `/updates` is a **forthcoming feed** of proposals/community updates as slug
content — it may be sparse or empty; never make the primer depend on updates existing.

## Stack
- **Astro** (static output), **Tailwind CSS v4** (Vite plugin), **MDX** content collections.
- **sharp** for `astro:assets` image optimization.
- **pnpm** (hardened — see Supply chain below). Node ≥ 20, pnpm ≥ 11.

## Commands
```sh
pnpm install        # build scripts are allowlisted; see Supply chain
pnpm dev            # http://localhost:4321
pnpm build          # static build → dist/
pnpm preview        # serve dist/
```

## Structure
```
src/
  content.config.ts        # `updates` collection (glob loader)
  content/updates/*.mdx     # one file per update/proposal ← drop new ones here
  layouts/BaseLayout.astro  # html shell, fonts, global styles
  components/               # Header (floating glossy glass), Footer (dark), Hero,
                            # ThresholdCalculator (island), InfoSection (dark card), Figure,
                            # TableWrap (scrollable table), and the four SVG charts:
                            # SCurveChart, DeployFlowChart, LifecycleChart, BalanceChart
  pages/
    index.astro             # the educational primer (MAIN content)
    updates/index.astro     # forthcoming updates feed
    updates/[...slug].astro  # one page per update (slug from frontmatter or filename)
  assets/                   # proposal-stages.png (only remaining raster; rest are SVG)
  styles/global.css         # Tailwind import + @theme tokens (mirror DESIGN.md) + glass/dark/doc
public/                     # favicon, static files
DESIGN.md  PRODUCT.md       # design + product source of truth
```

## Design system (summary — see DESIGN.md)
- **Base** is a blue/green ultra-light (`#E8EEEE`), never pure white, washed with large,
  soft, **lightly-grainy gradient blooms** (violet → blue → green-teal).
- **Glossy, vibrant glass** for chrome/interactive surfaces; **dark charcoal feature cards**
  and a **dark footer** create depth against the light field.
- Type: **Feijoa Display** (serif headings) + **IBM Plex Sans** (body) + **IBM Plex Mono**
  (numbers/eyebrows). Accent violet `#574AA0` (AA-safe); secondary is an ultra-light
  lavender-almost-blue `#E3E6F6`.
- Section rhythm: mono eyebrow (or amber chip) + large serif headline + body + artifact.
- Keep `global.css` `@theme` tokens in sync with `DESIGN.md`.

## Adding an update
Drop `src/content/updates/<slug>.mdx` with frontmatter; rebuild — it gets `/updates/<slug>`
and appears in the listing automatically:
```mdx
---
title: "Treasury update — July 2026"
summary: "One-line summary for listings + meta."
pubDate: 2026-07-01
version: "v2"            # optional
slug: "treasury-2026-07"  # optional; defaults to filename
draft: false             # true = unpublished
---
import Figure from '../../components/Figure.astro';
## Heading
…
```

## Supply chain / AI opsec (pnpm)
`pnpm-workspace.yaml` is the security baseline — do not weaken it without reason:
- `minimumReleaseAge` quarantines newly published versions (cooldown). Expect installs to
  resolve a slightly older, vetted version (this is intended).
- `onlyBuiltDependencies` + `allowBuilds` allowlist the *only* packages that may run install
  scripts (`esbuild`, `sharp`, `@tailwindcss/oxide`). Add a package here only after review.
- `dangerouslyAllowAllBuilds: false`; `verifyDepsBeforeRun` flags lockfile drift.
- Commit `pnpm-lock.yaml`; CI uses `pnpm install --frozen-lockfile`.

## Design QA — Impeccable
This project uses **Impeccable** (impeccable.style) to police AI-design "slop". Run both
modes before shipping visual changes:
```sh
pnpm build
npx impeccable detect http://localhost:4321/ http://localhost:4321/updates/<slug>   # rendered: contrast, layout, line-length
npx impeccable detect dist/index.html dist/updates/<slug>/index.html                # static: em-dash overuse, markers
```
Fix real issues (contrast, nested cards). Justified exceptions (e.g. wide data tables,
source-document voice) are recorded in `.impeccable/config.json` via `impeccable ignores`
with a `--reason` — never silently. Aim for a clean audit or documented ignores only.

## Backlog / future
- **Last raster → SVG.** All four data diagrams are now native SVG components. Only
  `proposal-stages.png` (the proposal stage-descriptions table) remains a raster, used via
  `Figure` in `proposal-v1.mdx` — optionally redraw as an HTML table or SVG before launch.
- Confirm the X/Twitter handle in `Header.astro` (placeholder); sort out **Feijoa Display**
  licensing (serif fallback until then).

## Conventions / gotchas
- **Don't reintroduce a pure-white background** or flat/matte glass — see DESIGN.md.
- Keep the **threshold calculator math** identical to the source proposal (constants in
  `ThresholdCalculator.astro`): `circulatingK = 1288500`, the phase modifiers, and the
  `curve(x,c)=x/(x+c(1-x))` S-curve. Verify outputs after edits.
- `sharp` must be a direct dependency (pnpm's strict layout won't let Astro resolve it
  otherwise).
- **Glass blur:** apply `backdrop-filter` via Tailwind `backdrop-blur-*` utilities, not a
  custom CSS property — Lightning CSS strips the unprefixed `backdrop-filter` from hand-written
  rules (leaving `-webkit-` only, so Firefox gets no blur). The header uses `backdrop-blur-[40px]`.
- **Deployment:** the repo is connected to **Vercel** (Git integration — no GitHub Actions).
  `main` → Production, every branch/PR → Preview. `vercel.json` pins
  `framework: astro`, `pnpm build` → `dist/`, and `pnpm install --frozen-lockfile`. For a
  custom subdomain (e.g. `dthq.minafoundation.com`) set `site` in `astro.config.mjs` for
  canonical/OG URLs — no `base` needed (served at the domain root).
