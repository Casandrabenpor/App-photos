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
  },
});

export const{addToFavorites} = favoriteSlice.actions;
export default favoriteSlice.reducer;