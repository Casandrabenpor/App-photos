import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../features/buttonSlice/favoriteSlice";
import { saveAs } from 'file-saver';
import "./icon.css";

export const ApiPhotos = (props) => {
    const dispatch = useDispatch();

  const handleHeart = (event) => {
    event.preventDefault(); // evita que la página se recargue
    //Si la foto ya esta en favorito
    if (props.isFavorite){
      // Cuando pulsas,se elimina de favoritos
      dispatch(removeFromFavorites(props.photo));
    }else{
      //sino se añade a favoritos
      dispatch(addToFavorites(props.photo));
    }
  
  };
  

 const handleDownload = () =>{
  saveAs(props.photo.url,`${props.photo.id}.jpg`)
 }
  return (
    <div>
      <img className="img-cover" alt="random" src={props.photo.url} />
      <a href="/" onClick={handleHeart}className={props.isFavorite ? "iconFavActive" : "iconFav"}>
      {props.isFavorite ? <ion-icon name="heart"/> : <ion-icon name="heart-outline"/>}
           
          </a>

      <a onClick={handleDownload} className="icon-download">
        <ion-icon name="cloud-download" value="download"></ion-icon>
      </a>
    </div>
  );
};
