import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice'
import modelReducer from "./features/Modal/modelSlice";
export const store = configureStore({
    reducer : {
        cart : cartReducer,
        model : modelReducer,
    },
});