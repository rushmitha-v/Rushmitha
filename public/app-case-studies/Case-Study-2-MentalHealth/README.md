# Case Study 2: Mindful - Mental Health Tracking & Support App

## Problem Statement
Young adults (18-35) struggle with managing mental health due to stigma, lack of accessible resources, and difficulty tracking patterns. Existing solutions are either too clinical, too generic, or require professional guidance that many cannot access. There's a need for a low-friction, private, and empowering tool that helps users understand their mental health patterns without judgment.

## User Research
- **Method**: Diary studies + Focus groups + Mental health professional interviews
- **Sample**: 20 individuals aged 18-35
- **Key Findings**:
  - 71% don't track their mood regularly
  - 64% feel overwhelmed by mental health app options
  - 58% struggle to identify triggers patterns
  - Users want privacy above all else
  - Preferred: Quick check-ins, visual patterns, actionable insights

## Personas

### Primary Persona: Jamie Wilson
- **Age**: 25
- **Occupation**: Graphic Designer
- **Goals**: Understand mood triggers, reduce anxiety, maintain creativity
- **Pain Points**: Anxiety spikes without warning, feels misunderstood, inconsistent self-care
- **Quote**: "I need to understand my patterns without it feeling like a chore"

### Secondary Persona: Dr. Chen (Consultant)
- **Age**: 42
- **Occupation**: Clinical Psychologist
- **Goals**: Patients improve between sessions, data-driven insights
- **Pain Points**: Limited session time, patients can't recall daily patterns
- **Quote**: "Objective data between sessions would transform my practice"

## User Flows

### Main Flow: Daily Mood Check-in
1. User opens app → Daily notification prompt → Quick mood selection
2. Select emotion emoji + intensity slider (1-10)
3. Optional: Add brief text note (max 50 chars)
4. Data saved → See daily streak → App suggests coping strategies
5. End of day: Summary card with energy level

### Flow: Pattern Analysis
1. Dashboard → View weekly/monthly trends → Identify patterns
2. Visualize mood heatmap → See correlations with activities
3. Export insights → Share with therapist (optional)
4. Receive personalized suggestions based on patterns

## Wireframes

### Low-Fidelity Sketches

**Daily Check-in Screen:**
```
+------------------------------------------+
| How are you feeling today?               |
+------------------------------------------+
| 😊   😐   😢   😠   😴                   |
+------------------------------------------+
| Intensity: ███████░░░ (7/10)             |
+------------------------------------------+
| Optional: "Felt anxious about project" |
| [          50 characters remaining       ]|
+------------------------------------------+
| [SKIP]   [SAVE MOOD]                    |
+------------------------------------------+
```

**Weekly Trends Screen:**
```
+------------------------------------------+
| Your Weekly Mood Pattern                 |
+------------------------------------------+
| Mon: ████████░░ (7/10) | Tue: ███████░░ (6/10) |
| Wed: ████████░░ (7/10) | Thu: █████░░░░ (5/10)   |
| Fri: ████████░░ (7/10) | Sat: ████████░░ (7/10)   |
| Sun: ███████░░░ (6/10)                           |
+------------------------------------------+
| Insight: Your best days are weekends!   |
+------------------------------------------+
```

## Figma Designs (Described)

### Main Components Created:
1. **Mood Selection Grid** - Emoji-based emotion selection
2. **Intensity Slider** - Visual 1-10 scale with fill animation
3. **Trend Visualization** - Heatmap and line chart components
4. **Daily Summary Card** - Streak tracking and insights
5. **Coping Strategy Deck** - Rotating suggestions based on mood

### Color Palette:
- Primary: #8B5CF6 (Violet 600) - calming, non-clinical
- Secondary: #EC4899 (Pink 500) - for positive states
- Background: #F8FAFC (Blue Gray 50)
- Stress State: #EF4444 (Red 500) - for high intensity
- Calm State: #10B981 (Green 500) - for low intensity

### Typography:
- Headers: Inter SemiBold 20px
- Body: Inter Regular 14px
- Emoji Display: System Font 32px

## Prototypes

### Interactive Flow:
1. **Welcome** → **First Check-in** → **Dashboard Introduction**
2. Daily notification tap → Quick mood entry (under 30 seconds)
3. Trend view with pinch-to-zoom
4. Suggestion carousel with swipe gestures
5. Insights modal with share option

### Micro-interactions:
- Emoji selection with subtle ripple effect
- Intensity slider thumb animation
- Mood heatmap color transition on load
- Confetti on 7-day streak achievement
- Haptic feedback on save action

## Usability Testing

### Test Plan:
- **Participants**: 10 young adults (18-35)
- **Tasks**: Daily mood entry, view weekly trends, understand insights
- **Metrics**: Completion rate, emotional response, insight comprehension

### Key Findings:
- 90% completed daily check-ins without instructions
- Users loved the emoji-based selection (quick & non-judgmental)
- Some confusion about how to interpret trend visualizations
- Privacy concerns addressed but wanted more control over data sharing
- Insights felt "generic" - needed more personalization

### Improvements Made:
- Added interactive tutorial for trend visualization
- Enhanced privacy controls with granular settings
- Personalized suggestions based on individual patterns
- Added "how are you really" text prompt option
- Improved color contrast for intensity selector

## Final Case-Study Presentation Structure

1. **Title Slide**: Mindful - Mental Health Tracking & Support
2. **Problem & Scope**: Young adult mental health management
3. **Research Methods**: Diary studies, focus groups, expert interviews
4. **Personas**: Jamie Wilson & Dr. Chen
5. **User Flows**: Daily check-in & pattern analysis
6. **Wireframes**: Low-fidelity sketches
7. **Figma Designs**: High-fidelity mockups
8. **Prototype**: Interactive demo link
9. **Usability Testing**: Results and iterations
10. **Final Designs**: Complete UI solution
11. **Mental Health Advisory**: Collaboration notes
12. **Key Takeaways**: Design for good principles