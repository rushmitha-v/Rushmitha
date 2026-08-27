# Case Study 2: StrataAnalytics — Enterprise Intelligence Platform

> A React.js + Python data visualization suite with real-time analytics, interactive filtering, and responsive dashboard components backed by optimized MySQL schemas.

---

## Overview

| Field | Detail |
|-------|--------|
| **Project** | StrataAnalytics Enterprise Platform |
| **Role** | Full-Stack Developer & Designer |
| **Company** | Cognizant (Apprenticeship) |
| **Duration** | January 2022 - June 2022 (6 mos) |
| **Stack** | React.js, Python (Flask), MySQL |
| **Type** | Enterprise Web App / Data Visualization |

---

## Problem Statement

Enterprise teams were drowning in data but starving for insights. Raw MySQL exports and static Excel reports couldn't keep up with business decision velocity. Stakeholders needed a single dashboard combining revenue tracking, user cohort analysis, and operational metrics - all updated in near-real-time.

Existing tools were either too expensive (Tableau, PowerBI), too slow (custom Django admin panels), or too rigid (Google Sheets that broke at scale).

**Core Challenge:** Build an enterprise-grade analytics dashboard with real-time data visualization, interactive filtering, and responsive design using React.js, Python, and MySQL.

---

## Impact Metrics

| Metric | Result |
|--------|--------|
| Data Access Speed | **3x faster** than previous workflow |
| Query Performance | **85% improvement** via materialized views |
| Dashboard Components | **12 reusable** React components |
| Page Load Time | **< 2 seconds** on 3G |
| Mobile Responsive | **100%** (320px to 4K) |
| Bundle Size | **~85KB** gzipped |

---

## System Architecture

```
MySQL DB (Optimized)  -->  Python API (Flask)  -->  React.js Dashboard (Vite)
     |                        |                         |
 Indexed queries        Aggregated metrics          Interactive charts
 Partitioned data       Caching layer              Real-time filtering
 Stored procedures      Error handling             Responsive layout
```

---

## Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Chart Library | Recharts + D3 | React-native components with D3 for custom tooltips |
| State Management | React Context + useReducer | Lightweight - no Redux overhead for this scope |
| API Layer | Python Flask | Team expertise + existing Python data pipelines |
| Database | MySQL + Views | Materialized views for pre-aggregated metrics |
| Styling | CSS Modules + Variables | Scoped styles with design token consistency |
| Build Tool | Vite | Fast HMR, optimized builds, ESM-native |

---

## Component Architecture

```
<DashboardLayout>
  +-- <Sidebar />
  +-- <Header search={true} />
  +-- <MetricsGrid>
  |   +-- <MetricCard type="revenue" />
  |   +-- <MetricCard type="users" />
  |   +-- <MetricCard type="conversion" />
  |   +-- <MetricCard type="retention" />
  +-- <ChartSection>
  |   +-- <RevenueChart />
  |   +-- <CohortAnalysis />
  |   +-- <UserFlowSankey />
  +-- <DataTable pagination={true} />
</DashboardLayout>
```

---

## Key Design Decisions

- **Progressive loading:** Skeleton screens appear instantly; data fades in as it arrives
- **Interactive filtering:** Click any chart element to filter all other charts (cross-filtering)
- **Micro-interactions:** Hover states reveal data details with cubic-bezier easing
- **Responsive grid:** CSS Grid with auto-fit and minmax - works from 320px to 4K
- **Dark mode default:** Reduces eye strain for data-heavy work sessions

---

## Accessibility (WCAG 2.1)

| Feature | Implementation | Standard |
|---------|---------------|----------|
| Color Contrast | 4.5:1 minimum; critical metrics at 7:1 | WCAG AA / AAA |
| Keyboard Navigation | Full tab order, arrow key chart navigation | WCAG 2.1.1 |
| Screen Readers | ARIA labels on all charts, role="img" with descriptions | WCAG 1.1.1 |
| Focus Management | Visible focus rings, logical tab order, skip-to-content | WCAG 2.4.7 |
| Reduced Motion | Disables all animations | WCAG 2.3.3 |

---

## Outcome

StrataAnalytics replaced the previous CSV export + Excel workflow. Stakeholders now have self-service analytics with real-time data, interactive filtering, and shareable dashboard links. The Python data pipeline runs nightly aggregations with sub-second load times for 3+ years of historical data. The component architecture was adopted by two subsequent teams.

---

## Files

| File | Description |
|------|-------------|
| `case-study-2.html` | Full interactive case study page |

---

[Previous: HYDRA-CORE](case-study-1.html) | [Back to Portfolio](index.html) | [Next: Meditate UX](case-study-3.html)
