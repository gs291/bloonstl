

export const TOGGLE_DRAWER = "TOGGLE_DRAWER";
export const CLOSE_DRAWER = "CLOSE_DRAWER";
export const UPDATE_MOBILE = "UPDATE_MOBILE";
export const UPDATE_DIFFICULTY = "UPDATE_DIFFICULTY";

export function toggleDrawer() {
    return { type: TOGGLE_DRAWER };
}

export function closeDrawer() {
    return { type: CLOSE_DRAWER };
}

export function updateMobile(mobile) {
    return { type: UPDATE_MOBILE, mobile };
}

export function updateDifficulty(difficulty) {
    return { type: UPDATE_DIFFICULTY, difficulty};
}
