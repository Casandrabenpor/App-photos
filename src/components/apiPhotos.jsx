import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../features/buttonSlice/favoriteSlice";
import { saveAs } from 'file-saver';
import "./icon.css";

export const ApiPhotos = (props) => {
   const dispatch = useDispatch();
  const [isFavorite, setIsFavorite]= useState(false);

  useEffect(() => {
    // Actualiza la lista de favoritos en función del estado del corazón
    if (isFavorite) {
      dispatch(addToFavorites(props.photo));
    } 
  }, [isFavorite, dispatch, props.photo]);

  const handleHeart = (event) => {
    event.preventDefault(); // evita que la página se recargue
    setIsFavorite(!isFavorite); // Actualiza el estado de isFavorite
    dispatch(addToFavorites(props.photo));
  };
  

 const handleDownload = () =>{
  saveAs(props.photo.url,`${props.photo.id}.jpg`)
 }
  return (
    <div>
      <img className="img-cover" alt="random" src={props.photo.url} />
      <a href="/" onClick={handleHeart}className={isFavorite ? "iconFavActive" : "iconFav"}>
      {isFavorite ? <ion-icon name="heart"/> : <ion-icon name="heart-outline"/>}
           
          </a>

      <a onClick={handleDownload} className="icon-download">
        <ion-icon name="cloud-download-outline" value="download"></ion-icon>
      </a>
    </div>
  );
};
