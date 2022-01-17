import {combineReducers} from "redux";

import {
    CLOSE_DRAWER,
    UPDATE_MOBILE, UPDATE_DIFFICULTY, UPDATE_PAGE,
    TOGGLE_DRAWER, TOGGLE_BORDER, TOGGLE_DARK_MODE, TOGGLE_MONKEYS, TOGGLE_HEROES, TOGGLE_TOOLTIP_MODIFIERS
} from "./actions";

const oneYearInMs = 365 * 24 * 60 * 60 * 1000;

const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;


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

export const initialDarkMode = {
    "darkMode": false
};
function darkModeReducer(state=initialDarkMode, action) {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            return { ...state, "darkMode": !state.darkMode };
        default:
            return state;
    }
}

const initialFilters = {
    "border": false,
    "heroes": true,
    "monkeys": true,
    "showTooltipModifiers": false,
    "difficulty": "medium"
};
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
        case TOGGLE_TOOLTIP_MODIFIERS:
            return { ...state, "showTooltipModifiers": action.value};
        default:
            return state;
    }
}

export const initialPage = {};
function pageReducer(state=initialPage, action) {
    switch (action.type) {
        case UPDATE_PAGE:
            return { ...state, [action.page]: { "data": action.value} };
        default:
            return state;
    }
}

const rootReducerObject = {
    mobile: mobileReducer,
    drawer: drawerReducer,
    darkMode: darkModeReducer,
    filters: filterReducer,
    page: pageReducer,
};

const rootReducer = combineReducers(rootReducerObject);
export default rootReducer;