import { createSlice } from "@reduxjs/toolkit";

interface Cart {
    _id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    category: string;
}

const initialState : Cart = {
    _id: "",
    name: "",
    price: 0,
    image: "",
    quantity: 0,
    category: ""
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state) => {
            state.quantity += 1;
        },
        removeItem: (state) => {
            state.quantity -= 1;
        },
        update: (state, action) => {
            state.quantity = action.payload.quantity;
        }
    }
})

export const { addItem, removeItem, update } = cartSlice.actions
export default cartSlice.reducer