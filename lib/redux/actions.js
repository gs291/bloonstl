export const TOGGLE_DRAWER = "TOGGLE_DRAWER";
export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const CLOSE_DRAWER = "CLOSE_DRAWER";
export const UPDATE_MOBILE = "UPDATE_MOBILE";

export const UPDATE_DIFFICULTY = "UPDATE_DIFFICULTY";
export const TOGGLE_BORDER = "TOGGLE_BORDER";
export const TOGGLE_HEROES = "TOGGLE_HEROES";
export const TOGGLE_MONKEYS = "TOGGLE_MONKEYS";
export const TOGGLE_TOOLTIP_MODIFIERS = "TOGGLE_TOOLTIP_MODIFIERS"

export function toggleDrawer() {
    return { type: TOGGLE_DRAWER };
}

export function closeDrawer() {
    return { type: CLOSE_DRAWER };
}

export function toggleDarkMode() {
    return { type: TOGGLE_DARK_MODE };
}

export function updateMobile(mobile) {
    return { type: UPDATE_MOBILE, mobile };
}

export function updateFilter(filter, value) {
    return { type: filter, value };
}
