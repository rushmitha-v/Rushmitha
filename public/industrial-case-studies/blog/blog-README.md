# Blog — Writing & Insights

> Three articles demonstrating communication skills, design thinking, and technical depth.

## File: `blog/index.html`

---

## Articles

### 1. 5 Lessons from Designing Industrial HMI Systems
**File:** `blog/industrial-ux-lessons.html` | **Read Time:** 8 min

Covers 5 key lessons from designing industrial control interfaces:
1. Design for Gloved Hands, Not Fingertips (64px touch targets)
2. Color is a Safety System, Not Decoration (semantic color vocabulary)
3. Glanceability Beats Comprehensiveness (500ms perception threshold)
4. Design for the Worst Case (emergency-first hierarchy)
5. The Design System is the Product (150+ component library)

### 2. Why Accessibility is a Design Problem, Not Just an Engineering One
**File:** `blog/accessibility-matters.html` | **Read Time:** 6 min

Argues that accessibility requires design-level thinking:
- Contrast is a Design Decision (WCAG ratios in palette selection)
- Keyboard Navigation Needs Visual Design (focus ring aesthetics)
- Screen Readers Reveal Architecture Flaws (heading hierarchy)
- Reduced Motion is Empathy in Code (prefers-reduced-motion)
- The Business Case (accessible = better for everyone)

### 3. Building a Scrollytelling Hero with Canvas Frame Scrubbing
**File:** `blog/scrollytelling-deep-dive.html` | **Read Time:** 10 min

Technical deep dive into the portfolio's hero animation:
- Why Canvas over video tags (frame-precise control)
- Image sequence pipeline (15MB video to 600KB WebP frames)
- RAF lerp loop pattern (decouple input from rendering)
- Progressive preloading strategy
- Vignette overlay for seamless blending
- Performance results (60fps, <3s load on 3G)

---

## Why Blog Matters

- **Communication skills** — UI/UX roles require explaining design decisions to stakeholders
- **Teaching ability** — Shows you can onboard team members and document processes
- **Technical depth** — Demonstrates understanding beyond surface-level implementation
- **SEO signal** — Written content makes the portfolio discoverable via search

---

## How to Add More Articles

1. Create a new HTML file in `blog/` (copy an existing article as template)
2. Add a card to `blog/index.html` in the blog-list section
3. Add a card to the main `index.html` blog grid section
4. Keep the same structure: tag, title, meta, content sections

---

[Back to Portfolio](../index.html) | [Read the Blog](index.html)
