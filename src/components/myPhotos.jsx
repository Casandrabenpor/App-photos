import { useDispatch } from "react-redux";
import { removeFromFavorites } from "../features/buttonSlice/favoriteSlice";
import { Link } from "react-router-dom";
import "./icon.css";

export const Favorites = (props) => {
  const dispatch = useDispatch();

  const handleRemove = (event) => {
    // Agregando a basura
    event.preventDefault(); // evita que la página se recargue
    dispatch(removeFromFavorites(props.photo));
  };

  return (
    <>
      <img alt="random" src={props.photo.url} />
      <div className="positionBottom">
        <a href="/" onClick={handleRemove} className="iconRemove">
          <ion-icon name="trash" />
        </a>

        <ul>
          <li key={`info-${props.photo.id}`} className="iconInformation">
            <Link to="/modalPage" state={props.photo}>
              <ion-icon name="information-circle" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
