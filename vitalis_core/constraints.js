/**
 * Vitalis Constraint System
 * Implementation of the "Allergen Shield" and other hard-safety invariants.
 */

const VitalisConstraints = {
    /**
     * The Allergen Shield
     * Ensures no dish containing a listed allergen is ever presented.
     */
    enforceAllergenShield(dishes, userAllergies) {
        if (!userAllergies || userAllergies.length === 0) return dishes;
        
        return dishes.filter(dish => {
            const isUnsafe = dish.ingredients.some(ingredient => 
                userAllergies.includes(ingredient.toLowerCase())
            );
            return !isUnsafe;
        });
    },

    /**
     * Calorie Cap Solver
     * Filters dishes that exceed a specific remaining calorie budget.
     */
    applyCalorieCap(dishes, remainingBudget) {
        return dishes.filter(dish => dish.calories <= remainingBudget);
    },

    /**
     * Constraint Synthesis
     * Applies all safety and budget filters in sequence.
     */
    applyAll(dishes, profile, context) {
        let filtered = this.enforceAllergenShield(dishes, profile.allergies);
        filtered = this.applyCalorieCap(filtered, context.remainingCalories);
        return filtered;
    }
};

if (typeof module !== 'undefined') {
    module.exports = VitalisConstraints;
}
