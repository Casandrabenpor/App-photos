import { TopBar } from "../components/topBar";
import { useLocation } from "react-router-dom";

export const MyPhotos = () => {
    const location = useLocation();
    return (
      <>
        <TopBar location={location} />
      </>
    );
  };
  