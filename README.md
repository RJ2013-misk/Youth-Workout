# Rugby Preparation Workout (PWA)

iPhone-friendly workout app for the 3-day Rugby Preparation Gym Workout Plan.

- Each day lists exercises with sets x reps; tap one for a description, steps and a stick-figure diagram.
- Tap "I did today's workout" to log it. The status dot (and icon) is red until a workout is logged today, then green.
- Data is stored only on the device (localStorage). Works offline.

## Install on iPhone
1. Enable GitHub Pages (Settings > Pages > Deploy from branch `main`, root).
2. Open `https://rj2013-misk.github.io/Youth-Workout/` in Safari.
3. Share > Add to Home Screen.

iOS captures the home-screen icon only when the app is added, so the home-screen icon cannot change color afterward. The in-app status dot, header and theme color always show red/green.

## Editing
Exercises: `workout_data.js`. Diagrams: `diagrams.js`.
