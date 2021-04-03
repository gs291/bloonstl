import { combineReducers } from "redux";

import {UPDATE_MOBILE, TOGGLE_DRAWER, UPDATE_DIFFICULTY, CLOSE_DRAWER} from "./actions";

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

function difficultyReducer(state = "medium", action) {
    switch (action.type) {
        case UPDATE_DIFFICULTY:
            return action.difficulty;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    mobile: mobileReducer,
    drawer: drawerReducer,
    difficulty: difficultyReducer
});

export default rootReducer;