import { createStore } from "redux";
import { persistStore } from "redux-persist";

import rootReducer from "./reducers";

export default function configureStore(initialState) {
    let store;

    const isClient = typeof window !== 'undefined';

    if (isClient) {
        const { persistReducer } = require('redux-persist');
        const storage = require('redux-persist/lib/storage').default;

        const persistConfig = {
            key: 'root',
            storage
        };

        store = createStore(
            persistReducer(persistConfig, rootReducer),
            initialState
        );

        store.__PERSISTOR = persistStore(store);
    } else {
        store = createStore(
            rootReducer,
            initialState
        );
    }

    return store;
}

