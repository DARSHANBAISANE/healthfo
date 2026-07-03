# healthfo
# Healthfo | Home Contextual Pulse

Welcome to the **Healthfo** dashboard codebase. This application tracks real-time health metrics, assesses user stress levels, and generates personalized, context-aware meal recommendations to optimize recovery and overall well-being.

---

## 🚀 Features

### 1. Real-Time Pulse Tracking
Monitors vital statistics from synced wearable devices:
*   **Steps:** Real-time step counter with percentage tracking against daily goals.
*   **Heart Rate:** Current resting or active BPM monitoring.
*   **Sleep Score:** Rest quality analysis to gauge morning readiness.

### 2. Contextual Health Insights
Analyzes biometric changes to provide immediate, actionable feedback:
*   **Mood & Stress Assessment:** Detects elevated physiological stress markers (e.g., tracking spikes in cortisol levels).
*   **Smart Prompts:** Suggests behavioral modifications such as deep breathing exercises and dietary adjustments (e.g., low-sodium guidance).

### 3. Tailored Meal Recommendations
A smart matchmaking algorithm that pairs current physiological needs with ideal nutritional profiles:
*   **Post-Run & Stress Recovery:** Prioritizes magnesium-rich, high-protein, and low-sodium ingredients.
*   **Immune & Gut Support:** Features targeted suggestions like zinc-boosting foods and prebiotics to optimize the gut-brain axis during high-stress periods.

---

## 🛠️ App Architecture & Pages

*   **[Home (`/home_contextual_pulse`)](https://healthfo-615343076226.us-central1.run.app/home_contextual_pulse/code.html):** The primary hub displaying the Vitality Status, real-time metrics, and quick insights.
*   **[Planner (`/advanced_meal_planner`)](https://healthfo-615343076226.us-central1.run.app/advanced_meal_planner/code.html):** Advanced meal schedule management.
*   **[Discovery (`/meal_discovery_logic_match`)](https://healthfo-615343076226.us-central1.run.app/meal_discovery_logic_match/code.html):** Explore new healthy recipes matched directly to your biomarkers.

---

## 📊 Sample Payload Data

When syncing wearable data, the application processes contextual metrics structured as follows:

```json
{
  "user": "Alex",
  "vitals": {
    "steps": 8432,
    "heart_rate_bpm": 72,
    "sleep_score": 84
  },
  "context": {
    "recent_activity": "5KM Run",
    "detected_mood": "Stressed",
    "cortisol_variance": "+15%"
  },
  "recommendations": [
    {
      "name": "Grilled Atlantic Salmon & Spinach Quinoa",
      "match_percentage": 95,
      "tags": ["High Protein", "Low Sodium"]
    }
  ]
}
