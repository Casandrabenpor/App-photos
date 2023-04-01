import { configureStore } from '@reduxjs/toolkit';
import { photosSlice } from '../features/photoSlice/photosSlice';
import { favoriteSlice } from '../features/buttonSlice/favoriteSlice';
import { InfoFavSlice } from '../features/buttonSlice/InformationFavSlice';

export const store = configureStore({
  reducer: {
    photos:photosSlice.reducer,
    favorite: favoriteSlice.reducer,
    remove: InfoFavSlice.reducer

  },
});
