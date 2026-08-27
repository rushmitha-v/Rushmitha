# Case Study 6: Wanderly — Weekend Trip Planner for Busy People

## Problem Statement
Planning a weekend trip takes 8+ hours across 12 browser tabs (flights, stays, weather, activities, budgets). Groups abandon planning because coordination happens in chaotic WhatsApp threads. Wanderly needs one-place trip planning with smart itineraries and collaborative decision-making.

## User Research
- **Methods**: 10 traveler interviews, diary study of 6 group trips, competitive analysis (MakeMyTrip, Airbnb, TripIt, Google Travel)
- **Key Findings**:
  - Users switch between 6-12 apps/tabs to plan one weekend trip
  - 72% of group trips die in the "where should we go?" phase — no one decides
  - Budget surprises are the #1 post-trip complaint
  - Users want: curated itineraries they can tweak, shared budgets, offline access

## Personas

### Primary: Kavya Reddy
- **Age**: 26 · Product manager · Plans 1 trip/month with friends
- **Goals**: Zero-stress weekends, split costs fairly, hidden gems not tourist traps
- **Pain Points**: Becomes "default planner" for her group; chasing friends for confirmations
- **Quote**: "I don't want 50 options. Give me 3 perfect weekends and let me pick"

### Secondary: Tom Becker
- **Age**: 38 · Consultant · Solo business + leisure trips
- **Goals**: Maximize 48-hour weekends, keep costs visible
- **Pain Points**: Rebuilding itineraries from scratch every time; no offline maps abroad
- **Quote**: "I land Friday 9pm — I need my Saturday planned before I take off"

## User Flows
1. **Trip creation flow**: Home → "Plan a trip" → vibe picker (chill/adventure/food) → dates + budget slider → 3 AI-curated itinerary options → customize (swap cards) → invite friends → book
2. **Group decision flow**: Share 3 options → friends vote with emoji reactions → winning itinerary auto-locks → cost split preview
3. **On-trip flow**: Today view → map with route → offline checklists → expense split entry → memory journal

## Wireframes (see Figma-Files/)
- Vibe picker with image cards
- Itinerary timeline with drag-to-swap cards
- Group voting screen with live reactions

## Figma Designs
- Sky-blue to sunset gradient identity (#0ea5e9 → #f97316)
- Cards-first UI (each activity = swappable card)
- Playful but organized — vacation should feel fun, planning shouldn't

## Prototype Interactions
- Vibe cards with tilt-on-hover
- Itinerary cards drag reorder
- Vote buttons with burst animation
- Budget slider updates all numbers live

## Usability Testing
- **Participants**: 8 (5 group planners, 3 solo)
- **Tasks**: Create trip, invite friend, swap an activity, split an expense
- **Results**: 90% success · SUS 84 · "3 curated options" beat "endless filters" unanimously
- **Iterations**: Added budget-per-person preview after 5 users asked "but what will I pay?"; simplified invite flow from 4 steps to 1 share link

## Presentation Structure (12 slides)
Title → Problem → Research → Personas → Journey map → Flows → Wireframes → Visual design → Prototype → Testing → Iterations → Roadmap
