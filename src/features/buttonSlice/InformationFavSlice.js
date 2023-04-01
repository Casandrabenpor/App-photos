import { createSlice } from "@reduxjs/toolkit";

export const InfoFavSlice = createSlice({
    name:"remove ",
    initialState:{
        list:[],
    },
    reducers:{
        removeFromFavorites:(state, action) => {
            state.list = state.list.filter(photo => photo.id !== action.payload.id);
        },
    },
});
export const {removeFromFavorites} = InfoFavSlice.actions;