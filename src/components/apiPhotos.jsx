import "./icon.css";
export const ApiPhotos = (props) => {
  return (
    <div>
      <img className="img-cover" alt="random" src={props.photo.url} />
      <ion-icon name="heart-outline"></ion-icon>
      <div className="icon-download">
        <ion-icon name="cloud-download-outline"></ion-icon>
      </div>
    </div>
  );
};
