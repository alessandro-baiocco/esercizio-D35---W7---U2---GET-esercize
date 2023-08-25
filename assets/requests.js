let postoProdotti = document.querySelector("#postoProdotti");
let depositoUrl = "https://striveschool-api.herokuapp.com/api/product";
let spin = document.querySelector(".spinner-grow");
const prendiDati = async () => {
  try {
    fetch(depositoUrl, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTM2YmMwMzRmZjAwMTQwM2Y0ZDEiLCJpYXQiOjE2OTI5NDczMDcsImV4cCI6MTY5NDE1NjkwN30.5tO4RfH6s6pW0wftZlqBwFHrumuQeasOT0c0yRSRoco",
      },
    })
      .then((requestProduct) => requestProduct.json())
      .then((product) => {
        product.forEach((element) => {
          let cartaShop = document.createElement("div");
          cartaShop.classList.add("card");
          cartaShop.classList.add("col-xl-2");
          cartaShop.classList.add("col-md-4");
          cartaShop.classList.add("col-6");
          cartaShop.classList.add("p-0");
          cartaShop.innerHTML = `
                <img src="${element.imageUrl}" class="card-img-top" alt="${element.name} "height = 124px">
                <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.description}</p>
                <p class="card-text">price:${element.price}$</p>
                <a class="btn btn-info mb-2" href = "details.html?ProdId=${element._id}">Scopri di più</a>
                <a class="btn btn-primary my-2" href = "backoffice.html?ProdId=${element._id}">modifica</a>
                </div>
                </div>`;
          postoProdotti.appendChild(cartaShop);
          spin.classList.add("d-none");
        });
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

window.onload = () => {
  prendiDati();
};
