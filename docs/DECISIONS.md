# Architecture Decision Records (ADRs)

This document tracks significant design and architectural decisions made for the portfolio.

---

## ADR 001: Tom de Koning & Inácio Nakiti Inspired Design Language

- **Status**: Accepted
- **Context**: The portfolio needed a distinctive, high-end identity distinguishing it from generic developer templates.
- **Decision**: Adopt an editorial brutalist design language combining:
  - Deep dark charcoal canvas (`#0B0B0B`) with warm cream typography (`#E7E1D7`).
  - High-visibility vermillion orange accents (`#F34213` / `#FB5E27`).
  - Signature micro-interactions: The 4 Red Dots diamond motif and the Playfair Display italic 'O' (`playfair-o`).
  - Stacked kinetic marquees for immediate visual momentum.
- **Consequences**: Consistent, award-winning visual aesthetic; requires disciplined use of typography classes and color tokens.

---

## ADR 002: Zero-Asset Procedural Web Audio API Soundscape

- **Status**: Accepted
- **Context**: Background music traditionally relies on heavy `.mp3` or `.wav` files that increase bundle size, cause network latency, and loop awkwardly.
- **Decision**: Implement a procedural sound generator using native Web Audio API in `src/utils/audioEngine.js`.
  - Generates real-time soundscapes (`Pulse` synth arpeggios and `Drift` ambient chords) using oscillators, biquad filters, and gain nodes.
  - Adds instant UI feedback chimes and click sounds.
  - O-byte static asset overhead.
- **Consequences**: Instant loading, infinite seamless ambient variation; must strictly honor browser autoplay restrictions (requires explicit user click).

---

## ADR 003: Standalone Resume Page (`resume.html`)

- **Status**: Accepted
- **Context**: Visitors frequently need an unhindered, printable, and ATS-friendly copy of the resume without SPA navigation or full-screen WebGL overhead.
- **Decision**: Create a dedicated `resume.html` bundled directly by Vite with identical typography and styling, complete with a one-click PDF download button linking to `public/Girindra_Mohan_Resume.pdf`.
- **Consequences**: Clean URL (`/resume.html`), fast load times, and effortless printing (`@media print` support).

---

## ADR 004: Decoupled GitHub Pages CI/CD Pipeline

- **Status**: Accepted
- **Context**: A single-job GitHub Actions workflow was causing intermittent deployment failures (`Error: No artifacts named "github-pages" were found`) due to API race conditions when `deploy-pages` was invoked immediately after `upload-pages-artifact`.
- **Decision**: Split `.github/workflows/deploy.yml` into two separate, chained jobs:
  1. `build`: Compiles assets with Vite and uploads the artifact.
  2. `deploy`: Depends on `needs: build`, giving the GitHub artifact storage sufficient indexing time before invoking `deploy-pages`.
- **Consequences**: 100% reliable GitHub Pages deployments on every push.

---

## ADR 005: 5-Bar / 5-Dot Sound Bar Control Pattern

- **Status**: Accepted
- **Context**: The audio toggle previously used a small, generic mute icon that failed to convey whether sound was actively playing or communicate the soundscape feature clearly.
- **Decision**: Implement a dedicated sound pill button:
  - **Sound on**: 5 orange animated bars (`#FB5E27`) pulsing asynchronously with CSS keyframes + white text `Sound on`.
  - **Sound off**: 5 muted dots (`#9AA0AA`) + muted text `Sound off`.
- **Consequences**: Clear affordance, matches top-tier creative studio portfolio conventions.
