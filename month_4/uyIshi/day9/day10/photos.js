let g = localStorage.getItem("albumTitle");
let b = localStorage.getItem("albumId");
fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${b}`)
  .then((response) => response.json())
  .then((json) => albumPhotos(json));

document.querySelector(".albumTitle").textContent = g;
function albumPhotos(photos) {
  // let photos = new Array();
  // album.forEach((element) => {
  //   if (element.albumId == b) {
  //     photos.push(element);
  //   }
  // });
  console.log(photos);
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

console.log(b);
