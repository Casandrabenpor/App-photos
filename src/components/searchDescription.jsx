import { useDispatch } from "react-redux";
import "../styles/search.css";
import { filterFavorites } from "../features/buttonSlice/favoriteSlice";

export const SearchDescription = () => {

    const dispatch = useDispatch();
  
    const handleSearch = (event) => {
      event.preventDefault();
      const query = event.target.elements.search.value;
      dispatch(filterFavorites(query)); 
    };
  return (
    <form  className="search-form" onSubmit={handleSearch}>
      <input type="text" placeholder="Search your image"className="search" name="search" />
      <button type="submit"  className="search-button">
        🔎
      </button>
    </form>
  );
};
