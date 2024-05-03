import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user_Reducer from './User/user_Reducer';
import cartSlice from './Product/product_Reducer'

const persistConfig = {
    key : "store",
    storage,
    whitelist: ["user", "cart"] 
}

const rootReducer = combineReducers({
    user : user_Reducer,
    cart : cartSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;