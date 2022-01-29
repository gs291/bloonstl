import {createStore} from "redux";

import rootReducer from "./reducers";

const oneYearInSeconds = 365 * 24 * 60 * 60;
const thirtyDaysInSeconds = 30 * 24 * 60 * 60;

export default function configureStore() {
    let store;

    const isClient = typeof window !== 'undefined';

    if (isClient) {
        const expireReducer = require("redux-persist-expire");
        const storage = require("redux-persist/lib/storage").default;
        const {persistReducer, persistStore} = require("redux-persist");

        const {initialDarkMode, initialPage} = require("./reducers");

        const persistConfig = {
            key: 'root',
            storage,
            blacklist: ['mobile', 'drawer', 'filters'],
            transforms: [
                expireReducer('darkMode', {expireSeconds: oneYearInSeconds, autoExpire: true, expiredState: initialDarkMode}),
                expireReducer('page', {expireSeconds: thirtyDaysInSeconds, autoExpire: true, expiredState: initialPage})
            ]
        };

        store = createStore(persistReducer(persistConfig, rootReducer));

        store.__PERSISTOR = persistStore(store);
    } else {
        store = createStore(rootReducer);
    }

    return store;
}

