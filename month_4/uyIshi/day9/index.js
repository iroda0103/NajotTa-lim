fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((json) => renderAlbums(json));
let albumsTemplate = document.getElementById("albumsTemplate").content;

function renderAlbums(albums) {
  let tbody = document.querySelector(".tbody");
  tbody.innerHTML = "";
  albums.forEach((album, index) => {
    let rowTemplate;
    rowTemplate = albumsTemplate.cloneNode(true);
    let userId = rowTemplate.querySelector(".tdUserId");
    rowTemplate.querySelector(".tdId").innerHTML = album.id;
    userId.innerHTML = album.userId;
    rowTemplate.querySelector(".tdTitle").innerHTML = album.title;

    let edit = rowTemplate.querySelector(".edit");
    let inputUserId = document.getElementById("inputUserId");
    let inputTitle = document.getElementById("inputTitle");
    edit.addEventListener("click", () => {
      inputUserId.value = album.userId;
      inputTitle.value = album.title;
    });

    //UserIdni click bo'lganda
    userId.addEventListener("click", () => {
      localStorage.setItem("userId", album.userId);
      window.location.href = "./users.html";
    });

    //Ko'z click bo'lganda
    let eyes = rowTemplate.querySelector(".eyes");
    eyes.addEventListener("click", () => {
      localStorage.setItem("albumId", album.id);
      window.location.href = "./photos.html";
      localStorage.setItem("albumTitle", album.title);
    });

    //Remove
    let remove = rowTemplate.querySelector(".remove");
    remove.addEventListener("click", () => {
      albums.splice(index, 1);
      renderAlbums(albums);
    });

    tbody.append(rowTemplate);
  });
}
