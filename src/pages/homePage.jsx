import { TopBar } from "../components/topBar";
import { useLocation } from "react-router-dom";
import { MainPhoto } from "../components/mainPhoto";
import { Search } from "../components/search";
import "../index.css";

export const HomePage = () => {
    const location = useLocation();
    return (
      <>
        <TopBar  location={location} />
        <MainPhoto className="MainPhoto"/>  
        <Search />
      </>
    );
  };
  