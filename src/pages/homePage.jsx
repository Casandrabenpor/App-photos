

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TopBar } from "../components/topBar";
import { useLocation } from "react-router-dom";
import { MainPhoto } from "../components/mainPhoto";
import { Search } from "../components/search";
import "../index.css";
import { ApiPhotos } from "../components/apiPhotos";
import { loadPhotos } from "../features/photoSlice/apiThunk";
import {
  getPhotosStatus,
  getAllPhotos,
  getPhotosError,
} from "../features/photoSlice/photosSlice";
import { Footer } from "../components/footer";

export const HomePage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const photosStatus = useSelector(getPhotosStatus);
  const photosData = useSelector(getAllPhotos);
  const photosError = useSelector(getPhotosError);

  useEffect(() => {
    if (photosStatus === "idle") {
      dispatch(loadPhotos());
    }
  }, [photosStatus, dispatch]);

  const photosUI = () => {
    let photosListObjects = [];
    if (photosStatus === "loading") {
      photosListObjects.push(
        <div>
          <h2>LOADING</h2>
        </div>
      );
    } else if (photosStatus === "fulfilled") {
      Array.from(photosData).forEach((photo) => {
        console.log("hola")
        photosListObjects.push(
          <>
            <div className="photo-wrapper">
              <ApiPhotos photo={photo} />
            </div>
          </>
        );
      });
    } else {
      photosListObjects.push(photosError);
    }

    return photosListObjects;
  };

  return (
    <>
      <TopBar location={location} />
      <MainPhoto className="MainPhoto" />
      <Search />
      <section className="reminderCardCollection">{photosUI()}</section>
      <Footer className="footer" />
    </>
  );
};
