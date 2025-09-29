#  Mood-Based Workout Recommendation System

A simple web application that recommends **personalized workout plans**
based on the user's current mood. By selecting a mood (e.g., *Energized,
Happy, Low, Calm, Stressed, Excited*), the system dynamically fetches
the right plan from a **JSON file** and displays it on the page.

------------------------------------------------------------------------

##  Features

-   Interactive **mood selector buttons**.\
-   Predefined workout routines stored in `plans.json`.\
-   Dynamic rendering of feedback, warm-up, main workout, and cool-down
    sections.\
-   Lightweight and easy to extend --- just add more moods to JSON.

------------------------------------------------------------------------

##  Tech Stack

-   **HTML** -- page structure\
-   **CSS** -- styling \
-   **JavaScript** -- event listeners, JSON fetch, DOM rendering\
-   **JSON** -- workout plan storage

------------------------------------------------------------------------

##  Project Structure

    .
    ├── index.html        # Main page with mood selector buttons
    ├── main.js           # JavaScript logic
    ├── plans.json        # Mood-based workout data
    └── README.md         # Project description

------------------------------------------------------------------------

##  How It Works

1.  User loads the page.\
2.  Workout plans are fetched from `plans.json`.\
3.  User clicks a mood button.\
4.  The corresponding workout is rendered in the `.workout-plan`
    section.

------------------------------------------------------------------------

##  Alignment with SDG

This project supports **UN SDG 3: Good Health and Well-Being** by
promoting physical activity, improving consistency, and encouraging
mental well-being.

------------------------------------------------------------------------

##  Future Improvements

-   Add progress tracking (e.g., completed workouts).\
-   Style the interface for better UX.\
-   Expand JSON with more moods and intensity levels.\
-   Mobile responsive design.

------------------------------------------------------------------------


