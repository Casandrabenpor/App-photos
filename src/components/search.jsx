import { useDispatch } from "react-redux";
import "./search.css";
import {loadPhotos } from "../features/photoSlice/apiThunk.js";

export const Search = () => {

    const dispatch = useDispatch();
  
    const handleSearch = (event) => {
      event.preventDefault();
      const query = event.target.elements.search.value;
      dispatch(loadPhotos(query));
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
