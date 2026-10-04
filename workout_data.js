// Source: Rugby_Preparation_Workout_Plan.pdf
window.WORKOUT = {
  title: "Rugby Preparation Gym Workout",
  objective: "Build functional strength, core stability, and contact resilience while protecting rapidly growing joints.",
  guidelines: [
    ["Leave reps in the tank", "Finish every set feeling you could do 2 more clean reps. Never train to failure."],
    ["Focus on form", "Lower for 2 seconds, then drive up with power. Do not chase heavy maximum weights."],
    ["Track progress", "Log weights weekly. Add only 2.5 to 5 lbs once all reps are easy."],
    ["Schedule", "3 non-consecutive days per week (e.g. Mon/Wed/Fri). Rest 60 to 90 seconds between sets."]
  ],
  days: [
    {
      id: 1,
      name: "Day 1",
      focus: "Foundational Leg Drive & Posture",
      exercises: [
        {
          id: "goblet-squat", name: "Barbell Goblet or Front Squat", sets: 3, reps: "8–10",
          summary: "Keeps the spine upright under load. Essential for scrummaging and solid tackling mechanics.",
          steps: [
            "Hold the weight tight against your chest, elbows pointing down.",
            "Feet shoulder-width apart, toes slightly out.",
            "Sit straight down for 2 seconds, chest tall, knees tracking over toes.",
            "Drive up through the whole foot."
          ]
        },
        {
          id: "lat-pulldown", name: "Lat Pulldowns or Pull-ups", sets: 3, reps: "8–12",
          summary: "Builds the upper back 'armor' needed to absorb contact safely.",
          steps: [
            "Grip the bar slightly wider than your shoulders.",
            "Pull the bar to your upper chest, driving elbows down toward your ribs.",
            "Squeeze your back at the bottom, then return slowly (2 seconds).",
            "Keep your torso still; no swinging."
          ]
        },
        {
          id: "back-extension", name: "Roman Chair Back Extensions", sets: 3, reps: "12",
          summary: "Strengthens the glutes and lower back to prevent injuries when leaning over rucks.",
          steps: [
            "Pad sits at your hips, feet locked in, arms crossed over your chest.",
            "Lower your torso slowly with a flat back.",
            "Squeeze glutes to raise until your body is in a straight line.",
            "Do not arch past straight."
          ]
        },
        {
          id: "face-pull", name: "Cable Face Pulls", sets: 3, reps: "15",
          summary: "Pulled toward the face while squeezing shoulder blades. Corrects posture and protects shoulders.",
          steps: [
            "Set the rope at face height with light weight.",
            "Pull the rope toward your face, elbows high and wide.",
            "Squeeze your shoulder blades together for a beat.",
            "Return under control."
          ]
        },
        {
          id: "plank", name: "Plank Matrix (Front & Sides)", sets: 3, reps: "30 seconds",
          summary: "Hold rigid positions to build the deep core stability needed to stay upright under impact.",
          steps: [
            "Front plank: forearms down, body in one straight line, glutes tight.",
            "Side plank: stack your feet, lift hips so the body is straight.",
            "Hold 30 seconds per position, breathing steadily.",
            "Do not let hips sag or pike."
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Day 2",
      focus: "Upper Body Contact Armor",
      exercises: [
        {
          id: "bench-press", name: "Barbell Bench Press", sets: 3, reps: "8",
          summary: "Control the bar slowly to the chest before driving up explosively. Builds hand-off/fending power.",
          steps: [
            "Lie flat, feet planted, shoulder blades pinched back.",
            "Lower the bar to mid-chest over 2 seconds.",
            "Press up explosively until arms are straight.",
            "Use a spotter."
          ]
        },
        {
          id: "rdl", name: "Barbell Romanian Deadlift (RDL)", sets: 3, reps: "8–10",
          summary: "Hinge at the hips with a slight knee bend. Builds explosive hamstrings and sprinting power.",
          steps: [
            "Stand tall holding the bar at your thighs.",
            "Push hips straight back with a slight knee bend, bar sliding down your legs.",
            "Lower until you feel a hamstring stretch, back flat.",
            "Squeeze glutes to stand tall."
          ]
        },
        {
          id: "seated-row", name: "Seated Cable Rows", sets: 3, reps: "10",
          summary: "Pull to the lower stomach and squeeze shoulder blades. Builds strong handling and tackling grip.",
          steps: [
            "Sit tall with a slight knee bend.",
            "Pull the handle to your lower stomach.",
            "Squeeze shoulder blades together.",
            "Return slowly without rounding forward."
          ]
        },
        {
          id: "db-ohp", name: "Standing DB Overhead Press", sets: 3, reps: "8",
          summary: "Press dumbbells vertically. Builds shoulder stability for lineouts and taking high balls.",
          steps: [
            "Hold dumbbells at shoulder height, core braced.",
            "Press straight up until arms are extended.",
            "Lower slowly to shoulders.",
            "Do not lean back."
          ]
        },
        {
          id: "farmers-walk", name: "Farmer's Walks", sets: 3, reps: "40 yds",
          summary: "Hold heavy dumbbells and walk tall with braced core. Develops full-body armor and grip strength.",
          steps: [
            "Pick up a heavy dumbbell in each hand.",
            "Stand tall, shoulders back, core braced.",
            "Walk 40 yards with short, controlled steps.",
            "Set the weights down; do not drop them."
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Day 3",
      focus: "Explosive Power & Single-Leg Balance",
      exercises: [
        {
          id: "hex-deadlift", name: "Barbell Hex-Bar Deadlift", sets: 3, reps: "6–8",
          summary: "Distributes weight evenly to protect a taller, young lower back while maximizing tackling power.",
          steps: [
            "Stand inside the hex bar, hips back, chest up.",
            "Grip the handles with a flat back.",
            "Push the floor away until you stand tall.",
            "Lower under control."
          ]
        },
        {
          id: "incline-db-press", name: "Incline Dumbbell Bench Press", sets: 3, reps: "8–10",
          summary: "Press at an upward angle. Strengthens the upper chest and front shoulders for collision resilience.",
          steps: [
            "Set the bench to a low incline (about 30°).",
            "Start with dumbbells at chest level.",
            "Press up and slightly together.",
            "Lower slowly (2 seconds)."
          ]
        },
        {
          id: "split-squat", name: "DB Bulgarian Split Squats", sets: 3, reps: "8 / leg",
          summary: "One foot rested on a bench behind you. Unmatched for single-leg sprinting drive and balance.",
          steps: [
            "Rear foot on a bench, front foot about 2 feet ahead.",
            "Lower straight down until the front thigh is parallel to the floor.",
            "Drive through the front heel to stand.",
            "Finish all reps, then switch legs."
          ]
        },
        {
          id: "underhand-pulldown", name: "Underhand Lat Pulldowns", sets: 3, reps: "10",
          summary: "Builds arm and upper back coordination used heavily in dragging down opponents.",
          steps: [
            "Use a shoulder-width underhand (palms facing you) grip.",
            "Pull the bar to your upper chest, elbows tucked.",
            "Squeeze your back and biceps.",
            "Return slowly."
          ]
        },
        {
          id: "knee-raise", name: "Hanging Knee Raises", sets: 3, reps: "10–12",
          summary: "Hang from a bar and raise knees to chest in a controlled motion to target lower abs.",
          steps: [
            "Hang from the bar with arms straight.",
            "Raise your knees toward your chest without swinging.",
            "Pause at the top.",
            "Lower slowly."
          ]
        }
      ]
    }
  ]
};
