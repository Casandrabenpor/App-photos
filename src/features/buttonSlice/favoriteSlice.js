import { createSlice } from "@reduxjs/toolkit";
import { readLocalStorage,addPhotoToLocalStorage,deletePhotoFromLocalStorage } from "../../data/localStorage";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    list: [], // Agrega una lista vacía de favoritos
    loaded: false,
  },
  reducers: {
    addToFavorites: (state, action) => {
      //Añades y lees la foto en localstorage
      addPhotoToLocalStorage(action.payload);
      let localStorage = readLocalStorage();
      state.list = localStorage.data;
    },
    removeFromFavorites:(state, action) => {
      //Elimina
      deletePhotoFromLocalStorage(action.payload);
      let localStorage = readLocalStorage();
      state.list = localStorage.data;
    },
    loadFavorites:(state,action) =>{
      // Carga inicial de las fotos guardadas en la sesión
      let localStorage = readLocalStorage();
      state.list = localStorage.data;  
      state.loaded = true;
    },
    filterFavorites:(state, action) =>{
      let localStorage = readLocalStorage();
      let list = localStorage.data;
      
      if (action.payload){
        let filterList = list.filter(photo=>photo.description.includes(action.payload));
        state.list = filterList;
      }else{
        state.list = localStorage.data;  
      }
    }
  },
});

export const{ addToFavorites, removeFromFavorites , loadFavorites,filterFavorites} = favoriteSlice.actions;