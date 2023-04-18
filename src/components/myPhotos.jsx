import { useDispatch } from "react-redux";
import { removeFromFavorites } from "../features/buttonSlice/favoriteSlice";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";
import "../styles/icon.css";

export const Favorites = (props) => {
  const dispatch = useDispatch();

  const handleRemove = (event) => {
    // Agregando a basura
    event.preventDefault(); // evita que la página se recargue
    let result = window.confirm("Do you want to delete this photo?");
    if(result === true){
      dispatch(removeFromFavorites(props.photo));
    }
  
  };
  const handleDownload = (event) => {
    event.preventDefault();
    saveAs(props.photo.url, `${props.photo.id}.jpg`);
    
  };

  return (
    <>
      <img alt="random" src={props.photo.url} />
      <div className="positionBottom">
        <a href="/" onClick={handleRemove} className="iconRemove"  >
          <ion-icon name="trash" />
        </a>
        <a href="/" onClick={handleDownload} className="icon-download2">
          <ion-icon name="cloud-download" value="download"></ion-icon>
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
