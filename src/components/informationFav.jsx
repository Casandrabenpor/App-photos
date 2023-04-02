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
    <>
      <img  alt="random" src={props.photo.url} />
      <a href="/" onClick={handleRemove} className="iconRemove">
        <ion-icon name="trash" />
      </a>

      {/* <a href="/" onClick={handleInformation}>
       <ion-icon name="information-circle"/>
       </a>  */}
      <button>Mostrar boton</button>

      <div>
        <p className="photo-description">
          <strong>Description:</strong> {props.photo.description}
        </p>
        <p>
          <strong>Width:</strong> {props.photo.width}
        </p>
        <p>
          <strong>Height:</strong> {props.photo.height}
        </p>
        <p>
          <strong>Likes:</strong> {props.photo.likes}
        </p>
        <p>
          <strong>Date:</strong> {props.photo.date}
        </p>
      </div>
    </>
  );
};
