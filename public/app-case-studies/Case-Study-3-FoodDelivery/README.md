# Case Study 3: BiteSphere - Local Food Delivery Marketplace

## Problem Statement
Small local restaurants struggle to compete with large delivery platforms due to high commission fees (25-35%), lack of customer data, and limited visibility. Meanwhile, customers want more local options but face inconsistent quality and long delivery times. There's a need for a community-focused delivery platform that supports local restaurants while giving customers curated, quality-local options.

## User Research
- **Method**: Restaurant owner interviews + Customer surveys + Field studies
- **Sample**: 12 restaurant owners + 25 customers in urban areas
- **Key Findings**:
  - 83% of restaurant owners unhappy with current platform commissions
  - 67% of customers want more local, independent options
  - 76% experience quality inconsistency with existing delivery apps
  - Restaurants want direct customer relationships
  - Customers value sustainability and local business support

## Personas

### Primary Persona: Chef Marco Rossi
- **Age**: 38
- **Occupation**: Owner of "Trattoria Moderna" - local Italian restaurant
- **Goals**: Increase orders, reduce commission costs, build customer loyalty
- **Pain Points**: 30% commission fees, no customer data, hard to stand out
- **Quote**: "I'm losing money on every order through big platforms"

### Secondary Persona: Carlos Rodriguez
- **Age**: 29
- **Occupation**: Urban professional
- **Goals**: Discover new local restaurants, support independent businesses, reliable delivery
- **Pain Points**: Generic recommendations, high fees, inconsistent quality
- **Quote**: "I want to find great local spots, not just chain restaurants"

## User Flows

### Main Flow: Restaurant Onboarding
1. Restaurant signs up → Verifies location → Sets menu items
2. Defines delivery radius and fees → Uploads photos
3. Sets commission preference (lower than big platforms)
4. Goes live → Appears in local area
5. Manages orders → Views analytics dashboard

### Flow: Customer Ordering
1. Open app → Location auto-detect → See nearby restaurants
2. Browse curated menus → Filter by cuisine, price, delivery time
3. Add items to cart → Choose delivery time slot
4. Checkout → Support local restaurant messaging
5. Order tracking → Real-time driver map + estimated arrival
6. Post-delivery → Rate experience → Leave review

## Wireframes

### Low-Fidelity Sketches

**Restaurant Listing Screen:**
```
+------------------------------------------+
| BiteSphere | 📍 Downtown Area          |
+------------------------------------------+
| [Italian] [Mexican] [Asian] [Bakery]    |
+------------------------------------------+
| Trattoria Moderna                       |
| 🍝🍕🥖 | 4.8★ | 30 min delivery      |
+------------------------------------------+
| [ORDER]  [VIEW MENU]                    |
+------------------------------------------+
```

**Menu Item Card:**
```
+------------------------------------------|
| Spaghetti Carbonara                      |
| 💰 $18   👨‍🍳 Marco's Trattoria          |
+------------------------------------------+
| ⭐ 4.7 (23 reviews) | 👨‍🍳 Chef Special  |
+------------------------------------------+
| [ADD TO CART]                            |
+------------------------------------------+
```

## Figma Designs (Described)

### Main Components Created:
1. **Restaurant Card** - Shows rating, cuisine, delivery time
2. **Menu Item Component** - Price, chef badge, review count
3. **Order Tracking Map** - Live driver location, route visualization
4. **Checkout Summary** - Restaurant support messaging
5. **Restaurant Profile** - Storytelling, mission, customer gallery

### Color Palette:
- Primary: #F97316 (Orange 500) - warm, appetizing
- Secondary: #EC4899 (Pink 500) - for discounts/badges
- Background: #FFFFFF (Clean, food-focused)
- Accent: #10B981 (Green 500) - for sustainable/vegan badges
- Negative: #6B7280 (Gray 500) - secondary text

### Typography:
- Headers: Inter Bold 28px
- Menu Items: Inter Regular 16px
- Price Display: Inter SemiBold 20px (larger scale)

## Prototypes

### Interactive Flow:
1. **Home** → **Restaurant Discovery** → **Menu Browsing**
2. **Add to Cart** → **Checkout** → **Restaurant Support Screen**
3. **Order Confirmation** → **Tracking Page** → **Delivery Complete**
4. **Review Prompt** → **Loyalty Program Signup**

### Key Transitions:
- Restaurant card hover with expanded preview
- Menu item "add" animation with cart badge update
- Tracking map with smooth driver movement
- Post-order confetti + restaurant thank you animation
- Review carousel with swipe gestures

### Loyalty Features:
- "Support Local" badge system
- First-order discount for new users
- Repeat customer rewards (free delivery after 5 orders)
- Restaurant spotlight features

## Usability Testing

### Test Plan:
- **Participants**: 15 (7 restaurant owners, 8 customers)
- **Tasks**: Onboard restaurant, place order, track delivery
- **Metrics**: Task success, time on task, platform preference

### Key Findings:
- Restaurant owners loved lower commission model (vs 25-35% industry standard)
- Customers appreciated curated vs overwhelming choices
- Tracking map needed clearer ETA communication
- Some confusion about how to differentiate restaurant quality
- Users wanted more filter options for dietary restrictions

### Improvements Made:
- Added dietary filter tags (vegan, gluten-free, spicy)
- Improved ETA micro-copy with time range
- Added restaurant "story" section on profile
- Enhanced search with keyword tags
- Simplified restaurant verification process

## Final Case-Study Presentation Structure

1. **Title Slide**: BiteSphere - Local Food Delivery Marketplace
2. **Problem & Scope**: Restaurant commission issues & customer demand
3. **Research Methods**: Owner interviews, customer surveys, field studies
4. **Personas**: Chef Marco & Carlos Rodriguez
5. **User Flows**: Restaurant onboarding & customer ordering
6. **Wireframes**: Low-fidelity sketches
7. **Figma Designs**: High-fidelity mockups
8. **Prototype**: Interactive demo link
9. **Usability Testing**: Results and iterations
10. **Final Designs**: Complete UI solution
11. **Business Model**: Commission structure & value proposition
12. **Key Takeaways**: Platform vs community design lessons