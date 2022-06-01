import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems : cartItems, 
    amount : 1,
    total:0,
    isLoading:true,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers : {
        clearCart : (state) => {
            state.cartItems = [];
        },
        removeItem : (state , action) => {
            const itemid = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemid);
        },
        increase : (state , action) => {
            const itemid = action.payload.id
            const cartItem = state.cartItems.find((item) => item.id === itemid);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease : (state , action) => {
            const itemid = action.payload.id
            const cartItem = state.cartItems.find((item) => item.id === itemid)
            cartItem.amount = cartItem.amount - 1;
        },
        caluculateTotal : (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount = amount + item.amount;
                total = total + item.amount * item.price;
            })
            state.amount = amount;
            state.total = total;
        }
    },
});


export const {clearCart ,  removeItem , increase , decrease , caluculateTotal} = cartSlice.actions;
export default cartSlice.reducer