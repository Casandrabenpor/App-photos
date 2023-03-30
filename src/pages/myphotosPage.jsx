import { useDispatch, useSelector } from "react-redux";
import { TopBar } from "../components/topBar";
import { useLocation } from "react-router-dom";
import { Search } from "../components/search";
import { addToFavorites } from "../features/favoriteSlice/favoriteSlice";
import { ApiPhotos } from "../components/apiPhotos";
import { Footer } from "../components/footer";


export const MyPhotos = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    
    return (
      <>
        <TopBar location={location} />
        <Search/>
       
         <Footer className="footer"/> 
      </>
    );
  };
  