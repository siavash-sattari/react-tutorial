import { legacy_createStore as createStore } from 'redux';
import reducers from './reducers/rootReducer';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['count'] => only count will be persisted
    // blacklist: ['product'] => product will not be persisted
}

const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer)
const persistor = persistStore(store)

export {store, persistor}