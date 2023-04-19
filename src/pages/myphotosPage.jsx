import { TopBar } from "../components/topBar";
import { useLocation } from "react-router-dom";
import { SearchDescription } from "../components/searchDescription";
import { Favorites } from "../components/myPhotos";
import { Footer } from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadFavorites } from "../features/buttonSlice/favoriteSlice";
import { Select } from "../components/select";
import "./animation.css";
import loading from "../assets/loading.avif";

export const MyPhotos = () => {
  const location = useLocation();
  const favorites = useSelector(state => state.favorite.list);
  const loaded = useSelector(state => state.favorite.loaded );
  const dispatch = useDispatch();

  useEffect(()=>{
     // Verificamos si la lista de favoritos aún no ha sido cargada
    if(loaded === false){
      // Si aún no ha sido cargada, despachamos la acción "loadFavorites" para cargarla
      dispatch(loadFavorites());
    }
    // Especificamos que esta acción debe ejecutarse solo cuando los valores de dependencia "loaded" o "dispatch" cambian
  },[loaded, dispatch]);

    // const favoritesElement = Array.from(favorites).map((photo) => {
    //   return(
    //     <>
    //       <div className="photo-wrapper">
    //         <Favorites photo={photo} />
    //       </div>
    //     </>);
    // });
    let favoritesElement;

if (favorites.length > 0) {
  favoritesElement = Array.from(favorites).map((photo) => (
    <div className="photo-wrapper">
      <Favorites photo={photo} />
    </div>
  ));
} else {
  favoritesElement = (
    <div className="tilt-in-top-1">
      <img src={loading} alt="cat loading" />
    </div>
  );
}


    return (
      <>
        <TopBar location={location} />
        <SearchDescription/>
        <Select/>
        <section className="reminderCardCollection">{favoritesElement}</section>
        <Footer className="footer"/>  
      </>
    );
  };
  