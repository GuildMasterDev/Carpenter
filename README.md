# 🪚 Carpenter

An interactive construction carpentry resource and tool suite. Reference guides, real-world calculators, and a live wall-framing visualizer — all in a single HTML file, no build system, no dependencies.

**Live demo:** https://guildmasterdev.github.io/Carpenter

## Features

- **Resources** — curated, categorized references on framing, joinery, roofing, decks & stairs, and tools
- **Calculators**
  - Lumber estimator (walls, studs, plates, headers)
  - Stair calculator with live SVG preview and code checks
  - Roof pitch converter (rise/run ↔ degrees) with SVG diagram
  - Board foot calculator with cost estimate
  - IRC span table quick reference
- **Reference** — nail schedule, nominal vs actual lumber dimensions, common angles, fastener guide, wood species comparison
- **Wall Framing Visualizer** — live SVG elevation showing plates, studs, king/trimmer studs, headers, cripples, and sills, with a generated materials list
- Print-friendly mode, copy-to-clipboard on calculator outputs, keyboard-friendly inputs
- Dark theme with warm wood accents

## Tech Stack

- Vanilla JavaScript — no frameworks
- Plain HTML + inline CSS
- Inline SVG for diagrams
- No build system, no npm dependencies at runtime
- Deployed via GitHub Pages

## Usage

Open `index.html` in any modern browser. That's it.

## Disclaimer

Carpenter is a reference and estimating aid. It is **not** a substitute for professional engineering, local building codes, or a licensed contractor. Always verify load, span, and code requirements with your local authority having jurisdiction.

## License

MIT — see [LICENSE](LICENSE).
