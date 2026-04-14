/**
 * Vitalis State Management
 * Handles persistence of user health profile, taste DNA, and preferences.
 */

const VitalisState = {
    STORAGE_KEY: 'healthfo_user_state',

    /**
     * Default State Template
     */
    defaults: {
        profile: {
            age: null,
            weight: null,
            height: null,
            activity: 'Moderate',
            goal: 'General Health'
        },
        tasteDNA: {
            spicy: false,
            savory: true,
            sweet: false,
            sour: false
        },
        allergies: [],
        lastMealFeedback: null
    },

    /**
     * Initialize or Get State
     */
    getState() {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            if (!stored) {
                return JSON.parse(JSON.stringify(this.defaults));
            }
            const parsed = JSON.parse(stored);
            // Basic sanitization: Ensure critical structures exist
            return { ...this.defaults, ...parsed };
        } catch (e) {
            console.error("VitalisState: Failed to load state", e);
            return JSON.parse(JSON.stringify(this.defaults));
        }
    },

    /**
     * Save updated state
     */
    saveState(state) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
        } catch (e) {
            console.error("VitalisState: Failed to save state", e);
        }
    },

    /**
     * Update specific parts of the state
     */
    updateState(updates) {
        const currentState = this.getState();
        const newState = { ...currentState, ...updates };
        this.saveState(newState);
        return newState;
    },

    /**
     * Check if user is onboarded
     */
    isOnboarded() {
        const state = this.getState();
        return !!(state.profile.age && state.profile.weight);
    }
};

// Export for module systems or attach to window for simple script tags
if (typeof module !== 'undefined') {
    module.exports = VitalisState;
} else {
    window.VitalisState = VitalisState;
}
