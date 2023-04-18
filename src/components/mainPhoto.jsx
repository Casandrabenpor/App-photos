import "../styles/mainPhoto.css";
import Background from "../assets/mar2.jpg";

export const MainPhoto = (props) => {
  return (
    <div className={props.className}>
    
        <img className={props.className} src={Background} alt="Mar" />

    </div>
  );
};
