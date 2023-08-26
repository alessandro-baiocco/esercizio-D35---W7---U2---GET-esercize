window.onload = async () => {
  const productId = new URLSearchParams(window.location.search).get("ProdId");
  const url = productId;
  let coperta = document.querySelector(".copertina");
  let titolo = document.querySelector(".titolo");
  let description = document.querySelector(".description");
  let imagineCarta = document.querySelector(".card-img-top");
  let prezzo = document.querySelector(".price");
  let main = document.querySelector(".card");

  try {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTM2YmMwMzRmZjAwMTQwM2Y0ZDEiLCJpYXQiOjE2OTI5NDczMDcsImV4cCI6MTY5NDE1NjkwN30.5tO4RfH6s6pW0wftZlqBwFHrumuQeasOT0c0yRSRoco",
        "Content-Type": "application/json",
      },
    })
      .then((request) => {
        if (request.status === 401) {
          coperta.classList.add("d-none");
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
        if (request.status === 404) {
          coperta.classList.add("d-none");
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
        if (request.status === 500) {
          coperta.classList.add("d-none");
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
        if (request.status === 503) {
          coperta.classList.add("d-none");
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
        if (request.status === 418) {
          coperta.classList.add("d-none");
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

        if (request.ok) {
          return request.json();
        }
      })
      .then((product) => {
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
