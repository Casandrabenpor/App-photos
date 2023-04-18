import { createSlice } from "@reduxjs/toolkit";
import {
  readLocalStorage,
  addPhotoToLocalStorage,
  deletePhotoFromLocalStorage,
} from "../../data/localStorage";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    list: [], // Agrega una lista vacía de favoritos
    loaded: false,
  },
  reducers: {
    addToFavorites: (state, action) => {
      //Añades y lee la foto en localstorage
      addPhotoToLocalStorage(action.payload);
      let localStorage = readLocalStorage();
      state.list = localStorage.data;
    },
    removeFromFavorites: (state, action) => {
      //Elimina
      deletePhotoFromLocalStorage(action.payload);
      let localStorage = readLocalStorage();
      state.list = localStorage.data;
    },
    loadFavorites: (state, action) => {
      // Carga inicial de las fotos guardadas en la sesión
      let localStorage = readLocalStorage();
      state.list = localStorage.data;
      state.loaded = true;
    },
    filterFavorites: (state, action) => {
      let localStorage = readLocalStorage();
      let list = localStorage.data;
      if (action.payload) {
        let filterList = list.filter((photo) =>{
          if(!photo.description)
          {
            return false;
          }
          return photo.description.includes(action.payload)
          });
        state.list = filterList;
      } else {
        state.list = localStorage.data;
      }
    },
    editFavorites: (state, action) => {
      deletePhotoFromLocalStorage(action.payload);
      addPhotoToLocalStorage(action.payload);
      let localStorage = readLocalStorage();
      state.list = localStorage.data;
    },
    //Para ordenar el date, width,height y likes de mis favoritos
    orderFavorites: (state, action) => {
      let favorites = state.list;

      if (action.payload === "width") {
        state.list = favorites.sort(
          (current, next) => current.width - next.width
        );
      } else if (action.payload === "height") {
        state.list = favorites.sort(
          (current, next) => current.height - next.height
        );
      } else if (action.payload === "likes") {
        state.list = favorites.sort(
          (current, next) => current.likes - next.likes
        );
      } else if (action.payload === "date") {
        state.list = favorites.sort(
          (current, next) => {

            let currentDate =  createDateFromString(current.date);
            let nextDate =  createDateFromString(next.date);
            return currentDate - nextDate;
          }
        );
      }
    },
  },
});
//función para ordenar los dias,meses y años en js
function createDateFromString(dateString){
  const parts = dateString.split("/");

// Nota: En JavaScript, los meses empiezan en 0 (enero es el mes 0)
  const year = parseInt(parts[2]);
  const month = parseInt(parts[1]) - 1;
  const day = parseInt(parts[0]);

  const date = new Date(year, month, day);    

  return date;
}


export const {
  addToFavorites,
  removeFromFavorites,
  loadFavorites,
  filterFavorites,
  editFavorites,
  orderFavorites,
} = favoriteSlice.actions;
