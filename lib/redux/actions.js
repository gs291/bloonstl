export const TOGGLE_DRAWER = "TOGGLE_DRAWER";
export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const CLOSE_DRAWER = "CLOSE_DRAWER";
export const UPDATE_MOBILE = "UPDATE_MOBILE";

export const UPDATE_DIFFICULTY = "UPDATE_DIFFICULTY";
export const UPDATE_BORDER = "UPDATE_BORDER";

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
