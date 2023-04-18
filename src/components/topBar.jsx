import "../styles/topBar.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const TopBar = ({ location }) => {
  return (
    <div className="topBar">
      <Link to="/"><img src={Logo} alt="Logo"  width={140} height={140} /></Link>
      <ul>
        {location && location.pathname === "/myphotosPage" ? (
          <li key="home" >
            <Link to="/">HOME</Link>
          </li>
        ) : (
          <li key="myphotos">
            <Link to="/myphotosPage">MY PHOTOS</Link>
          </li>
        )}
      </ul>
    </div>
  );
};
