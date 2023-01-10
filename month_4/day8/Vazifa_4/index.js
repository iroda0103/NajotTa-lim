let product2 = [
  {
    id: 1,
    name: "Xiaomi Redmi A1 2/32GB Black",
    imgSrc:
      "https://olcha.uz/image/220x220/products/IPEvlkdiaGo08A3NwdVgrovaXRCw9sschVkhcu2o4LHuc1RgZktml8SgeZtg.jpg",
    price: 1249000,
  },
  {
    id: 2,
    name: "Samsung Galaxy A13 Персиковый 4/128 GB",
    imgSrc:
      "https://olcha.uz/image/220x220/products/98aqO8iQill384jzmDoESRV2CWfKr8mCBSxxNx8c621NPhFUdNiBtVUyv1yB.",
    price: 1249000,
  },
  {
    id: 3,
    name: "Samsung Galaxy A13 Персиковый 4/64 GB",
    imgSrc:
      "https://olcha.uz/image/220x220/products/O9SNIjbc09MNx2HksNKoUNDKggjE0BzrTXY5KsncMc0oebjIbT8zlFl8fOg3.",
    price: 1249000,
  },
  {
    id: 4,
    name: "Samsung Galaxy A13 Персиковый 3/32 GB",
    imgSrc:
      "https://olcha.uz/image/220x220/products/lMO092j5E4FSId5JjGtArQikBJBZi6n6AhjlYIORSuK70xCsNm9e7WZ1EwyY.",
    price: 1249000,
  },
  {
    id: 5,
    name: "Xiaomi Redmi A1 2/32GB Black",
    imgSrc:
      "https://olcha.uz/image/220x220/products/IPEvlkdiaGo08A3NwdVgrovaXRCw9sschVkhcu2o4LHuc1RgZktml8SgeZtg.jpg",
    price: 1249000,
  },
  {
    id: 6,
    name: "Samsung Galaxy A13 Персиковый 4/128 GB",
    imgSrc:
      "https://olcha.uz/image/220x220/products/98aqO8iQill384jzmDoESRV2CWfKr8mCBSxxNx8c621NPhFUdNiBtVUyv1yB.",
    price: 1249000,
  },
  {
    id: 7,
    name: "Samsung Galaxy A13 Персиковый 4/64 GB",
    imgSrc:
      "https://olcha.uz/image/220x220/products/O9SNIjbc09MNx2HksNKoUNDKggjE0BzrTXY5KsncMc0oebjIbT8zlFl8fOg3.",
    price: 1249000,
  },
];

let main = document.querySelector(".main");

//2-usul
function getdrawProduct(products) {
  let row = document.createElement("div");
  row.classList.add("row", "royhat");

  products.forEach((product, index) => {
    let col = document.createElement("div");
    col.classList.add("col-3", "hover", "my-3");

    let cardImage = document.createElement("div");
    img = document.createElement("img");
    img.classList.add("image");
    img.src = product.imgSrc;
    cardImage.append(img);

    let cardBody = document.createElement("div");
    cardBody.classList.add("my-3");

    phoneName = document.createElement("p");
    phoneName.classList.add("font");
    phoneName.innerText = product.name;

    let price = document.createElement("strong");
    price.innerText = product.price + "  sum";
    price.classList.add("badge", "text-bg-warning", "px-2");

    cardBody.append(phoneName, price);

    let cardFooter = document.createElement("div");
    cardFooter.classList.add(
      "d-flex",
      "my-3",
      "text-ligth",
      "justify-content-start",
      "p-3"
    );
    let edit = document.createElement("button");
    edit.setAttribute("data-bs-toggle", "modal");
    edit.setAttribute("data-bs-target", "#exampleModal2");
    edit.classList.add(
      "btn-outline-danger",
      "btn",
      "d-flex",
      "gap-3",
      "hover",
      "editButton"
    );

    edit.addEventListener("click", (e) => {
      window.editableProductId = product.id;
    });
    icon = document.createElement("i");
    icon.classList.add("bi", "bi-pencil-square");
    edit.append(icon);

    let remove = document.createElement("button");
    remove.classList.add("btn-outline-danger", "btn", "mx-4", "hover");
    icontrash = document.createElement("i");
    icontrash.classList.add("bi", "bi-trash3");
    remove.append(icontrash);

    cardFooter.append(edit, remove);
    col.append(cardImage, cardBody, cardFooter);
    col.dataset.productId = product.id;
    row.append(col);
    document.querySelector(".main-container").append(row);

    //Product remove
    remove.addEventListener("click", () => {
      products.splice(index, 1);
      col.remove(cardImage, cardBody, cardFooter);
    });
  });
}

getdrawProduct(product2);
let saved = document.getElementById("saved");
let names = document.getElementById("name");
let phonePrice = document.getElementById("phonePrice");
let link = document.getElementById("link");
let phoneId = document.getElementById("id");
//Product add
function add(products) {
  saved.addEventListener("click", (e) => {
    e.preventDefault();

    localStorage.setItem("name", names.value);
    localStorage.setItem("price", phonePrice.value);
    localStorage.setItem("imgSrc", link.value);

    let product = {
      id: phoneId.value,
      name: names.value,
      price: +phonePrice.value,
      imgSrc: link.value,
    };
    products.push(product);
    console.log(products, "asdasd");
    document.querySelector(".main-container").innerHTML = "";
    console.log("salom");
    getdrawProduct(products);
    names.value = "";
    phonePrice.value = "";
    link.value = "";
  });
}

add(product2);

// Edit product
function edit(products) {
  let editButton = document.querySelector(".editButton");
  let editSaved = document.getElementById("editSaved");
  let editName = document.getElementById("editName");
  let editPhonePrice = document.getElementById("editPhonePrice");

  let mainBody = document.querySelector(".royhat");

  editSaved.addEventListener("click", (e) => {
    e.preventDefault();
    function clickElement(product) {
      return product.id == window.editableProductId;
    }
    const indexEdit = products.findIndex(clickElement);

    products[indexEdit].name = editName.value;
    products[indexEdit].price = editPhonePrice.value;

    document.querySelector(".main-container").innerHTML = "";
    getdrawProduct(products);
  });
}
edit(product2);
