# Case Study 9: MediCare+ — Doctor Appointments Without the Waiting Room

## Problem Statement
Booking a doctor visit in India means 30-minute phone calls, 2-hour waiting rooms, and zero price/time transparency. Chronic patients (diabetes, thyroid) repeat this monthly. MediCare+ needs transparent booking (real fees, real wait times), digital queues, and follow-up automation.

## User Research
- **Methods**: 8 patient interviews (4 chronic), 3 clinic staff interviews, observation at 2 clinics (wait-time logging)
- **Key Findings**:
  - Average observed waiting room time: 74 minutes vs "10 min" told on phone
  - 81% of chronic patients forget follow-up dates or lab prep instructions
  - Patients choose doctors on: recommendation (72%), timing fit (54%), fee transparency (48%)
  - Staff spend 3+ hours/day on phone booking + rescheduling

## Personas

### Primary: Lakshmi Rao
- **Age**: 52 · School teacher · Type-2 diabetes, monthly reviews
- **Goals**: See Dr. Menon monthly without losing a half-day; remember fasting instructions
- **Pain Points**: 2-hour waits, paper prescriptions get lost, forgets what doctor said
- **Quote**: "Tell me when to actually come, not when to start waiting"

### Secondary: Rohan Gupta
- **Age**: 29 · Tech worker · Books for parents + himself
- **Goals**: Book evening/weekend slots for parents; know fees upfront
- **Pain Points**: Calls during work hours; surprise fees; no record of parents' history
- **Quote**: "Let me book Mom's appointment from my desk in 60 seconds"

## User Flows
1. **Smart booking flow**: Search (specialty/symptom) → filter by real availability + fee → slot picker showing live doctor delay → confirm → digital queue token
2. **Digital queue flow**: On visit day → live token status ("You're #4, ~25 min — leave home now") → arrive at right time → e-prescription after
3. **Chronic care flow**: Post-visit → auto follow-up booking suggestion → lab prep reminders (fasting!) → medication refill nudges → family member access

## Wireframes (see Figma-Files/)
- Search results with fee + next-available badges
- Live queue screen with token progress
- Family dashboard (parents' upcoming visits)

## Figma Designs
- Calming clinical palette: teal primary #0d9488, soft neutrals, no alarming reds except vitals
- Trust signals everywhere: verified badges, real photos, fee clarity
- Large text mode for 50+ users (Lakshmi persona!)

## Prototype Interactions
- Token queue with animated progress + ETA countdown
- Slot picker with instant "leave by" calculation
- Follow-up auto-suggest with one-tap confirm
- Family switcher avatars

## Usability Testing
- **Participants**: 9 (5 aged 45+, 4 aged 25-35)
- **Tasks**: Book a follow-up, check queue status, share access with family
- **Results**: 93% success · 45+ group needed 1 retry on family-sharing (fixed with simpler invite) · SUS 86
- **Iterations**: Increased tap target sizes for 50+ users; added "leave by" time after users misjudged travel; simplified fee display to single all-in number

## Presentation Structure (12 slides)
Title → Problem → Research (incl. clinic observation) → Personas → Flows → Wireframes → Accessible design decisions → Prototype → Testing → Iterations → Impact metrics → Roadmap
