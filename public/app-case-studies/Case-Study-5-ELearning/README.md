# Case Study 5: LearnLoop — Micro-Learning Platform for Working Professionals

## Problem Statement
Working professionals want to upskill but 64% of purchased online courses are never completed. Long video lectures don't fit into commutes or lunch breaks. Learners lose context between sessions and have no sense of momentum. LearnLoop needs micro-lessons (5-7 min), streak mechanics, and spaced repetition to make learning stick.

## User Research
- **Methods**: Survey (n=55), 8 learner interviews, completion-data analysis of public MOOC datasets
- **Key Findings**:
  - 64% never finish courses; average video watch time is under 12 minutes
  - 71% prefer learning in "dead time" (commute, lunch)
  - 77% forget previous lesson content when they return after 3+ days
  - Top motivators: streaks (58%), certificates (41%), leaderboards (22%)

## Personas

### Primary: Ananya Iyer
- **Age**: 27 · Business analyst preparing for data-science transition
- **Goals**: Learn SQL + Python in 4 months without quitting her job
- **Pain Points**: 40-min lectures impossible after work; forgets lesson 1 by lesson 5
- **Quote**: "Give me 5-minute lessons I can actually finish on the metro"

### Secondary: David Okafor
- **Age**: 34 · Marketing manager · Audio-first learner
- **Goals**: Listen to course content during commute
- **Pain Points**: Most platforms are video-only; no offline mode
- **Quote**: "I drive 90 minutes a day — my car should be my classroom"

## User Flows
1. **Micro-lesson flow**: Home → Today's 3 lessons → lesson player (video/audio toggle) → quick quiz → XP + streak animation → next lesson suggestion
2. **Spaced review flow**: Notification "3 cards due" → flashcard review (swipe) → mastery update
3. **Course discovery flow**: Browse → skill path filter → course detail (syllabus, ratings, time/day estimate) → enroll

## Wireframes (see Figma-Files/)
- Home with "3 lessons today" card and streak header
- Lesson player with audio/video toggle and speed control
- Flashcard review screen with swipe gestures

## Figma Designs
- Warm light theme (learning = daytime energy) with indigo primary #5b5bd6
- Progress shown as "loop" — circular path metaphor for the brand
- Audio mode = full-screen dark player (podcast feel)

## Prototype Interactions
- Lesson completion → confetti + streak flame
- Flashcard 3D flip on tap
- Audio/video mode toggle morph
- XP counter roll-up animation

## Usability Testing
- **Participants**: 9 professionals (22-38)
- **Tasks**: Complete a micro-lesson, review flashcards, enroll in path
- **Results**: 94% completion of test lesson · SUS 87 · "5-min estimate per lesson" built trust
- **Iterations**: Added audio-only mode after 4 users asked; moved quizzes after lesson (not mid-video) after eye-tracking showed frustration

## Presentation Structure (12 slides)
Title → Problem → Research → Personas → Journey → Flows → Wireframes → Design system → Prototype → Testing → Iterations → Roadmap
