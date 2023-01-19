fetch("https://yellow-suits-pump-185-139-137-28.loca.lt/api/products")
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Xato");
  })
  .then((data) => {
    console.log(data);
    console.log(data[0].imageUrl, data[0].commit);
    renderProducts(data);
  });
function renderProducts(products) {
  let allProducts = document.querySelector(".products");
  const dFrag = document.createDocumentFragment();
  let img = document.querySelector(".img");
  products.forEach((product) => {
    let card = document.createElement("div");
    card.innerHTML = `
     <div class="card" style="width: 18rem">
            <div class="card-body">
              <h3 class="card-title">${product.name}</h3>
              <p class="card-text">
              ${product.commit}
              </p>
              <button>${product.price[0]}</button>
            </div>
          </div>
     `;
    dFrag.appendChild(card);
  });
  allProducts.appendChild(dFrag);
}
