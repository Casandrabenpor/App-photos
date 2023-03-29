import { TopBar } from "../components/topBar";
import { useLocation } from "react-router-dom";
import { Search } from "../components/search";
import { Footer } from "../components/footer";

export const MyPhotos = () => {
    const location = useLocation();
    return (
      <>
        <TopBar location={location} />
        <Search/>
        {/* <Footer className="footer"/> */}
      </>
    );
  };
  