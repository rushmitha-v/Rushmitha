# Case Study 3: Meditate UX — Usability Research & Mobile Redesign

> An HFI-certified usability case study featuring a complete mobile UX redesign backed by formal testing, achieving 94% task completion rate and an SUS score of 82.

---

## Overview

| Field | Detail |
|-------|--------|
| **Project** | Meditate UX Mobile Redesign |
| **Role** | UX Researcher & Designer |
| **Certification** | Certified Usability Analyst (CUA) - HFI Training |
| **Platform** | iOS & Android |
| **Tools** | Figma, Maze, Zoom, Miro |
| **Type** | Mobile UX / Usability Research |

---

## Problem Statement

Meditation apps have booming downloads but abysmal retention - 77% of users abandon within the first week. The app had a beautiful visual design but suffered from poor information architecture, confusing onboarding, and a session setup flow requiring 7+ taps to start meditating.

**Core Challenge:** Reduce friction in the meditation session flow while maintaining the calm, mindful aesthetic - and prove the improvement through rigorous usability testing with measurable metrics.

---

## Impact Metrics

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Task Completion Rate | 67% | **94%** | +27 points |
| Avg. Time to Start Session | 18.3s | **4.2s** | 77% faster |
| Number of Taps | 7 | **2** | 71% fewer |
| SUS Score | 52 (OK) | **82 (Excellent)** | +30 points |
| Critical Usability Issues | 5 | **0** | 100% resolved |

---

## Usability Audit (HFI Methodology)

Using the HFI Certified Usability Analyst methodology, I conducted a structured evaluation combining heuristic inspection, cognitive walkthrough, and competitive analysis.

### Heuristic Evaluation Results

| HFI Heuristic | Issues | Severity | Example |
|---------------|--------|----------|---------|
| Visibility of System Status | 3 | Medium | No loading indicator during session initialization |
| Match Real-World Conventions | 4 | High | "Binaural" toggle with no explanation |
| User Control & Freedom | 5 | High | No pause/resume without losing progress |
| Consistency & Standards | 4 | Medium | Settings accessed via 3 different icon styles |
| Error Prevention | 3 | High | Swipe dismisses active meditation without confirmation |
| Recognition over Recall | 4 | Medium | Users must remember settings between sessions |

**Critical Finding:** Session setup required 7 taps across 3 screens. Competitive analysis showed Calm and Headspace achieve this in 2 taps.

---

## User Research

12 participants across 3 segments (beginners, occasional, daily practitioners) for moderated remote testing with think-along protocol and post-session SUS questionnaires.

### Key Findings

1. **83% Confused by Onboarding** - "I just want to start meditating, why do I need to answer 10 questions first?"
2. **No Session Persistence** - Accidentally closing the app lost the entire session with no auto-save or resume
3. **Duration Guessing Game** - Wheel picker with no visual preview made it impossible to tell 5 minutes from 50

> "I tried to meditate for 5 minutes before work. It took me longer to set up the session than to actually meditate." - Research Participant #7

---

## Redesign Process

### Phase 1: IA Restructuring
- Collapsed 7-tap flow into "Quick Start" card on home screen
- Moved advanced settings to single "Customize" bottom sheet
- Removed mandatory onboarding - users start immediately with sensible defaults

### Phase 2: Wireframe Testing
- Tested 3 wireframe concepts with 8 participants via Maze
- "Card-Based Quick Start" achieved 92% task completion (vs 67% original)
- Validated single-screen session setup with inline duration picker

### Phase 3: High-Fidelity Prototyping
- 15 connected Figma screens with Lottie micro-animations
- Montserrat typography with calming blue-green palette
- WCAG-compliant contrast ratios in all color combinations
- Token-based design system for rapid iteration

---

## Design System Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Primary | #0EA5E9 | CTAs, active states, links |
| Calm | #06B6D4 | Session timer, breathing animations |
| Relax | #8B5CF6 | Premium features, streaks, achievements |
| Background | #0F172A | Dark mode background (default) |
| Surface | #1E293B | Cards, sheets, elevated elements |
| Type | Montserrat | Headings, body, UI elements |

---

## Accessibility

- Dark mode palette achieves minimum 4.5:1 contrast for body text, 7:1 for critical UI
- Screen reader testing with VoiceOver (iOS) and TalkBack (Android)
- All interactive elements meet 44px minimum touch target
- Reduced motion support via `prefers-reduced-motion`

---

## Outcome

The redesigned prototype was validated with 10 new participants using identical task scenarios. All 5 critical usability issues were resolved. The SUS score improved from 52 ("OK") to 82 ("Excellent") - placing the app in the top 10% of usability benchmarks. Task completion jumped from 67% to 94%.

---

## Files

| File | Description |
|------|-------------|
| `case-study-3.html` | Full interactive case study page |

---

[Previous: StrataAnalytics](case-study-2.html) | [Back to Portfolio](index.html) | [Next: Portfolio Website](case-study-4.html)
