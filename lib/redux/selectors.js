export function getMobile(state) {
    return state.mobile;
}

export function getDrawer(state) {
    return state.drawer;
}

export function getDarkMode(state) {
    return state.darkMode;
}

export function getDifficulty(state) {
    return state.filters.difficulty;
}

export function getBorder(state) {
    return state.filters.border;
}

export function getHeroState(state) {
    return state.filters.heroes;
}

export function getMonkeyState(state) {
    return state.filters.monkeys;
}
