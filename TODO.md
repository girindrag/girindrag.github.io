# Project Roadmap & Task Tracker (`TODO.md`)

This file tracks the current state, recent releases, and planned enhancements for `girindrag.github.io`.

---

## 🟢 Completed Milestones

- [x] **Tom de Koning & Nakiti Design Overhaul**: Integrated luxury brutalism typography, 4-red-dots diamond motif, and deep charcoal/cream palette.
- [x] **Stack Kinetic Marquee Hero**: 3-line kinetic running marquee (`GIRINDRA / MOHAN / .WORK`) with vermillion accents.
- [x] **Procedural Web Audio Engine**: Zero-asset generative ambient soundscapes (`Pulse` synth arpeggios & `Drift` lush pads) with instant click and chime feedback.
- [x] **Interactive Sound Bar**: Redesigned bottom dock pill button with 5 animated equalizer bars (`Sound on`) and 5 muted dots (`Sound off`).
- [x] **Skhiladze Interactive Cursor**: Dual-layer precision cursor with ambient radial spotlight (`.cur-light`), glowing core dot (`.cur__p`), magnetic hover ring (`.cur__r`), dynamic action badges (`.cur__l`), and exponential lerp motion physics.
- [x] **Editorial Resume Page (`resume.html`)**: Clean standalone resume view styled with site typography, ATS-friendly semantic markup, and PDF download button.
- [x] **CI/CD Reliability**: Fixed GitHub Actions workflow race condition by separating `build` and `deploy` jobs for 100% reliable GitHub Pages deployment.
- [x] **Agent Infrastructure**: Created `AGENTS.md`, `docs/ARCHITECTURE.md`, `docs/DECISIONS.md`, `.agents/skills/`, and `TODO.md` for fast, autonomous updates.

---

## 🟡 In Progress / Active Backlog

- [ ] **OG Meta Tags & Social Sharing Previews**: Verify Twitter Card and Open Graph preview image generation for rich social sharing cards.
- [ ] **Mobile Performance Optimization**: Ensure touch target sizing and marquee frame rates stay at 60 FPS on lower-power mobile devices.
- [ ] **Interactive Project Filters**: Add filter tags (e.g. AI / Web / Cloud) to the `TomCurvedShowcase` monitor.
- [ ] **Lighthouse 100/100 Audit**: Run automated Lighthouse checks to ensure perfect scores across Performance, Accessibility, Best Practices, and SEO.

---

## 📋 Fast Change Checklist for Agents

When making updates:
1. Check `AGENTS.md` for rules and design constraints.
2. Edit `src/data/portfolioData.js` for content/data changes.
3. Test build: `npm run build`.
4. Commit, push to `main`, and verify deployment via `.agents/skills/deploy-and-verify/SKILL.md`.
