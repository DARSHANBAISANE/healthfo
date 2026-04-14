/**
 * Vitalis Intelligence Engine
 * Core logic for nutrient scoring, allergen filtering, and user-match calculations.
 */

const VitalisIntelligence = {
    /**
     * Calculates the "Healthfo Score" for a dish.
     * Formula: (Nutrient Density / User Goal Weight) × Taste Match Percentage
     * @param {Object} dish - Dish data (macros, nutrients, flavors).
     * @param {Object} profile - User profile (goals, weight, taste DNA).
     * @returns {number} Score out of 100.
     */
    calculateScore(dish, profile) {
        // 1. Safety Filter (The Allergen Shield)
        if (this.isUnsafe(dish, profile.allergies)) {
            return 0;
        }

        // 2. Goal Fit (Nutrient Density vs Goal Weighting)
        let goalScore = this.evaluateGoalFit(dish, profile.goal);

        // 3. Taste Match (DNA Alignment)
        let tasteScore = this.evaluateTasteDNA(dish, profile.tasteDNA);

        // Weighted Aggregation
        // 60% Goal/Nutrient, 40% Taste/Preference
        const finalScore = (goalScore * 0.6) + (tasteScore * 0.4);
        
        return Math.min(100, Math.round(finalScore));
    },

    /**
     * Hard safety check for allergens.
     */
    isUnsafe(dish, userAllergies) {
        if (!userAllergies || userAllergies.length === 0) return false;
        return dish.ingredients.some(ingredient => 
            userAllergies.includes(ingredient.toLowerCase())
        );
    },

    /**
     * Evaluates how well the dish's macros fit the user's current goal (e.g. Keto, Muscle Gain).
     */
    evaluateGoalFit(dish, goal) {
        let score = 70; // Baseline

        switch(goal) {
            case 'Keto':
                if (dish.macros.carbs < 15) score += 20;
                if (dish.macros.fat > 20) score += 10;
                break;
            case 'Muscle Gain':
                if (dish.macros.protein > 30) score += 30;
                break;
            case 'Weight Loss':
                if (dish.calories < 600) score += 20;
                if (dish.macros.fiber > 8) score += 10;
                break;
        }

        return Math.min(100, score);
    },

    /**
     * Evaluates alignment with the user's Taste DNA (Spicy, Savory, etc.)
     */
    evaluateTasteDNA(dish, tasteDNA) {
        let matches = 0;
        const totalPreferences = Object.keys(tasteDNA).length;
        
        for (let flavor in tasteDNA) {
            if (dish.flavors.includes(flavor)) {
                matches++;
            }
        }

        return (matches / totalPreferences) * 100;
    }
};

// Export for use in modules
if (typeof module !== 'undefined') {
    module.exports = VitalisIntelligence;
}
