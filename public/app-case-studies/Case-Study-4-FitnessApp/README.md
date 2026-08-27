# Case Study 4: FitPulse — Fitness & Habit Building App

## Problem Statement
Gym beginners quit within 3 months (73% churn) because workouts feel overwhelming, progress is invisible, and motivation drops without feedback. Existing fitness apps are built for athletes, not beginners. FitPulse needs a beginner-first experience that makes progress visible and habits sticky.

## User Research
- **Methods**: Gym interviews (10), online survey (n=40), app store review mining (200+ reviews of Nike TC, Fitbod, MyFitnessPal)
- **Key Findings**:
  - 68% of beginners don't know what to do beyond cardio machines
  - 81% say "seeing progress" is the #1 motivator to continue
  - 59% abandon apps with complex workout builders
  - Users want: simple daily plans, streaks, and visual body/strength progress

## Personas

### Primary: Priya Sharma
- **Age**: 24 · Junior architect · Gym member for 2 months
- **Goals**: Lose 5kg, build consistency, not feel lost at gym
- **Pain Points**: Doesn't know which exercises; embarrassed to ask trainers; loses motivation in week 3
- **Quote**: "I just want someone to tell me what to do today and show me it's working"

### Secondary: Rahul Verma
- **Age**: 31 · Software engineer · Intermediate
- **Goals**: Strength gains, track progressive overload
- **Pain Points**: Logging sets mid-workout is friction; wants rest-timer + PR alerts
- **Quote**: "If logging takes more than 5 seconds per set, I stop doing it"

## User Flows
1. **Onboarding flow**: Goal selection → fitness level quiz → 3-day plan generation → first workout preview
2. **Daily workout flow**: Home → Today card → Exercise detail (video + reps) → log set → rest timer → complete → streak update + progress ring
3. **Progress review flow**: Progress tab → weight/strength charts → milestone badges → share card

## Wireframes (see Figma-Files/)
- Home "Today" screen with single prominent CTA
- Exercise logging screen (big + buttons, rest timer)
- Progress rings + before/after photo compare

## Figma Designs
- Dark theme with neon green accent (#22e07a) for energy
- Activity rings inspired by Apple Fitness, but simplified for beginners
- Big tap targets for mid-workout logging (sweaty hands test!)

## Prototype Interactions
- Set logging with haptic-style bounce
- Rest timer with circular countdown
- Streak flame animation on completion
- Weekly progress recap card

## Usability Testing
- **Participants**: 8 (5 beginners, 3 intermediate)
- **Tasks**: Log a workout, find progress charts, adjust plan
- **Results**: 92% task success · avg 4.2/5 SUS · "rest timer" was most loved feature
- **Iterations**: Added "swap exercise" option after 4 users felt locked into plans; simplified progress screen from 4 tabs to 1 scroll

## Presentation Structure (12 slides)
1. Title 2. Problem 3. Research methods 4. Personas 5. Journeys 6. Flows 7. Wireframes 8. Visual design system 9. Prototype demo 10. Testing results 11. Iterations 12. Learnings & roadmap
