import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "./cartSlice";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, cartSlice);

const store = configureStore({
    reducer: {
        cart: persistedReducer,
    },
});

export const persistor = persistStore(store);
export default store;