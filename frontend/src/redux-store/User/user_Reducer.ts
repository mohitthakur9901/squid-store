import { createSlice } from "@reduxjs/toolkit";


interface User {
    _id: string;
    profileImg: string;
    name: string;
    email: string;
    address: string;
    createdAt: string;
    updatedAt: string;
    orders: [];
}

const initialState: User = {
    _id: "",
    profileImg: "",
    name: "",
    email: "",
    address: "",
    createdAt: "",
    updatedAt: "",
    orders: []
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state._id = action.payload._id;
            state.name = action.payload.name;
            state.profileImg = action.payload.profileImg
            state.email = action.payload.email;
            state.createdAt = action.payload.createdAt;
            state.updatedAt = action.payload.updatedAt;
            state.orders = action.payload.orders;
            state.address = action.payload.address;
        },
        clearUser : (state, action) => {
            state._id = action.payload._id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.createdAt = action.payload.createdAt;
            state.updatedAt = action.payload.updatedAt;
            state.orders = action.payload.orders;
            state.address = action.payload.address;
        }
    },
});

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer