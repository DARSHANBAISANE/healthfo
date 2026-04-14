# Healthfo System Workflow: Product Design Documentation

## 1. User Onboarding & Identity Mapping
**Goal:** Establish the baseline "Health & Taste" DNA of the user.

* **Step 1.1: Health Profile Creation**
    * Input: Age, Weight, Height, Activity Level (Sedentary to Athlete).
    * Medical Filters: Diabetes-friendly, Hypertension, PCOS, etc.
    * Goal Selection: Weight Loss, Muscle Gain, Maintenance, or Longevity.
* **Step 1.2: Food Preference Intelligence (Delight Feature 1)**
    * **Taste Profile:** Spicy, Savory, Sweet, Sour preferences.
    * **Cuisine Map:** Favorite and Avoided cuisines (e.g., Mediterranean, Indian, Keto).
    * **Ethical/Dietary:** Vegan, Halal, Organic-only, Seasonal-only.
    * **Allergen Shield:** Toggle for nuts, dairy, gluten, etc. (System-wide hard filters).

---

## 2. The Contextual Intelligence Engine (Real-time Processing)
This loop runs in the background to personalize the "Home Feed."

* **Decision Point: Input Scenarios**
    * *IF* User just synced a workout -> *ACTION:* Boost Protein/Carb ratio in recommendations.
    * *IF* Weather is < 15°C -> *ACTION:* Suggest "Warm & Healing" categories (Broths, Stews).
    * *IF* Time is 8 AM - 10 AM -> *ACTION:* Show "Power Breakfasts"; *IF* 10 PM -> *ACTION:* Show "Sleep-Inducing Snacks."
    * *IF* Mood (User Input) is "Stressed" -> *ACTION:* Suggest Magnesium-rich foods (Dark chocolate, Nuts).

---

## 3. The Core User Journey: Meal Discovery & Selection

* **Journey A: "Feed Me Now" (Ordering Nearby)**
    * System scans nearby Zomato-partnered restaurants.
    * **Personalization Logic:** Filter menu items against "Health Profile."
    * **UI Output:** "Healthfo Score" for each dish (e.g., "95% Match for your Keto Goal").
    * **Insights:** Display: "High Protein," "Low Sodium," "Good for Skin."
    * User selects -> Order Placement.

* **Journey B: "I’m Cooking" (At-Home Recipes)**
    * System suggests recipes based on "Preference Intelligence."
    * Integration: Check "Digital Pantry" (if user tracks inventory) or suggest a shopping list.
    * Instructional Guide: Step-by-step healthy cooking with nutritional tracking.

---

## 4. Advanced Meal Planning (Delight Feature 2)
**Goal:** Reduce cognitive load for the upcoming week.

* **Workflow:**
    1.  User enters "Planner" mode.
    2.  Selects Duration (3-day, 5-day, or Weekly).
    3.  **Auto-Suggestion Engine:** System fills slots for Breakfast, Lunch, and Dinner.
        * *Logic:* Ensures variety (doesn't repeat chicken 3 days in a row).
        * *Logic:* Balances weekly macros (if Monday was high-carb, Tuesday is lower-carb).
    4.  User modifies/swaps items.
    5.  **Reminders:** Push notifications 2 hours before mealtime ("Ready for your Grilled Salmon?").
    6.  **Auto-Cart:** Option to bulk-order all ingredients for the week via Zomato/Blinkit.

---

## 5. Habit Tracking & Feedback Loop

* **The Post-Meal Prompt:** "How did you feel after that meal?" (Energetic, Bloated, Heavy).
* **Behavioral Adjustment:** If user feels "Bloated" after dairy, system suggests "Dairy-Free" alternatives for the next 48 hours.
* **Weekly Health Report:**
    * Visualizing goals vs. actual consumption.
    * "Smart Improvement": "You missed your fiber goal by 20%. Try adding these 3 snacks next week."

---

## 6. System Interactions & Data Flow (Technical Logic)

1.  **Input Layer:** HealthKit/Google Fit (Steps/Sleep), Manual Mood Check, Location/Weather API.
2.  **Processing Layer (Healthfo AI):**
    * *Scoring Algorithm:* Ranks food based on (Nutrients / User Goal) + Taste Match.
    * *Constraint Solver:* Ensures no allergens are ever suggested.
3.  **Output Layer:** Push Notifications, Dynamic Home Feed, Personalized Menu Tags.

---

## 7. Decision Tree: Should I Recommend This Dish?

1.  **START:** User opens app.
2.  **Filter 1 (Safety):** Does it contain allergens? -> *YES:* Hide dish. *NO:* Proceed.
3.  **Filter 2 (Goal):** Does it fit within the remaining daily calorie budget? -> *YES:* Proceed. *NO:* Label as "Cheat Meal" or hide.
4.  **Filter 3 (Context):** Is the restaurant currently open and within 5km? -> *YES:* Proceed.
5.  **Filter 4 (Preference):** Does it match the "Taste Profile"? -> *YES:* Rank High. *NO:* Rank Low.
6.  **END:** Display Top 5 Recommendations.