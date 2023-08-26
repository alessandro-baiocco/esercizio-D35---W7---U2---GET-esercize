let postoProdotti = document.querySelector("#postoProdotti");
let depositoUrl = "https://striveschool-api.herokuapp.com/api/product";
let spin = document.querySelector(".spinner-grow");
let main = document.querySelector(".sotto");
const prendiDati = async () => {
  try {
    fetch(depositoUrl, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTM2YmMwMzRmZjAwMTQwM2Y0ZDEiLCJpYXQiOjE2OTI5NDczMDcsImV4cCI6MTY5NDE1NjkwN30.5tO4RfH6s6pW0wftZlqBwFHrumuQeasOT0c0yRSRoco",
      },
    })
      .then((requestProduct) => {
        if (requestProduct.status === 401) {
          console.log("la richiesta non è stata trovata");
          main.innerHTML = `<div class="card text-center">
            <div class="card-header">
              STOP!
            </div>
            <div class="card-body">
              <h5 class="card-title">ERROR 401 </h5>
              <p class="card-text">ehi hai eseguito una richiesta non valida preparati a finire in gattabuia</p>
              <a href="https://www.google.com/webhp?hl=it&sa=X&ved=0ahUKEwjzjMPbvvqAAxW5_7sIHWudAREQPAgI" class="btn btn-primary">no! non farlo! torno indietro</a>
            </div>
            <div class="card-footer text-body-secondary">
              401
            </div>
          </div>`;
        }
        if (requestProduct.status === 404) {
          console.log("la richiesta non è stata trovata");
          main.innerHTML = `<div class="card text-center">
            <div class="card-header">
              fatal error
            </div>
            <div class="card-body">
              <h5 class="card-title">ERROR 404 </h5>
              <p class="card-text">la pagina che cercavi non è stata trovata a meno che non cercavi proprio questa pagina in quel caso bravo l'hai trovata</p>
              <a href="https://www.google.com/webhp?hl=it&sa=X&ved=0ahUKEwjzjMPbvvqAAxW5_7sIHWudAREQPAgI" class="btn btn-primary">torna indietro</a>
            </div>
            <div class="card-footer text-body-secondary">
              404
            </div>
          </div>`;
        }
        if (requestProduct.status === 500) {
          console.log("generic server error");
          main.innerHTML = `<div class="card text-center">
            <div class="card-header">
              fatal error
            </div>
            <div class="card-body">
              <h5 class="card-title">ERROR 500 </h5>
              <p class="card-text">un'errore generico del server hmmm molto strano</p>
              <a href="https://www.google.com/webhp?hl=it&sa=X&ved=0ahUKEwjzjMPbvvqAAxW5_7sIHWudAREQPAgI" class="btn btn-primary">torna indietro</a>
            </div>
            <div class="card-footer text-body-secondary">
              500
            </div>
          </div>`;
        }
        if (requestProduct.status === 503) {
          console.log("server gets stop");
          main.innerHTML = `<div class="card text-center">
            <div class="card-header">
              fatal error
            </div>
            <div class="card-body">
              <h5 class="card-title">ERROR 503 </h5>
              <p class="card-text">il criceto che alimentava il server è andato in pausa caffè stiamo lavorando per farlo ripartire</p>
              <a href="https://www.google.com/webhp?hl=it&sa=X&ved=0ahUKEwjzjMPbvvqAAxW5_7sIHWudAREQPAgI" class="btn btn-primary">torna indietro</a>
            </div>
            <div class="card-footer text-body-secondary">
              503
            </div>
          </div>`;
        }
        if (requestProduct.status === 418) {
          console.log("server gets stop");
          main.innerHTML = `<div class="card text-center">
            <div class="card-header">
              fatal error
            </div>
            <div class="card-body">
              <h5 class="card-title">ERROR 418</h5>
              <p class="card-text">il server si rifiuta di farti un caffè perchè è un server inospitale (oltre che è una teiera da the)</p>
              <a href="https://www.google.com/webhp?hl=it&sa=X&ved=0ahUKEwjzjMPbvvqAAxW5_7sIHWudAREQPAgI" class="btn btn-primary">fammi un thè invece</a>
            </div>
            <div class="card-footer text-body-secondary">
              418
            </div>
          </div>`;
        }

        if (requestProduct.ok) {
          return requestProduct.json();
        }
      })
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
