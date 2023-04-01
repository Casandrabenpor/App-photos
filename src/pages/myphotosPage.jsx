import { TopBar } from "../components/topBar";
import { useLocation } from "react-router-dom";
import { Search } from "../components/search";
import { InformationFav } from "../components/informationFav";
import { store } from "../app/store";
import { Footer } from "../components/footer";

export const MyPhotos = () => {
  const location = useLocation();
  const favorites = store.getState().favorite.list;

    const favoritesElement = Array.from(favorites).map((photo) => {
      return(
        <>
          <div className="photo-wrapper">
            <InformationFav photo={photo} />
          </div>
        </>);
    });

    return (
      <>
        <TopBar location={location} />
        <Search/>
        <section className="reminderCardCollection">{favoritesElement}</section>
        <Footer className="footer"/>  
      </>
    );
  };
  