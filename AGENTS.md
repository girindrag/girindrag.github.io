# AGENTS.md — Developer & AI Agent Guidelines for Girindra's Portfolio

Welcome! This document provides always-on rules, design constraints, and operational guidelines for building, modifying, and maintaining Girindra Mohan's personal portfolio website (`https://girindrag.github.io/`).

---

## 1. Project Overview & Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom CSS Keyframes (`src/index.css`)
- **Icons**: Lucide React (`lucide-react`)
- **Audio System**: Web Audio API Procedural Synthesizer (`src/utils/audioEngine.js`)
- **Deployment**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
- **Single Source of Truth**: `src/data/portfolioData.js`

---

## 2. Core Design System & Aesthetic Principles

The website is inspired by **Tom de Koning** (`tomdekoning.work`) and **Inácio Nakiti** (`inacionakiti.com`), featuring luxury brutalist typography, warm editorial minimalism, and interactive micro-details.

### Palette & Tokens
| Token | Hex / Class | Usage |
|---|---|---|
| Background | `#0B0B0B` | Core page background, deepest charcoal |
| Text Primary | `#E7E1D7` | Warm cream white for primary headings and body |
| Text Muted | `#8E8B83` / `#9AA0AA` | Slate grey for labels, metadata, subheaders |
| Accent Vermillion | `#F34213` / `#FB5E27` | Brand electric orange / vermillion accent |
| Elevated Glass | `rgba(20, 20, 20, 0.85)` | `tom-glass-elevated` panels and containers |
| Pill Surface | `#181A22` / `#1F2129` | Floating bottom dock buttons and controls |

### Signature Visual Motifs
1. **The Four Red Dots**: 4-dot diamond emblem (`FourRedDots` component in `TomCornerHUD.jsx`) with subtle pulsing glow (`animate-four-dots`) and hover rotation.
2. **Playfair Italic 'O'**: Any capital 'O' in major editorial headings uses the signature italic font class:
   ```jsx
   <span className="playfair-o">O</span>
   ```
3. **Sound Bar Equalizer**:
   - **Sound on**: 5 vertical orange bars (`#FB5E27`) animating via CSS keyframes `soundEq1` through `soundEq5` + white text `Sound on`.
   - **Sound off**: 5 muted dots (`#9AA0AA`) + muted text `Sound off`.

---

## 3. Architecture & File Structure

```
portfolio/
├── AGENTS.md                           # This file (Agent instructions & constraints)
├── docs/
│   ├── ARCHITECTURE.md                 # System architecture & component breakdown
│   └── DECISIONS.md                    # Architecture Decision Records (ADRs)
├── .agents/
│   └── skills/                         # Workflows (deploy, styling, etc.)
├── TODO.md                             # Roadmap and active task tracker
├── src/
│   ├── components/                     # UI components (Tom* and Nakiti* modular components)
│   ├── data/portfolioData.js           # Central data for experience, projects, skills, links
│   ├── utils/audioEngine.js            # Web Audio API synth engine (Pulse & Drift)
│   ├── App.jsx                         # Root application layout
│   └── index.css                       # Global styles, fonts & keyframe animations
├── resume.html                         # Editorial standalone resume page with PDF export
└── public/
    └── Girindra_Mohan_Resume.pdf       # Official resume download
```

---

## 4. Engineering Rules & Guardrails

1. **Fast Verification**: Always run `npm run build` locally before pushing code.
2. **Audio Autoplay Compliance**: Modern browsers block auto-playing audio without user gesture. Keep audio muted on initial load; toggle only on explicit user click (`soundEngine.toggle()`).
3. **GitHub Pages Deployment**:
   - Deployments are triggered on push to `main`.
   - The workflow uses two separate jobs (`build` and `deploy` with `needs: build`) to prevent artifact API race conditions.
4. **Data Edits**: When updating projects, skills, career history, or social links, update `src/data/portfolioData.js` first so changes reflect consistently across the site.
5. **No Broken Glassmorphism**: Use `backdrop-blur-xl` or `backdrop-blur-2xl` with subtle 1px border (`border-white/[0.12]`) when adding floating panels.
