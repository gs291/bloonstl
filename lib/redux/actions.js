

export const TOGGLE_MOBILE = "TOGGLE_MOBILE";
export const TOGGLE_DRAWER = "TOGGLE_DRAWER";

export function toggleDrawer() {
    return { type: TOGGLE_DRAWER };
}

export function toggleMobile() {
    return { type: TOGGLE_MOBILE };
}
