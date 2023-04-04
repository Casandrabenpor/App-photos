

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from 'react';
import { TopBar } from "../components/topBar";
import { useLocation } from "react-router-dom";
import { MainPhoto } from "../components/mainPhoto";
import { Search } from "../components/search";
import "../components/cardCollection.css";
import { ApiPhotos } from "../components/homePhotos";
import { loadPhotos } from "../features/photoSlice/apiThunk";
import {
  getPhotosStatus,
  getAllPhotos,
  getPhotosError,
} from "../features/photoSlice/searchSlice";
import { Footer } from "../components/footer";

export const HomePage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const photosStatus = useSelector(getPhotosStatus);
  const photosData = useSelector(getAllPhotos);
  const photosError = useSelector(getPhotosError);
  const favorites = useSelector(state => state.favorite.list);

  useEffect(() => {
    if (photosStatus === "idle") {
      dispatch(loadPhotos());
    }
  }, [photosStatus, dispatch]);

  const photosUI = () => {
    let photosListObjects = [];
    if (photosStatus === "loading") {
      photosListObjects.push(
        <div>
          <h2>LOADING</h2>
        </div>
      );
    } else if (photosStatus === "fulfilled") {
      Array.from(photosData).forEach((photo) => {
        // Un metodo para saber si favorito es el mismo id que el de la pagina myphotos, te devuelve true o false
        let isFavorite = favorites.some(favorite => favorite.id === photo.id); 
        photosListObjects.push(
          <React.Fragment key={photo.id}>
            <div className="photo-wrapper">
              <ApiPhotos photo={photo} isFavorite={isFavorite}  />
            </div>
            </React.Fragment>
        );
      });
    } else {
      photosListObjects.push(photosError);
    }

    return photosListObjects;
  };

  return (
    <>
      <TopBar location={location} />
      <MainPhoto className="MainPhoto" />
      <Search />
      <div className="reminderCardCollection">{photosUI()}</div>
      <Footer className="footer" />
    </>
  );
};
