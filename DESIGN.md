---
colors:                  # sampled from MINA Foundation site + user art direction
  ink: "#2D2D2D"          # charcoal — primary text, dark cards
  inkSoft: "#4F5B67"      # slate — secondary text (AA on cool panels)
  base: "#E8EEEE"         # blue/green ultra-light — page background (NOT pure white)
  paper: "#FFFFFF"
  paperPanel: "#F0F4F7"   # cool off-white — light surfaces, table zebra
  paperPanelAlt: "#E9EFF4"
  line: "#B7CDD8"         # pale blue-gray — borders, rules, table grid
  accent: "#574AA0"       # interactive violet (links, CTA, button fill) — passes WCAG AA
  accentBrand: "#8576C5"  # MINA brand violet — decorative / large only (too light as text)
  accentSoft: "#E3E6F6"   # SECONDARY: ultra-light lavender, almost blue — fills, tints, chips
  lavenderInk: "#B7C0EE"  # readable lavender link/label on dark surfaces
  accentInk: "#FFFFFF"
  ok: "#00CA92"           # MINA teal — calculator "pass" state, "default stance" dot
  warn: "#FFC22D"         # MINA amber — eyebrow chips, threshold warnings
bloom:                    # large, soft, lightly-grainy gradient blooms on the base
  violet: "rgb(133 118 197 / 0.50)"
  blue: "rgb(150 174 222 / 0.42)"
  greenTeal: "rgb(168 210 202 / 0.45)"
  grainOpacity: "0.5"     # film-grain overlay (soft-light) so blooms read pixelated, not slick
typography:
  display:                # hero / large section headlines
    fontFamily: "Feijoa Display, Georgia, serif"   # licensed; serif fallback if unlicensed
    fontSize: "clamp(2.25rem, 1.4rem + 3.6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  heading:
    fontFamily: "Feijoa Display, Georgia, serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1.8vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.15
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  ui:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
  eyebrow:                # section kicker label
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.09em"
  mono:                   # formulas, $MINA/USD figures, addresses, numbered markers
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.9375rem"
    lineHeight: 1.55
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  "2xl": "64px"
  "3xl": "96px"
rounded:
  sm: "8px"
  md: "16px"
  lg: "40px"
  full: "9999px"
elevation:
  glass: "0 14px 44px rgb(45 45 45 / 0.12), inset 0 1px 0 rgb(255 255 255 / 0.85)"
  cardDark: "0 16px 44px rgb(20 24 28 / 0.22)"
components:
  button:                               # primary CTA — FLAT periwinkle pill, ink text
    backgroundColor: "#9A94E8"          # blue-violet, the complement to the amber chips
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm} {spacing.lg}"
    note: "flat color — no gloss, no emboss, no shadow"
  chip:                                 # section eyebrow tag — orangey-yellow, SHARP rectangle
    backgroundColor: "{colors.warn}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "0"                         # no radius

  glassHeader:                          # FLOATING, glossy, chunky nav (inset from all edges)
    backgroundColor: "rgb(255 255 255 / 0.7)"
    rounded: "{rounded.md}"
  glass:                                # glossy, vibrant fogged glass (calculator, stat cards)
    backgroundColor: "rgb(244 247 249 / 0.45)"
    rounded: "{rounded.md}"
  cardDark:                             # dark charcoal feature card
    backgroundColor: "{colors.ink}"
    textColor: "rgb(205 217 225 / 0.88)"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  eyebrowChip:                          # e.g. amber "SAFEGUARDS"
    backgroundColor: "{colors.warn}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
  table:
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
---

# MINA DT App Site — Design System

## Overview
Design language for the MINA Decentralized Treasury (DT) App community-update site.
Reference brand: **MINA Foundation** — clean, cool-toned, technical, trustworthy, but with
a **fun educational-primer** voice (the content teaches; the design keeps it inviting).

The depth recipe (from MINA Foundation): a **blue/green ultra-light base** (never pure
white) washed with **large, soft, lightly-grainy gradient blooms** (violet → blue →
green-teal), **glossy vibrant glass** for chrome/interactive surfaces, and **dark charcoal
feature cards** + a **dark footer** that pop against the light field. Headings are a
display serif; the accent violet is used sparingly; the secondary is an ultra-light
lavender-almost-blue. Dark mode is out of scope for v1.

## Colors
Charcoal `{colors.ink}` text on the `{colors.base}` blue/green ultra-light base.
`{colors.paper}`/`{colors.paperPanel}` back light surfaces and table zebra; `{colors.line}`
rules borders/grids. The interactive accent is `{colors.accent}` (a darker violet that
passes WCAG AA as text and as a button fill); `{colors.accentBrand}` (the lighter MINA
brand violet) is decorative/large-only. The **secondary** `{colors.accentSoft}` is an
ultra-light lavender, almost blue — for soft fills, tints, chips, and the glass sheen;
`{colors.lavenderInk}` is its readable form for links/labels on dark surfaces. `{colors.ok}`
(teal) / `{colors.warn}` (amber) are status + accent-chip colors. All text meets ≥ 4.5:1.

The background blooms (`{bloom.violet}`, `{bloom.blue}`, `{bloom.greenTeal}`) are large and
soft, anchored to corners, with a film-grain overlay (`{bloom.grainOpacity}`, soft-light)
so they read **lightly pixelated**, not slick.

## Typography
Headings use **Feijoa Display** (`{typography.display}`/`{typography.heading}`) — the MINA
display serif (licensed; serif fallback otherwise). Body + UI use **IBM Plex Sans**.
Section kickers use the `{typography.eyebrow}` mono label (uppercase, tracked). **IBM Plex
Mono** renders formulas, $MINA/USD figures, account addresses, and numbered markers. IBM
Plex is open (OFL); only Feijoa needs a license. Big serif section headlines paired with a
small mono eyebrow are the primer's signature rhythm.

## Layout
Spacing follows `{spacing.*}` (4 → 96px). Content caps ~1180px; prose ~62ch. The landing is
a single-column **educational primer**: each section = mono eyebrow (or amber chip) + a
large serif headline + supporting body, then its artifacts (cards, figure, table, or the
calculator). Data tables scroll horizontally on mobile.

## Elevation & Depth
Depth comes from the **light field vs. dark cards** contrast plus glass gloss — not heavy
shadows. Glossy glass uses `{elevation.glass}` (soft drop + bright inset top highlight) over
the bloomed background, with a saturation/brightness boost so it looks vibrant. Dark cards
use `{elevation.cardDark}`. Borders + cool fills carry the rest.

## Shapes
Softly rounded: `{rounded.md}` (16px) for cards, glass, calculator; `{rounded.sm}` (8px) for
inputs, chips, code; `{rounded.full}` (pill) for CTAs, badges, slider thumb; `{rounded.lg}`
(40px) for occasional large feature panels. No decorative blobs — blooms + glass + rounding
do the work.

## Components
- **Button:** `components.button` — pill, **flat periwinkle (blue-violet) fill with ink text**,
  no gloss/emboss/shadow; chosen as the complement to the amber chips. Visible focus ring.
  Secondary = translucent white pill with a line border.
- **Section eyebrow chip:** `components.chip` — every section opens with the **orangey-yellow
  (amber) tag** (uppercase mono, **sharp rectangle, no radius**), then the serif headline.
  Buttons use a small 8px radius — so the sharp tags and rounded buttons read distinctly.
- **Floating glass header:** `components.glassHeader` — a glossy, chunky glass bar that
  floats inset from all edges (not touching the sides), heavy blur + saturation, rounded.
- **Stat cards:** big bold **sans** numbers (IBM Plex Sans) with the description below — not
  serif, no fussy inline unit.
- **Glass (glossy):** `components.glass` — the calculator shell and stat/dossier cards;
  gradient sheen + inset highlight + saturation boost over the bloomed base.
- **Dark feature card:** `components.cardDark` — concept/failure-mode/safeguard/update cards
  and the "phase transition rules" panel; white serif heading, light cool-gray body, lavender
  links.
- **Eyebrow:** mono uppercase kicker; or the amber `components.eyebrowChip` for emphasis
  (e.g. "SAFEGUARDS").
- **Numbered cards:** 01–05 markers (mono, accent-colored) over serif titles — used for the
  break-glass criteria. A deliberate editorial device here, not slop.
- **Data tables:** dark charcoal header row, white headers; zebra body via `{colors.paperPanel}`,
  right-aligned mono numerics, addresses in mono; `<caption>` + scoped headers.
- **Figures:** diagrams (lifecycle, S-curve, deployment flow, balance distribution) with
  captions, optimized via `astro:assets`.
- **Footer:** dark charcoal, light text.

## Do's and Don'ts
- **Do** keep the base a cool blue/green ultra-light; let dark cards + glass create depth.
- **Do** keep blooms large, soft, and grainy (not hard radial glows).
- **Do** use the accent violet sparingly; let the ultra-light lavender carry secondary tints.
- **Do** pair a small mono eyebrow with a large serif headline per section.
- **Do** use Feijoa Display for headings, IBM Plex Sans for prose, IBM Plex Mono for numbers.
- **Don't** use pure white as the page background, or saturated violet for large soft fills.
- **Don't** make glass flat/matte — it should be glossy and vibrant.
- **Don't** center long-form body text or exceed ~62ch measure (data tables exempt).
- **Don't** ship AI-design "slop" tells — `/impeccable audit` (rendered + file modes) must be
  clean or carry a documented ignore.
