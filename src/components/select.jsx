import { useDispatch } from "react-redux";
import "../styles/select.css";
import { orderFavorites } from "../features/buttonSlice/favoriteSlice";

export const Select = () => {
  const dispatch = useDispatch();

  const handleSelectOrder = (event) => {
    event.preventDefault();
    const orderSelect = event.target.value;
    console.log("Ordenar por likes");
    dispatch(orderFavorites(orderSelect));
   
  };
  return (
    <>
      <select onChange={handleSelectOrder} className="order" name="order">
        <option value="date">Date</option>
        <option value="width" >
          Width
        </option>
        <option value="height">
          Height
        </option>
        <option value="likes" >
          Likes
        </option>
      </select>
    </>
  );
};
