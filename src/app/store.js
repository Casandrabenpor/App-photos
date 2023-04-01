import { configureStore } from '@reduxjs/toolkit';
import { photosSlice } from '../features/photoSlice/photosSlice';
import { favoriteSlice } from '../features/buttonSlice/favoriteSlice';

export const store = configureStore({
  reducer: {
    photos:photosSlice.reducer,
    favorite: favoriteSlice.reducer
  },
});
