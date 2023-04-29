import { useDispatch } from "react-redux";
import "../styles/search.css";
import { filterFavorites } from "../features/buttonSlice/favoriteSlice";

export const SearchDescription = () => {

    const dispatch = useDispatch();
  
    const handleSearch = (event) => {
      event.preventDefault();
      const query = event.target.value;
      dispatch(filterFavorites(query)); 
    };
  return (
    <form  className="search-form" >
      <input type="text" placeholder="Search your image"className="search" name="search" onChange={handleSearch} />
      <button type="submit"  className="search-button">
        🔎
      </button>
    </form>
  );
};
