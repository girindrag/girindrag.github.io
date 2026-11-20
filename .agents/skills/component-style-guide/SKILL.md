---
name: component-style-guide
description: Visual styling rules, tokens, typography, and patterns for creating or editing components in Girindra's portfolio.
---

# Component Style Guide

Follow these guidelines whenever adding new sections, cards, or interactive elements.

## 1. Color Palette & Classes

- **Background**: `bg-[#0B0B0B]`
- **Headings & Primary Text**: `text-[#E7E1D7]` (warm off-white / cream)
- **Subheaders & Labels**: `text-[#8E8B83]` or `text-[#9AA0AA]` (slate gray)
- **Brand Accent**: `text-[#F34213]` / `bg-[#F34213]` (electric vermillion orange)
- **Borders & Dividers**: `border-white/[0.1]` or `border-[#E7E1D7]/[0.12]`

## 2. Signature Typography

- **Font Families**:
  - `font-sans`: Plus Jakarta Sans (body, clean UI labels)
  - `font-mono`: JetBrains Mono (technical indicators, tags, dates, code HUD)
  - `font-display`: Syne / Space Grotesk (large bold hero titles)
  - `font-serif`: Playfair Display
- **Signature Italic 'O' Rule**:
  Always wrap uppercase 'O' characters in editorial titles with:
  ```jsx
  <span className="playfair-o">O</span>
  ```

## 3. Glass & Card Containers

Use elevated glass styling for panels:
```jsx
<div className="rounded-2xl tom-glass-elevated border border-[#E7E1D7]/[0.12] p-6 shadow-2xl">
  ...
</div>
```

## 4. Four Red Dots Icon

Import and use the signature emblem for cards or button badges:
```jsx
import { FourRedDots } from './TomCornerHUD';

<FourRedDots className="w-3.5 h-3.5" />
```

## 5. Sound Feedback

Add procedural audio click feedback to buttons and interactive cards:
```jsx
import { soundEngine } from '../utils/audioEngine';

<button onClick={() => { soundEngine.playClick(); /* action */ }}>
```
