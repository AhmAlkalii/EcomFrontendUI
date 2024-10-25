import { createSlice } from "@reduxjs/toolkit";
import { shoppingCarttModel } from "../../Interfaces";

const initialState : shoppingCarttModel = {
    cartItems: [],
}


export const shoppingCartSlice = createSlice({
    name: "cartItems",
    initialState: initialState,
    reducers: {
        setShoppingCart: (state, action) => {
            state.cartItems = action.payload;
        },
        updateQuantity: (state, action) => {
            //in payload we will be getting cart item that needs to be updated and a new quantity
            state.cartItems = state.cartItems?.map((item) => {
                if(item.id === action.payload.cartItem.id){
                    item.quantity = action.payload.quantity
                }
                return item;
            })
        },
        removeFromCart: (state, action) => {
            //in payload we will be getting cart item that needs to be updated and a new quantity
            state.cartItems = state.cartItems?.filter((item) => {
                if(item.id === action.payload.cartItem.id){
                    return null
                }
                return item;
            })
        },
    },
})

export const { setShoppingCart, updateQuantity, removeFromCart } = shoppingCartSlice.actions;
export const shoppingCartReducer = shoppingCartSlice.reducer;