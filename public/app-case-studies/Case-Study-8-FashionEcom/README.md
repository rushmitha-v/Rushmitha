# Case Study 8: StyleHub — Fashion Discovery That Fits

## Problem Statement
Online fashion shoppers return 40% of orders — mostly due to fit issues and "looked different on model" disappointment. Endless grids of similar products create choice fatigue. StyleHub needs fit-first discovery: real-body photos, size intelligence from returns data, and outfit-based (not item-based) browsing.

## User Research
- **Methods**: 10 shopper interviews, returns-data analysis (anonymized dataset, 5k orders), card-sorting for browse categories
- **Key Findings**:
  - 68% of returns cite fit/sizing, not style dislike
  - Users trust photos on "real people" 3x more than model shots
  - 74% abandon when they must guess between two sizes
  - Shoppers think in outfits/occasions, not product categories

## Personas

### Primary: Divya Nair
- **Age**: 25 · HR analyst · Shops 2-3x/month online
- **Goals**: Look put-together at office + weekends; zero return hassles
- **Pain Points**: Size M here is L there; can't visualize full outfit; returns feel like a part-time job
- **Quote**: "Show me how it looks on someone my size, not a supermodel"

### Secondary: Farhan Ali
- **Age**: 30 · Sales manager · Hates shopping
- **Goals**: In-and-out in 10 minutes; look sharp with zero effort
- **Pain Points**: Overwhelmed by options; doesn't know what matches
- **Quote**: "Just hand me a complete outfit in my size. I'll pay for the shortcut"

## User Flows
1. **Fit-first flow**: Shop → pick occasion → filter "models like me" → product page shows 3 body types → size recommendation from your fit profile → one-tap order
2. **Outfit bundle flow**: Product page → "Complete the look" → bundle price → add all → checkout
3. **Fit profile flow**: Onboarding → 6 quick questions (height, build, usual sizes, fit preference) → confidence score on every product

## Wireframes (see Figma-Files/)
- Occasion-based home (Work / Brunch / Wedding / Lounge)
- Product page with body-type photo switcher
- Size confidence card ("92% sure — take M")

## Figma Designs
- Editorial fashion feel: warm ivory background, serif display accents, generous whitespace
- Fit confidence = soft green badge; low confidence shows amber with reason
- Body-type switcher = segmented control with subtle crossfade

## Prototype Interactions
- Body-type photo crossfade
- Size recommendation with animated confidence ring
- Outfit bundle "add all" with flying thumbnails
- Occasion tabs with sliding indicator

## Usability Testing
- **Participants**: 8 online shoppers (6F/2M)
- **Tasks**: Find office outfit, check size recommendation, complete bundle purchase
- **Results**: 91% success · SUS 85 · fit-confidence badge reduced "size anxiety" mentions from 7/8 users to 2/8
- **Iterations**: Added height+weight optional inputs after users wanted tighter recommendations; moved returns policy above the fold

## Presentation Structure (12 slides)
Title → Problem → Research → Personas → Flows → Wireframes → Visual design → Fit-confidence concept → Prototype → Testing → Iterations → Business impact (returns ↓)
