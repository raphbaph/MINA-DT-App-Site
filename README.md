# MINA Decentralized Treasury App — Site

A static informational site for the **MINA Decentralized Treasury (DT) App** proposal:
a proposal-maker guide covering the app concept, treasury lifecycle, adaptive voting
thresholds, deployment cadence, and break-glass safeguards. It also ships the full
source proposal document.

No build step, framework, or dependencies — plain HTML, CSS, and a small vanilla-JS
calculator. Open `index.html` directly or serve the folder with any static host.

## Structure

```
.
├── index.html            # Landing page / proposal-maker guide
├── css/
│   └── styles.css        # All site styles (extracted from index.html)
├── js/
│   └── calculator.js     # Threshold calculator powering the Thresholds section
├── images/               # Charts and diagrams, shared by both pages
│   └── image1–5.png
└── proposal/
    └── index.html        # Full proposal (Google Docs HTML export, kept as-is)
```

## Running locally

It's a static site, so either works:

```sh
# Just open it
open index.html

# …or serve it (nicer for relative paths / sharing)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Editing notes

- **Styles** live in `css/styles.css`. The landing page links it via
  `<link rel="stylesheet" href="css/styles.css">`.
- **The calculator** lives in `js/calculator.js`. It drives the Thresholds section
  via `#phase`, `#ask`, and the related output elements in `index.html`; the phase
  treasury sizes / modifiers and the `circulatingK` constant are defined at the top
  of that file.
- **`proposal/index.html`** is a raw Google Docs export (auto-generated `c1`, `c2`…
  classes, inlined fonts, single line). It is intentionally left untouched aside from
  rewriting image paths to `../images/`. Re-export from the source doc rather than
  hand-editing it.
- **Images** are shared: `index.html` references `images/…`, and the proposal
  references `../images/…`. Keep new assets in `images/`.
- Data points reflect the source report and should be confirmed before final
  publication.
