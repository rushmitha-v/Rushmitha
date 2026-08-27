# Case Study 7: PennyWise — Budgeting App for First Salaries

## Problem Statement
Young earners (21-28) run out of money before month-end despite decent salaries. Spreadsheet budgeting is tedious, banking apps only show balances (not context), and investment apps are intimidating. PennyWise needs passive-safe-spending guidance: "Can I afford this?" answered in one glance.

## User Research
- **Methods**: 12 interviews with first-jobbers, expense diary study (2 weeks, n=10), Reddit r/personalfinanceINDIA thread analysis (300+ posts)
- **Key Findings**:
  - 78% don't know where their salary goes by week 3
  - Users check balance 5-8x/day but it answers the wrong question ("how much" not "can I spend")
  - Manual expense logging dies within 9 days for 82% of users
  - "Safe to spend" per day is the number they actually want

## Personas

### Primary: Arjun Mehta
- **Age**: 23 · First job, 8 months in · ₹45k/month take-home
- **Goals**: Save for a bike, stop overspending on food delivery, still enjoy weekends
- **Pain Points**: Month-end anxiety, no idea where money leaks, guilt after impulse buys
- **Quote**: "Don't judge me. Just tell me if I can order this pizza"

### Secondary: Sneha Kulkarni
- **Age**: 26 · Design freelancer · Irregular income
- **Goals**: Smooth out lean months, set aside tax money automatically
- **Pain Points**: Apps assume fixed salary; budgeting feels like punishment
- **Quote**: "My income isn't a number that repeats monthly — my app should get that"

## User Flows
1. **Safe-to-spend flow**: Home → daily safe-to-spend number → tap for breakdown → category heat → adjust
2. **Can-I-afford check**: Before purchase → type amount → instant verdict (✅/⚠️/❌) with impact on month-end → confirm & auto-log
3. **Auto-categorization flow**: SMS/email statement parsing → smart categories → user corrects once → rules learned

## Wireframes (see Figma-Files/)
- Home with giant safe-to-spend ring
- Affordability check screen with verdict states
- Monthly "money story" recap

## Figma Designs
- Friendly fintech look: deep navy + mint green, rounded everything
- Verdict colors: green (safe), amber (think), red (danger) — colorblind-safe icons too
- Numbers are heroes: huge tabular figures, tiny labels

## Prototype Interactions
- Safe-to-spend ring animates on open
- Affordability verdict stamps in with spring
- Category bars grow on scroll
- Month recap cards swipe like stories

## Usability Testing
- **Participants**: 9 first-salary earners
- **Tasks**: Check safe-to-spend, run afford-check for ₹1,500 purchase, find where money went last week
- **Results**: 96% task success · SUS 88 · "afford-check before buying" was the killer feature
- **Iterations**: Softened red verdict copy ("This squeezes your fun budget" vs "Transaction blocked"); added freelancer income mode after Sneha-type feedback

## Presentation Structure (12 slides)
Title → Problem → Research → Personas → Emotional journey → Flows → Wireframes → Visual system → Prototype → Testing → Iterations → Roadmap
