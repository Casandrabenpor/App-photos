import { useDispatch } from "react-redux";
import "./search.css";
import {loadPhotos } from "../features/photoSlice/apiThunk.js";

export const Search = () => {

    const dispatch = useDispatch();
  
    const handleSearch = (event) => {
      event.preventDefault();
      const query = event.target.value; 
      dispatch(loadPhotos(query)); 
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
