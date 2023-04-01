import { useDispatch } from "react-redux";
import { removeFromFavorites } from "../features/buttonSlice/favoriteSlice";

import "./icon.css";

export const InformationFav = (props) => {
  const dispatch = useDispatch();

  const handleRemove = (event) => {
    console.log("Agregando a basuraaaaa...");
    event.preventDefault(); // evita que la página se recargue
    dispatch(removeFromFavorites(props.photo));
  };
  // const handleInformation = (event) => {
  //   dispatch(informationFromFavorites(props.photo));
  // };
  console.log(props.photo);
  return (
    <div>
      <img className="img-cover" alt="random" src={props.photo.url} />
      <a href="/" onClick={handleRemove} className="iconRemove">
        <ion-icon name="trash" />
      </a>
      <div className="photo-info">
        <p className="photo-description">
          <strong>Description:</strong> {props.photo.description}
        </p>
        <p className="photo-width">
          <strong>Width:</strong> {props.photo.width}
        </p>
        <p className="photo-height">
          <strong>Height:</strong> {props.photo.height}
        </p>
        <p className="photo-likes">
          <strong>Likes:</strong> {props.photo.likes}
        </p>
        <p className="photo-updated">
          <strong>Date:</strong> {props.photo.date}
        </p>
      </div>
     

      {/* <a href="/" onClick={handleInformation}>
       <ion-icon name="information-circle"/>
       </a>  */}
      <button>Mostrar boton</button>
    </div>
  );
};
