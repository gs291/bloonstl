import { createStore } from "redux";
import { persistStore } from "redux-persist";

import rootReducer from "./reducers";

export default function configureStore() {
    let store;

    const isClient = typeof window !== 'undefined';

    if (isClient) {
        const { persistReducer } = require('redux-persist');
        const storage = require('redux-persist/lib/storage').default;

        const persistConfig = {
            key: 'root',
            storage,
            whitelist: ['darkMode']
        };

        store = createStore(persistReducer(persistConfig, rootReducer));

        store.__PERSISTOR = persistStore(store);
    } else {
        store = createStore(rootReducer);
    }

    return store;
}

