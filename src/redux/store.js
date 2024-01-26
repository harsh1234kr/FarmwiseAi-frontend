// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'; // use session storage
import rootReducer from './reducers';



const persistConfig = {
  key: 'root',
  storage: storageSession,
  blacklist: [], // If you want to persist everything, keep it empty
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
