import { useDispatch } from "react-redux";
import { removeFromFavorites } from "../features/buttonSlice/InformationFavSlice";

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
 

  return (
    <div>
      <img className="img-cover" alt="random" src={props.photo.url} />
      <a href="/" onClick={handleRemove} className="iconRemove">
        <ion-icon name="trash" />
      </a>

       {/* <a href="/" onClick={handleInformation}>
       <ion-icon name="information-circle"/>
       </a>  */}
       <button >Mostrar boton</button>
    </div>
  );
};
