import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import themeConfigSlice from './themeConfigSlice';
import infoConfigSlice from './infoConfigSlice';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
    userinfoconfig: infoConfigSlice,
});
const persistConfig = {
    key: 'root', // Key for storing in local storage
    storage, // Use local storage as the storage engine
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store = configureStore({
    reducer: persistedReducer, // Use the persisted reducer
  });

export const persistor = persistStore(store);

export type IRootState = ReturnType<typeof rootReducer>;
