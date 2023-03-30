import { useDispatch } from "react-redux";
import { addToFavorites } from "../features/favoriteSlice/favoriteSlice";
import "./icon.css";

export const ApiPhotos = (props) => {
  const dispatch = useDispatch();
  const handleHeart = (event) =>{

    dispatch(addToFavorites(props.photo));
  
  }
 
  


  return (
    <div>
      <img className="img-cover" alt="random" src={props.photo.url} />
      <ion-icon name="heart-outline" onClick={handleHeart}></ion-icon>
      <div className="icon-download">
        <ion-icon name="cloud-download-outline"  value="download"></ion-icon>
      </div>
    </div>
  );
};


