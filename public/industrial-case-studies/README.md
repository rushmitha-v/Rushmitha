# Rushmitha Varshini — Case Studies & Portfolio

> A comprehensive UI/UX design & engineering portfolio showcasing industrial HMI, enterprise analytics, mobile usability research, and creative development — with full process documentation, interactive demos, a design system, and technical blog.

---

## Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Portfolio Structure](#portfolio-structure)
- [Case Studies](#case-studies)
- [Design System](#design-system)
- [Blog](#blog)
- [How to Use This Portfolio](#how-to-use-this-portfolio)
- [Deployment Guide](#deployment-guide)
- [Technologies Used](#technologies-used)
- [Accessibility](#accessibility)
- [Contact](#contact)

---

## Overview

This repository contains **4 in-depth case studies**, a **design system / component library**, **3 blog articles**, and **interactive demo pages** — all built as static HTML/CSS/JS pages with a shared dark/light theme system.

**Who is this for?**
- Recruiters and hiring managers evaluating UI/UX design + engineering skills
- Fellow designers looking for process documentation examples
- Anyone interested in industrial HMI, enterprise dashboards, or creative development

**What makes this portfolio different:**
- Shows the **full design process** (research → wireframes → iterations → final → outcome), not just polished screenshots
- Each case study includes **measurable impact metrics** (35% faster response, 94% task completion, etc.)
- Built with **accessibility as a first-class concern** (WCAG AA, keyboard nav, reduced motion)
- Includes a **living design system** with documented components and tokens
- **Technical blog** demonstrates communication skills and design thinking

---

## Quick Start

### Option 1: Open Locally (No Server Needed)
```
1. Open the folder in your file explorer
2. Double-click index.html
3. All pages work as static files — no build step required
```

### Option 2: Local Dev Server (Recommended for Best Experience)
```bash
# Using Python
cd "D:\Rushmitha\Rushmitha Case Studies"
python -m http.server 8080

# Using Node.js (if installed)
npx serve .

# Using PHP
php -S localhost:8080
```
Then open `http://localhost:8080` in your browser.

### Option 3: VS Code Live Server
```
1. Install "Live Server" extension in VS Code
2. Right-click index.html → "Open with Live Server"
3. Auto-reloads on file changes
```

---

## Portfolio Structure

```
Rushmitha Case Studies/
│
├── index.html                          ← Main landing page (start here)
├── styles.css                          ← Shared design system & tokens
│
├── case-study-1.html                   ← HYDRA-CORE v3.1: Industrial HMI
├── case-study-2.html                   ← StrataAnalytics: Enterprise Platform
├── case-study-3.html                   ← Meditate UX: Usability Research
├── case-study-4.html                   ← Scrollytelling Portfolio Website
│
├── demos/
│   └── design-system.html              ← Component library & design tokens
│
├── blog/
│   ├── index.html                      ← Blog hub (all articles)
│   ├── industrial-ux-lessons.html      ← 5 Lessons from Industrial HMI
│   ├── accessibility-matters.html      ← Accessibility as Design Problem
│   └── scrollytelling-deep-dive.html   ← Canvas Frame Scrubbing Tutorial
│
├── assets/
│   ├── wireframes/                     ← (Add your wireframe images here)
│   ├── screenshots/                    ← (Add your final screenshots here)
│   └── process/                        ← (Add iteration/sketch images here)
│
└── README.md                           ← This file
```

---

## Case Studies

### 1. HYDRA-CORE v3.1: Industrial HMI & Telemetry System
**File:** `case-study-1.html`  
**Role:** Designing Engineer  
**Duration:** Jun 2023 – Jan 2025  
**Company:** GEE KAY VEE HYDRAULICS PRIVATE LIMITED

| Metric | Result |
|--------|--------|
| Emergency Response Time | 35% faster |
| Components Built | 150+ Figma components |
| Training Time Reduction | 60% less |
| Machine Types Supported | 4 |

**Key Topics:** Industrial UX, touch-optimized design, emergency alert systems, ergonomic interfaces, Figma component libraries, UX research in factory environments

[Read Full Case Study →](case-study-1.html)

---

### 2. StrataAnalytics: Enterprise Intelligence Platform
**File:** `case-study-2.html`  
**Role:** Full-Stack Developer & Designer  
**Stack:** React.js, Python, MySQL

| Metric | Result |
|--------|--------|
| Data Access Speed | 3x faster |
| Query Performance | 85% improvement |
| Dashboard Components | 12 reusable |
| Mobile Responsive | 100% |

**Key Topics:** Data visualization, React dashboard architecture, Python data pipelines, MySQL optimization, responsive design, cross-filtering, accessibility in data UIs

[Read Full Case Study →](case-study-2.html)

---

### 3. Meditate UX: Usability Research & Mobile Redesign
**File:** `case-study-3.html`  
**Role:** UX Researcher & Designer  
**Certification:** Certified Usability Analyst (HFI)

| Metric | Before | After |
|--------|--------|-------|
| Task Completion | 67% | 94% |
| Time to Start Session | 18.3s | 4.2s |
| Taps Required | 7 | 2 |
| SUS Score | 52 (OK) | 82 (Excellent) |

**Key Topics:** HFI heuristics, usability testing, cognitive walkthroughs, mobile UX, design systems, Figma prototyping, before/after comparisons

[Read Full Case Study →](case-study-3.html)

---

### 4. Scrollytelling Portfolio: Canvas Animation & Interactive Design
**File:** `case-study-4.html`  
**Role:** Designer & Developer  
**Stack:** React 19, Vite 8, HTML5 Canvas

| Metric | Result |
|--------|--------|
| Animation Rate | 60fps |
| Image Assets | 75 WebP frames (~600KB) |
| JS Bundle | ~85KB gzipped |
| Themes | Dark + Light |

**Key Topics:** HTML5 Canvas, scroll-linked animation, image sequence scrubbing, glassmorphism, CSS custom properties, dark/light theming, Netlify deployment

[Read Full Case Study →](case-study-4.html)

---

## Design System

**File:** `demos/design-system.html`

A documented component library demonstrating systems thinking:

- **Design Tokens:** Color palette (8 colors), typography scale (5 levels), spacing scale (8 sizes)
- **Components:** Buttons, glass cards, tags/badges, callout boxes, navigation bar, form elements, timelines
- **Patterns:** Glassmorphism, progressive disclosure, dark-first design
- **Accessibility:** WCAG AA compliance checklist with 8 verified standards

[View Design System →](demos/design-system.html)

---

## Blog

**File:** `blog/index.html`

Three articles demonstrating communication skills and design thinking:

| Article | Topic | Read Time |
|---------|-------|-----------|
| 5 Lessons from Industrial HMI | Gloved hands, color as safety, glanceability | 8 min |
| Accessibility is a Design Problem | Contrast, keyboard nav, reduced motion | 6 min |
| Canvas Frame Scrubbing Deep Dive | RAF lerp loop, progressive preloading | 10 min |

[Read the Blog →](blog/index.html)

---

## How to Use This Portfolio

### For Job Applications
1. Share the live URL (after deployment) or the GitHub repository link
2. Highlight 1-2 case studies most relevant to the role:
   - **UI/UX roles:** Lead with Case Study 3 (Meditate UX) — it has the strongest research metrics
   - **Industrial/HMI roles:** Lead with Case Study 1 (HYDRA-CORE) — shows domain expertise
   - **Frontend/Full-Stack roles:** Lead with Case Study 2 (StrataAnalytics) + Case Study 4 (Portfolio)
   - **Design systems roles:** Lead with the Design System page

### For Adding Your Own Assets
1. Place wireframe images in `assets/wireframes/`
2. Place final screenshots in `assets/screenshots/`
3. Place process/iteration images in `assets/process/`
4. Update the case study HTML files to reference your images:
   ```html
   <img src="assets/screenshots/hydra-core-final.png" alt="HYDRA-CORE final design">
   ```

### For Customizing Content
- All text content is directly in the HTML files — edit them like any text file
- Color tokens are in `styles.css` under `:root` — change once, applies everywhere
- Toggle between dark/light themes by changing `data-theme` attribute on `<html>`

---

## Deployment Guide

### Netlify (Recommended)
```bash
# Option A: Drag & drop the folder to netlify.com/drop
# Option B: Connect your GitHub repo
# Option C: CLI deploy
npm install -g netlify-cli
netlify deploy --prod --dir="."
```

### GitHub Pages
```bash
# Push to a GitHub repo, then:
# Settings → Pages → Source: main branch → / (root)
```

### Vercel
```bash
npx vercel --prod
```

### Any Static Host
Upload the entire `Rushmitha Case Studies` folder. No build step needed — all files are ready-to-serve HTML/CSS/JS.

---

## Technologies Used

| Category | Technology |
|----------|------------|
| Markup | HTML5 (semantic elements) |
| Styling | Vanilla CSS (Custom Properties, no framework) |
| Interactivity | Vanilla JavaScript (ES modules) |
| Fonts | Google Fonts (Plus Jakarta Sans, Space Grotesk, JetBrains Mono) |
| Icons | Unicode symbols + CSS |
| Theme System | CSS `data-theme` attribute + localStorage |
| Build Tool | None required (static files) |
| Deployment | Netlify / GitHub Pages / Any static host |

---

## Accessibility

This portfolio is built with accessibility as a core requirement, not an afterthought:

- **WCAG 2.1 AA compliant** — All color combinations meet 4.5:1 contrast ratio
- **Full keyboard navigation** — Tab through all interactive elements with visible focus rings
- **Semantic HTML** — Proper use of `<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`
- **ARIA labels** — All buttons, links, and form inputs have accessible labels
- **Reduced motion** — `@media (prefers-reduced-motion: reduce)` disables all animations
- **Screen reader tested** — Heading hierarchy verified with VoiceOver and TalkBack
- **Responsive design** — Tested from 320px mobile to 2560px ultrawide

---

## Contact

**Rushmitha Varshini**  
Designing Engineer / Full-Stack UI/UX Specialist  
Melbourne, Victoria, Australia

- **Email:** Rushmithavarshini33@gmail.com
- **WhatsApp:** +61 434 455 126
- **LinkedIn:** [linkedin.com/in/rushmitha-varshini-ys-5039b4283](https://linkedin.com/in/rushmitha-varshini-ys-5039b4283)

---

## License

This portfolio content is original work by Rushmitha Varshini.  
The design system patterns and CSS are available for reference and learning.
