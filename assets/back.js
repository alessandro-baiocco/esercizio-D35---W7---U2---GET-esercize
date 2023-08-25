//   let depositoUrl = "https://striveschool-api.herokuapp.com/api/product";
const productId = new URLSearchParams(window.location.search).get("ProdId");
const url = productId
  ? `https://striveschool-api.herokuapp.com/api/product/${productId}`
  : "https://striveschool-api.herokuapp.com/api/product";
let campiInput = document.getElementsByTagName("input");
window.onload = async () => {
  let eliminate = document.getElementById("delete");
  let modifiOcrea = document.getElementById("creaOModifica");
  if (productId) {
    fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTM2YmMwMzRmZjAwMTQwM2Y0ZDEiLCJpYXQiOjE2OTI5NDczMDcsImV4cCI6MTY5NDE1NjkwN30.5tO4RfH6s6pW0wftZlqBwFHrumuQeasOT0c0yRSRoco",
        "Content-Type": "application/json",
      },
    })
      .then((strprod) => {
        console.log(strprod);
        return strprod.json();
      })
      .then((product) => {
        eliminate.classList.remove("d-none");
        console.log(product);
        modifiOcrea.innerText = "modifica l'oggetto";
        (campiInput[0].value = product.name),
          (campiInput[1].value = product.description),
          (campiInput[2].value = product.brand),
          (campiInput[3].value = product.imageUrl),
          (campiInput[4].value = product.price);
      });
  }
};

const creaOggetto = async (e) => {
  e.preventDefault();
  if (
    campiInput[0].value !== "" &&
    campiInput[1].value !== "" &&
    campiInput[2].value !== "" &&
    campiInput[3].value !== "" &&
    campiInput[4].value !== ""
  ) {
    newEvent = {
      name: campiInput[0].value,
      description: campiInput[1].value,
      brand: campiInput[2].value,
      imageUrl: campiInput[3].value,
      price: campiInput[4].value,
    };

    const resp = await fetch(url, {
      method: productId ? "PUT" : "POST",
      body: JSON.stringify(newEvent),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTM2YmMwMzRmZjAwMTQwM2Y0ZDEiLCJpYXQiOjE2OTI5NDczMDcsImV4cCI6MTY5NDE1NjkwN30.5tO4RfH6s6pW0wftZlqBwFHrumuQeasOT0c0yRSRoco",
        "Content-Type": "application/json",
      },
    }).then((resp) => {
      if (resp.ok && !productId) {
        campiInput[0].value = "";
        campiInput[1].value = "";
        campiInput[2].value = "";
        campiInput[3].value = "";
        campiInput[4].value = "";
      }
      alert("operazione eseguita con successo");
    });
  } else {
    alert("inserisci qualcosa nei campi");
  }
};
const eliminaOggetto = async (e) => {
  e.preventDefault();
  const accepted = confirm("sei sicuro di volerlo cancellare? guarda con torni più indietro");
  if (accepted) {
    const resp = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTM2YmMwMzRmZjAwMTQwM2Y0ZDEiLCJpYXQiOjE2OTI5NDczMDcsImV4cCI6MTY5NDE1NjkwN30.5tO4RfH6s6pW0wftZlqBwFHrumuQeasOT0c0yRSRoco",
      },
    }).then((resp) => window.location.assign("index.html"));
  } else {
    alert("operazione annullata");
  }
};
