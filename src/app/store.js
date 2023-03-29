import { configureStore } from '@reduxjs/toolkit';
import { photosSlice } from '../features/photoSlice/photosSlice';

export const store = configureStore({
  reducer: {
    photos:photosSlice.reducer
  },
});
