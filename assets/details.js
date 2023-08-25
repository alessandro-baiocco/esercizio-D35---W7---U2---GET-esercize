window.onload = async () => {
  const productId = new URLSearchParams(window.location.search).get("ProdId");
  const url = productId;
  let coperta = document.querySelector(".copertina");
  let titolo = document.querySelector(".titolo");
  let description = document.querySelector(".description");
  let imagineCarta = document.querySelector(".card-img-top");
  let prezzo = document.querySelector(".price");

  try {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTM2YmMwMzRmZjAwMTQwM2Y0ZDEiLCJpYXQiOjE2OTI5NDczMDcsImV4cCI6MTY5NDE1NjkwN30.5tO4RfH6s6pW0wftZlqBwFHrumuQeasOT0c0yRSRoco",
        "Content-Type": "application/json",
      },
    })
      .then((strProd) => strProd.json())
      .then((product) => {
        console.log(product);
        coperta.style = `background-image:url("${product.imageUrl}")`;
        titolo.innerText = `${product.name.toUpperCase()}`;
        description.innerText = `genere : ${product.description}`;
        imagineCarta.src = `${product.imageUrl}`;
        prezzo.innerText = `${product.price}$`;
      });
  } catch (error) {
    console.log(error);
  }
};
