# Case Study 4: Scrollytelling Portfolio — Canvas Animation & Interactive Design

> An Awwwards-inspired personal portfolio featuring HTML5 Canvas frame scrubbing, parallax text overlays, glassmorphism UI, and dark/light theme system built in React + Vite.

---

## Overview

| Field | Detail |
|-------|--------|
| **Project** | Scrollytelling Portfolio Website |
| **Role** | Designer & Developer |
| **Stack** | React 19, Vite 8, HTML5 Canvas |
| **Deployment** | Netlify (SPA) |
| **Type** | Personal Portfolio / Creative Development |

---

## Design Challenge

Most developer portfolios are either visually impressive but technically shallow, or technically impressive but visually generic. The goal was to create a portfolio where the medium IS the message - demonstrating both design sensibility AND engineering depth.

**Core Challenge:** Build a scroll-linked canvas animation at 60fps, combined with parallax text overlays, glassmorphism UI, dark/light themes, and responsive design - all while keeping bundle size small and load times fast.

---

## Impact Metrics

| Metric | Result |
|--------|--------|
| Animation Frame Rate | **60fps** |
| Image Sequence | **75 WebP frames** (~600KB total) |
| JS Bundle Size | **~85KB** gzipped |
| Initial Load (3G) | **< 3 seconds** |
| Theme Modes | **2** (Dark + Light) |
| Accessibility | **WCAG AA** compliant |

---

## Technical Architecture

```
React App (Vite)
  ScrollyCanvas.jsx     - Canvas frame renderer
  ScrollyOverlay.jsx    - Parallax text layers
  Navbar.jsx            - Fixed glass nav
  ProjectsSection.jsx   - Glassmorphic cards
  AboutSection.jsx      - Bio + education
  ExperienceSection.jsx - Work history
  SkillsSection.jsx     - Filterable skills
  ContactSection.jsx    - WhatsApp integration
  ThemeContext.jsx       - Dark/Light state
  index.css             - Design system (473 lines)
  sequence/frame_*.webp - 75 animation frames
```

---

## Key Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Canvas over video | HTML5 Canvas + RAF | Frame-precise control, no codec issues, universal browser support |
| WebP image sequence | 75 frames @ 15fps | Smaller than video, progressive loading, no buffering |
| Lerp-based interpolation | requestAnimationFrame | Smooth 60fps transitions even on slower scroll |
| CSS Custom Properties | Vanilla CSS (no Tailwind) | Zero build overhead, full theme control |
| React Context | ThemeContext | Lightweight dark/light toggle with localStorage persistence |
| Netlify SPA | netlify.toml config | Immutable asset caching + SPA redirect rules |

---

## Canvas Frame Scrubbing Engine

The core mechanic maps scroll progress (0 to 1) to frame indices (0 to 74) using linear interpolation (lerp) with a factor of 0.15. The scroll handler only updates the target; the RAF loop handles all rendering - decoupling input from rendering prevents frame drops.

**Key Pattern:**
- Don't render on scroll events - render on every animation frame
- Scroll handler updates target frame index
- RAF loop lerps current toward target
- This separation prevents janky scroll performance

**Progressive Preloading:** All 75 frames are preloaded via Image objects. A loading indicator shows progress. Frames render as soon as decoded (not waiting for all 75).

**Vignette Overlay:** CSS gradient mask blends canvas edges into page background (#07090e) for seamless transitions between hero and content sections.

---

## Design System

### CSS Custom Properties (Tokens)

```css
:root {
  --bg-dark: #07090e;
  --bg-surface: rgba(13, 17, 26, 0.75);
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-glow: rgba(139, 92, 246, 0.35);
  --color-primary: #8b5cf6;
  --color-secondary: #06b6d4;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
}
```

### Glassmorphism Pattern

- Semi-transparent backgrounds with 20px backdrop blur
- 1px subtle borders that glow violet on hover
- 4px upward translation on hover
- Cubic-bezier easing (0.16, 1, 0.3, 1) for natural feel

---

## Accessibility

| Feature | Implementation |
|---------|---------------|
| Keyboard Navigation | Full tab order, visible focus rings (2px solid primary) |
| Screen Readers | Canvas marked aria-hidden; semantic HTML sections |
| Reduced Motion | Disables all keyframe animations and transitions |
| Color Contrast | WCAG AA (4.5:1) for text, AAA (7:1) for headings |
| Skip to Content | Hidden skip link appears on keyboard focus |
| Performance | Lazy-loaded sections, preloaded critical frames |

---

## Deployment (Netlify)

- Immutable asset caching (`max-age=31536000, immutable`)
- SPA redirect rules for client-side routing
- Total deploy size: ~85KB JS + ~600KB images = ~685KB

---

## Outcome

The portfolio demonstrates ability to design interfaces AND engineer them with performance, accessibility, and maintainability in mind. It serves as both a showcase of work and proof of craft.

---

## Files

| File | Description |
|------|-------------|
| `case-study-4.html` | Full interactive case study page |

---

[Previous: Meditate UX](case-study-3.html) | [Back to Portfolio](index.html)
