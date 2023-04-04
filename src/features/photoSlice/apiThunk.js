import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadPhotos = createAsyncThunk("photos/getPhotos", async (queryValue = "") => {
    
    
    const data = await fetch(
        `https://api.unsplash.com/photos/random?client_id=c6-Zu3LQmTu2l5yW5lDfXq2L2Wpg1Q7f0kF286entVg&count=20&query=${queryValue}`
    ).catch((error) => {
        throw error;
    });
    const json = await data.json().catch((error) => {
        throw error;
    });

    let photos = json.map((photo)=> ({
        url: photo.urls.regular,
        id: photo.id,
        description:photo.alt_description,
        width:photo.width,
        height:photo.height,
        likes:photo.likes,
        urlFull:photo.urls.full,
        urlThumb:photo.urls.thumb,
        date:photo.updated_at
    }));
    return photos;
  });



  