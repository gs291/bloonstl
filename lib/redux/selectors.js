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

export function getShowTooltipModifiers(state) {
    return state.filters.showTooltipModifiers;
}

export function getPageData(state, page) {
    return state.page[page] ? state.page[page].data : {};
}


