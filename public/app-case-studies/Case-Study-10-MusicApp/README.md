# Case Study 10: WavePlay — Music Player Built for Podcasts + Playlists

## Problem Statement
Music apps treat podcasts as an afterthought — separate apps, broken queue logic, lost playback positions, and 1x speed defaults. Commuters juggle Spotify + podcast apps daily. WavePlay unifies music + podcasts with smart queue mixing, universal playback position memory, and one-tap speed control.

## User Research
- **Methods**: 10 commuter interviews, app-store review mining (500+ reviews), playback-behavior survey (n=35)
- **Key Findings**:
  - 66% listen to both music AND podcasts daily — in 2 different apps
  - 78% lost a podcast position at least once a week
  - Speed control is top-3 used feature, buried 3 taps deep
  - Users want "smart queue": podcast episode auto-removed when finished, music resumes

## Personas

### Primary: Nikhil Joshi
- **Age**: 27 · Commutes 2 hrs/day by metro
- **Goals**: Podcasts on the way to work, music on the way back, zero fiddling
- **Pain Points**: Two apps, lost positions, queue chaos, speed buried
- **Quote**: "My phone should know: mornings = news podcast, evenings = lo-fi"

### Secondary: Elena Petrova
- **Age**: 33 · Podcaster herself · Listens 3 hrs/day
- **Goals**: 1.5-2x speed everywhere, chapter navigation, sleep timer
- **Pain Points**: Speed resets per app; no chapters in most players
- **Quote**: "Give me persistent 1.8x speed and chapters, and I'll switch forever"

## User Flows
1. **Smart queue flow**: Home → "Your morning mix" (2 podcast episodes + music) → play → episode finishes → auto-advances to music → position saved everywhere
2. **Speed control flow**: Now playing → single tap on speed chip → 1x/1.25x/1.5x/1.75x/2x cycle → persists across all content
3. **Sleep timer flow**: Night listening → timer chip → 20 min → gentle fade-out

## Wireframes (see Figma-Files/)
- Home with "Morning Mix" smart queue card
- Now-playing with persistent speed chip + waveform seek
- Queue view showing mixed content with type icons

## Figma Designs
- Deep space dark theme (#0b0d14) with electric violet + cyan accents
- Waveform-based seeking (not boring progress bars)
- Content type always visible: 🎵 music vs 🎙️ podcast badges

## Prototype Interactions
- Live animated waveform seek bar
- Speed chip tap-cycles with spring pop
- Queue reorder via long-press drag
- Sleep timer with fade-out demo

## Usability Testing
- **Participants**: 8 daily commuters
- **Tasks**: Start morning mix, change speed mid-episode, find yesterday's position, set sleep timer
- **Results**: 95% success · speed control found in <3s by all (vs 20s+ in existing apps) · SUS 89
- **Iterations**: Added "continue where you left" home banner after 3 users missed it; waveform seek granularity reduced after accidental jumps

## Presentation Structure (12 slides)
Title → Problem → Research → Personas → Flows → Wireframes → Visual design → Waveform concept → Prototype → Testing → Iterations → Roadmap
