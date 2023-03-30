import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadPhotos = createAsyncThunk("photos/getPhotos", async (queryValue = "") => {
    console.log(queryValue);
    
    const data = await fetch(
        `https://api.unsplash.com/photos/random?client_id=c6-Zu3LQmTu2l5yW5lDfXq2L2Wpg1Q7f0kF286entVg&count=10&query=${queryValue}`
    ).catch((error) => {
        throw error;
    });
    const json = await data.json().catch((error) => {
        throw error;
    });

    let photos = json.map((photo)=> ({
        url: photo.urls.small
    }));
    return photos;
  });



  