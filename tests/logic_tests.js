/**
 * Vitalis Logic Check (Automated Test Suite)
 * This script runs unit tests against the core intelligence and constraint logic.
 */

const VitalisTests = {
    results: [],

    /**
     * Test Runner
     */
    runAll() {
        console.log("%c Vitalis Logic Check: Starting...", "color: #176a21; font-weight: bold;");
        
        this.testAllergenShield();
        this.testCalorieScoring();
        this.testStatePersistence();

        this.summarize();
    },

    /**
     * Assert Utility
     */
    assert(name, condition) {
        this.results.push({ name, passed: !!condition });
        if (condition) {
            console.log(`%c [PASS] ${name}`, "color: #176a21;");
        } else {
            console.error(` [FAIL] ${name}`);
        }
    },

    /**
     * Test Cases: Allergen Shield
     */
    testAllergenShield() {
        const dishes = [
            { name: "Peanut Chicken", ingredients: ["Chicken", "Peanuts"] },
            { name: "Salad", ingredients: ["Lettuce", "Cucumber"] }
        ];
        const allergies = ["peanuts"];
        
        const filtered = VitalisConstraints.enforceAllergenShield(dishes, allergies);
        this.assert("Allergen Shield: Removes peanut dish", filtered.length === 1 && filtered[0].name === "Salad");
    },

    /**
     * Test Cases: Calorie Scoring
     */
    testCalorieScoring() {
        // High density vs Low density
        const score1 = VitalisIntelligence.calculateHealthScore({ calories: 500, nutrients: { protein: 50 } });
        const score2 = VitalisIntelligence.calculateHealthScore({ calories: 500, nutrients: { protein: 10 } });
        
        this.assert("Intelligence: High protein scores higher than low protein", score1 > score2);
    },

    /**
     * Test Cases: State Layer
     */
    testStatePersistence() {
        const testData = { profile: { age: 99 } };
        VitalisState.saveState(testData);
        const loaded = VitalisState.getState();
        this.assert("State Layer: Persistence loop matches", loaded.profile.age === 99);
    },

    /**
     * Summary
     */
    summarize() {
        const passed = this.results.filter(r => r.passed).length;
        const total = this.results.length;
        console.log(`%c RESULTS: ${passed}/${total} tests passed.`, "font-weight: bold;");
    }
};

// Automatic execution for auditing/analysis
if (typeof window !== 'undefined') {
    window.VitalisTests = VitalisTests;
}
