import { combineReducers } from "redux";

import {
    UPDATE_MOBILE,
    TOGGLE_DRAWER,
    UPDATE_DIFFICULTY,
    CLOSE_DRAWER,
    TOGGLE_BORDER,
    TOGGLE_DARK_MODE, TOGGLE_MONKEYS, TOGGLE_HEROES
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

function darkModeReducer(state = false, action) {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            return !state;
        default:
            return state;
    }
}

const initialFilters = {
    "border": false,
    "heroes": true,
    "monkeys": true,
    "difficulty": "medium"
}
function filterReducer(state = initialFilters, action) {
    switch (action.type) {
        case UPDATE_DIFFICULTY:
            return { ...state, "difficulty": action.value};
        case TOGGLE_BORDER:
            return { ...state, "border": !state.border};
        case TOGGLE_HEROES:
            return { ...state, "heroes": !state.heroes};
        case TOGGLE_MONKEYS:
            return { ...state, "monkeys": !state.monkeys};
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    mobile: mobileReducer,
    drawer: drawerReducer,
    darkMode: darkModeReducer,
    filters: filterReducer
});

export default rootReducer;