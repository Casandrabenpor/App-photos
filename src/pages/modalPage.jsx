import { TopBar } from "../components/topBar";
import "./modal.css";
import { Link, useLocation } from "react-router-dom";
import { editFavorites } from "../features/buttonSlice/favoriteSlice";
import { useDispatch } from "react-redux";

export const Modal = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const photo = location.state;

  const handleInformation = (event)=>{
    event.preventDefault(); // evita que la página se recargue
    photo.description = event.currentTarget.value;
    dispatch(editFavorites(photo));
  }
  return (
    <>
      <TopBar />
     
      <div className="modalCard">
        <div className="closeInfoModal ">
          <Link to="/myphotosPage">
            <ion-icon name="close-circle" />
          </Link>
        </div>
        <div className="description">
          <p>
            <strong>Description:</strong>
          </p>
            <input type="text" id="description" name="description" onChange={handleInformation} defaultValue={photo.description} />
          <p>
            <strong>Width:</strong> {photo.width}
          </p>
          <p>
            <strong>Height:</strong> {photo.height}
          </p>
          <p>
            <strong>👍</strong> {photo.likes}
          </p>
          <p>
            <strong>Date:</strong> {photo.date}
          </p>
        </div>
      </div>
    </>
  );
};
