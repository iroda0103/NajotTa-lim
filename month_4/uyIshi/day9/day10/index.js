async function httpGet(url) {
  let response = await fetch(url);
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(await response.json());
  }
}
function getUrl(url) {
  return httpGet(url).then((value) => {
    renderAlbums(value);
    return value;
  });
}
let albums = getUrl("https://jsonplaceholder.typicode.com/albums");

async function httpPOST(url, data, method) {
  return (response = await fetch(url, {
    method: `${method}`,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }));
}

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
      window.editableProductId = album.id;
      localStorage.setItem("editID", album.id);
      console.log(album.id);
      console.log(localStorage.getItem("editID"));
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
      localStorage.setItem("removeAlbumId", album.id);
      console.log(localStorage.getItem("removeAlbumId"));
      httpPOST(
        `https://jsonplaceholder.typicode.com/albums/${album.id}`,
        albums,
        "DELETE"
      );
      renderAlbums(albums);
    });

    tbody.append(rowTemplate);
  });
}

function edit(albums) {
  let indexed;
  let editForm = document.getElementById("editForm");
  editForm.addEventListener("submit", (e) => {
    albums.forEach((elem, index) => {
      if (elem.id == localStorage.getItem("editID")) {
        indexed = index;
      }
    });
    e.preventDefault();
    console.log(localStorage.getItem("editID"), "salommm", indexed);
    let inputUserId = document.getElementById("inputUserId");
    let inputTitle = document.getElementById("inputTitle");
    let obj = new Object();
    obj.userId = inputUserId.value;
    obj.title = inputTitle.value;
    console.log(obj);
    httpPOST(
      `https://jsonplaceholder.typicode.com/albums/${indexed}`,
      obj,
      "PATCH"
    );
  });
}
getUrl("https://jsonplaceholder.typicode.com/albums").then((albums) => {
  console.log(albums);
  edit(albums);
});
