export const addPhotoToLocalStorage = (photo) => {
  let photosArrayInLocalStorage = readLocalStorage();
  if (photosArrayInLocalStorage != null && isContained(photo) === false) {
    photosArrayInLocalStorage.data.push(photo);
    localStorage.setItem("favoritePhotos", JSON.stringify(photosArrayInLocalStorage));
  }
  // localStorage.setItem("favoritePhotos", photosArrayUpdatedToString);
};

export const readLocalStorage = () => {
  let photosArrayInLocalStorage = localStorage.getItem("favoritePhotos");
  if (photosArrayInLocalStorage != null) {
    let photosArrayToObject = JSON.parse(photosArrayInLocalStorage);
    return photosArrayToObject; 
  }
  return { data: []};
};

export const isContained = (photoCandidate) => {
    let photosArrayInLocalStorage = readLocalStorage();

    return photosArrayInLocalStorage.data.some(photo => photo.id === photoCandidate.id);
};

export const deletePhotoFromLocalStorage = (photoToDelete) => {
  let photosArrayInLocalStorage = readLocalStorage();
  if (photosArrayInLocalStorage != null && isContained(photoToDelete)) {
    let photosDataFilterArray = photosArrayInLocalStorage.data.filter(photo => photo.id !== photoToDelete.id);
    let photosArrayUpdatedToString = JSON.stringify({data: photosDataFilterArray});
    localStorage.setItem("favoritePhotos", photosArrayUpdatedToString);
  }
};