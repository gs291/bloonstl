import { combineReducers } from "redux";

import { UPDATE_MOBILE, TOGGLE_DRAWER } from "./actions";

function mobileReducer(state = false, action) {
    switch (action.type) {
        case UPDATE_MOBILE:
            return action.mobile;
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