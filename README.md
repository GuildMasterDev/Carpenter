# 🪚 Carpenter

An interactive construction carpentry resource and tool suite. Reference guides, real-world calculators, and a live wall-framing visualizer — all in a single HTML file, no build system, no dependencies.

**Live demo:** https://guildmasterdev.github.io/Carpenter

Run it three ways:
- **In any browser** — open `index.html`, no server needed
- **As a desktop app** — Electron wrapper for macOS / Windows / Linux
- **As a PWA** — install from the live demo for full offline use on desktop or mobile

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
- Optional Electron wrapper (dev-time only)
- Service worker for PWA / offline use

## Run in a browser

Just open `index.html` in any modern browser. That's it.

## Run as a desktop app (Electron)

```sh
npm install
npm start
```

Builds installers/packages for the current platform with `electron-builder`:

```sh
npm run dist          # current platform
npm run dist:mac      # macOS dmg + zip (x64 + arm64)
npm run dist:win      # Windows nsis + portable (x64)
npm run dist:linux    # Linux AppImage + deb (x64)
```

Output lands in `dist/`.

## Install as a PWA

Visit the [live demo](https://guildmasterdev.github.io/Carpenter) in a Chromium-based browser or Safari, then use your browser's "Install app" / "Add to Home Screen" option. After the first visit Carpenter caches itself and works fully offline.

## Disclaimer

Carpenter is a reference and estimating aid. It is **not** a substitute for professional engineering, local building codes, or a licensed contractor. Always verify load, span, and code requirements with your local authority having jurisdiction.

## License

MIT — see [LICENSE](LICENSE).
