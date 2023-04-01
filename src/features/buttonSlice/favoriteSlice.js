import { createSlice } from "@reduxjs/toolkit";


export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    list: [], // Agrega una lista vacía de favoritos
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.list.push(action.payload); // Agrega la nueva foto a la lista de favoritos
    },
    removeFromFavorites:(state, action) => {
      state.list = state.list.filter(photo => photo.id !== action.payload.id);
    },
  },
});

export const{ addToFavorites, removeFromFavorites } = favoriteSlice.actions;