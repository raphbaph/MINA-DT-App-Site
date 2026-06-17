# Product — MINA DT App Site

## What this is
A community-facing site for the **MINA Decentralized Treasury (DT) App**. Its purpose is
to publish clear, credible **community updates / releases** about the DT App and its
governance proposal — starting with the inaugural proposal that surfaces discussion points
for deploying a DAO Treasury ZK App so the community can gradually take control of the
decentralized treasury.

## Audience
The MINA community: token holders, validators, prospective proposal authors, and
governance participants. Technically literate, skeptical, governance-minded. They want
substance (parameters, thresholds, safeguards, deployment cadence), not marketing.

## Information architecture
- **The landing (`/`) is the main deliverable right now** — the educational primer covering
  everything we have so far about the DT App.
- **`/updates` is a forthcoming feed** for proposals and community updates, authored as slug
  content. It may be sparse or empty for now; **community updates are forthcoming**. The
  inaugural formal proposal (`proposal-v1`) is the first such document and is what the primer
  links to as "the full proposal." Everything must degrade gracefully when `/updates` has
  few or no entries (the primer never depends on updates existing).

## Content model — updates as Markdown
Updates/proposals are a **content collection**, each authored as one Markdown/MDX file in
`src/content/updates/`. Astro generates a page per file via a dynamic route, and an index
lists them by date. **Publishing a new update = dropping in a Markdown file** with
frontmatter (`title`, `summary`, `pubDate`, optional `version`/`slug`, `draft`); no code
changes. This keeps the site low-maintenance and lets non-deep-technical contributors add
updates by writing Markdown.

## Surfaces
- **Landing (`/`) — brand surface, as a fun educational primer.** A single-column,
  sectioned walkthrough that *teaches* the DT App: concept + the three failure modes,
  proposal lifecycle (with the epoch diagram), adaptive thresholds (with the S-curve and the
  interactive calculator), the deployment cadence (data table + flow diagram + a "phase
  transition rules" card), break-glass safeguards (the numbered criteria, default stance,
  sunset path), validator/whale concentration, and next steps — ending with the latest
  updates. Each section: mono eyebrow (or amber chip) + large serif headline + body +
  artifact. On-brand, but inviting and explanatory rather than a terse marketing page.
- **Update / release reader (`/updates/<slug>`) — product/document surface.** Renders a
  release's MDX: long-form prose, data tables (deployment cadence, validator holdings),
  formulas, and figures. Optimized for reading comfort and reference.

## Voice & tone
Credible, technical, transparent, measured — but **approachable and educational**. The
landing should feel like a well-made primer that helps a community member genuinely
understand the mechanism (and its tradeoffs and failure modes) before forming an opinion,
not a hype page. Explains honestly (the three failure modes, break-glass limitations).
Numbers and parameters are precise and sourced. The full formal proposal lives in `/updates`.

The visual register reinforces this: **institutional gravitas over SaaS-friendliness** —
clean, crisp, serious (low corner radii, restrained accents, document-first), the feel of a
foundation treasury proposal, not a product marketing site. See DESIGN.md (Shapes, Do's/Don'ts).

## Key interactive feature
The **threshold calculator**: given a deployment phase and a proposal ask (% of treasury),
it computes required participation and approval (S-curve adaptive quorum) and the resulting
MINA figures. It must stay accurate to the proposal's formulas and constants.
