import { loadPhotos } from "./apiThunk";
import { createSlice } from "@reduxjs/toolkit";

export const photosSlice = createSlice({
  name: "photos",
  initialState: {
    status: "idle",
    data: [],
  },
  reducers: {
    createPhoto: (state, action) => {
      // if (state.data.includes(action.payload) == false ){
      // state.data.push(action.payload);
      // }
    },
    deletePhoto: (state, action) => {
      state.data.splice(
        state.data.findIndex((photos) => photos === action.payload)
      );
    },
  },
  extraReducers: (buider) => {
    buider
      .addCase(loadPhotos.pending, (state) => {
        state.data = "loading";
      })
      .addCase(loadPhotos.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(loadPhotos.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      });
  },
});

export const { createPhoto, deletePhoto } = photosSlice.actions;
export const getAllPhotos = (state) => state.photos.data;
export const getPhotosError = (state) => state.photos.error;
export const getPhotosStatus = (state) => state.photos.status;