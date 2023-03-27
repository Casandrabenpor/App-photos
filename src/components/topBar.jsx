import "./topBar.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const TopBar = ({ location }) => {
  return (
    <div className="topBar">
      <img src={Logo} alt="Logo" />
      <ul>
        {location && location.pathname === "/myphotosPage" ? (
          <li>
            <Link to="/">HOME</Link>
          </li>
        ) : (
          <li>
            <Link to="/myphotosPage">MY PHOTOS</Link>
          </li>
        )}
      </ul>
    </div>
  );
};
