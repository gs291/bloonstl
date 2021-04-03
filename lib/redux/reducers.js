import { combineReducers } from "redux";

import {
    UPDATE_MOBILE,
    TOGGLE_DRAWER,
    UPDATE_DIFFICULTY,
    CLOSE_DRAWER,
    UPDATE_BORDER
} from "./actions";

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
        case CLOSE_DRAWER:
            return false;
        default:
            return state;
    }
}

const initialFilters = {
    "border": true,
    "difficulty": "medium"
}
function filterReducer(state = initialFilters, action) {
    switch (action.type) {
        case UPDATE_DIFFICULTY:
            return { ...state, "difficulty": action.value};
        case UPDATE_BORDER:
            return { ...state, "border": action.value};
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    mobile: mobileReducer,
    drawer: drawerReducer,
    filters: filterReducer
});

export default rootReducer;