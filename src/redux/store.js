import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./rootReducer";

// Configure the persist options
const persistConfig = {
  key: "root",
  storage,
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
const store = configureStore({
  reducer: persistedReducer,
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };
