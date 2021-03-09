

export const UPDATE_MOBILE = "TOGGLE_MOBILE";
export const TOGGLE_DRAWER = "TOGGLE_DRAWER";

export function toggleDrawer() {
    return { type: TOGGLE_DRAWER };
}

export function updateMobile(mobile) {
    return { type: UPDATE_MOBILE, mobile };
}
