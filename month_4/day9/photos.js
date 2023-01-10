fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((json) => albumPhotos(json));

let g = localStorage.getItem("albumTitle");
document.querySelector(".albumTitle").textContent = g;
function albumPhotos(album) {
  let photos = new Array();
  album.forEach((element) => {
    if (element.albumId == b) {
      photos.push(element);
    }
  });

  let photosAlbum = document.querySelector(".photosAlbum");
  let cardTemplate = document.querySelector(".card-template").content;
  photos.forEach((photo) => {
    let cardPhoto = cardTemplate.cloneNode(true);
    let imageUrl = cardPhoto.querySelector(".imageUrl");
    imageUrl.src = photo.url;
    cardPhoto.querySelector(".card-title").textContent = photo.title;
    photosAlbum.append(cardPhoto);
  });
}

let b = localStorage.getItem("albumId");
console.log(b);
