import { combineReducers } from "redux";

import { TOGGLE_MOBILE, TOGGLE_DRAWER } from "./actions";

function mobileReducer(state = false, action) {
    switch (action.type) {
        case TOGGLE_MOBILE:
            return !state;
        default:
            return state;
    }
}

function drawerReducer(state = false, action) {
    switch (action.type) {
        case TOGGLE_DRAWER:
            return !state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    mobile: mobileReducer,
    drawer: drawerReducer
});

export default rootReducer;