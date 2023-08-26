const productId = new URLSearchParams(window.location.search).get("ProdId");
const url = productId
  ? `https://striveschool-api.herokuapp.com/api/product/${productId}`
  : "https://striveschool-api.herokuapp.com/api/product";
let campiInput = document.getElementsByTagName("input");
let form = document.querySelector("form");
let card = document.querySelector(".card");
window.onload = async () => {
  let eliminate = document.getElementById("delete");
  let modifiOcrea = document.getElementById("creaOModifica");
  fetch(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTM2YmMwMzRmZjAwMTQwM2Y0ZDEiLCJpYXQiOjE2OTI5NDczMDcsImV4cCI6MTY5NDE1NjkwN30.5tO4RfH6s6pW0wftZlqBwFHrumuQeasOT0c0yRSRoco",
      "Content-Type": "application/json",
    },
  }).then((strprod) => {
    if (strprod.status === 401) {
      console.log("la richiesta non è stata trovata");
      card.innerHTML = `<div class="card text-center">
      <div class="card-header">
        STOP!
      </div>
      <div class="card-body">
        <h5 class="card-title">ERROR 401 </h5>
        <p class="card-text">ehi hai eseguito una richiesta non valida preparati a finire in gattabuia</p>
        <a href="index.html" class="btn btn-primary">no! non farlo! torno indietro</a>
      </div>
      <div class="card-footer text-body-secondary">
        401
      </div>
    </div>`;
    }
    if (strprod.status === 404) {
      console.log("la richiesta non è stata trovata");
      card.innerHTML = `<div class="card text-center">
      <div class="card-header">
        fatal error
      </div>
      <div class="card-body">
        <h5 class="card-title">ERROR 404 </h5>
        <p class="card-text">la pagina che cercavi non è stata trovata a meno che non cercavi proprio questa pagina in quel caso bravo l'hai trovata</p>
        <a href="index.html" class="btn btn-primary">torna indietro</a>
      </div>
      <div class="card-footer text-body-secondary">
        404
      </div>
    </div>`;
    }
    if (strprod.status === 500) {
      console.log("generic server error");
      card.innerHTML = `<div class="card text-center">
      <div class="card-header">
        fatal error
      </div>
      <div class="card-body">
        <h5 class="card-title">ERROR 500 </h5>
        <p class="card-text">un'errore generico del server hmmm molto strano</p>
        <a href="index.html" class="btn btn-primary">torna indietro</a>
      </div>
      <div class="card-footer text-body-secondary">
        500
      </div>
    </div>`;
    }
    if (strprod.status === 503) {
      console.log("server gets stop");
      card.innerHTML = `<div class="card text-center">
      <div class="card-header">
        fatal error
      </div>
      <div class="card-body">
        <h5 class="card-title">ERROR 503 </h5>
        <p class="card-text">il criceto che alimentava il server è andato in pausa caffè stiamo lavorando per farlo ripartire</p>
        <a href="index.html" class="btn btn-primary">torna indietro</a>
      </div>
      <div class="card-footer text-body-secondary">
        503
      </div>
    </div>`;
    }
    if (strprod.status === 418) {
      console.log("server gets stop");
      card.innerHTML = `<div class="card text-center">
      <div class="card-header">
        fatal error
      </div>
      <div class="card-body">
        <h5 class="card-title">ERROR 418</h5>
        <p class="card-text">il server si rifiuta di farti un caffè perchè è un server inospitale (oltre che è una teiera da the)</p>
        <a href="index.html" class="btn btn-primary">fammi un thè invece</a>
      </div>
      <div class="card-footer text-body-secondary">
        418
      </div>
    </div>`;
    }
  });

  //-------------------------------------------------------------------------
  if (productId) {
    fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTM2YmMwMzRmZjAwMTQwM2Y0ZDEiLCJpYXQiOjE2OTI5NDczMDcsImV4cCI6MTY5NDE1NjkwN30.5tO4RfH6s6pW0wftZlqBwFHrumuQeasOT0c0yRSRoco",
        "Content-Type": "application/json",
      },
    })
      .then((strprod) => {
        if (strprod.status === 404) {
          console.log("la richiesta non è stata trovata");
          card.innerHTML = `<div class="card text-center">
          <div class="card-header">
            fatal error
          </div>
          <div class="card-body">
            <h5 class="card-title">ERROR 404 </h5>
            <p class="card-text">la pagina che cercavi non è stata trovata a meno che non cercavi proprio questa pagina in quel caso bravo l'hai trovata</p>
            <a href="index.html" class="btn btn-primary">torna indietro</a>
          </div>
          <div class="card-footer text-body-secondary">
            404
          </div>
        </div>`;
        }
        if (strprod.status === 500) {
          console.log("generic server error");
          card.innerHTML = `<div class="card text-center">
          <div class="card-header">
            fatal error
          </div>
          <div class="card-body">
            <h5 class="card-title">ERROR 500 </h5>
            <p class="card-text">un'errore generico del server hmmm molto strano</p>
            <a href="index.html" class="btn btn-primary">torna indietro</a>
          </div>
          <div class="card-footer text-body-secondary">
            500
          </div>
        </div>`;
        }
        if (strprod.status === 503) {
          console.log("server gets stop");
          card.innerHTML = `<div class="card text-center">
          <div class="card-header">
            fatal error
          </div>
          <div class="card-body">
            <h5 class="card-title">ERROR 503 </h5>
            <p class="card-text">il criceto che alimentava il server è andato in pausa caffè stiamo lavorando per farlo ripartire</p>
            <a href="index.html" class="btn btn-primary">torna indietro</a>
          </div>
          <div class="card-footer text-body-secondary">
            503
          </div>
        </div>`;
        }
        if (strprod.status === 418) {
          console.log("server gets stop");
          card.innerHTML = `<div class="card text-center">
          <div class="card-header">
            fatal error
          </div>
          <div class="card-body">
            <h5 class="card-title">ERROR 418</h5>
            <p class="card-text">il server si rifiuta di farti un caffè perchè è un server inospitale (oltre che è una teiera da the)</p>
            <a href="index.html" class="btn btn-primary">fammi un thè invece</a>
          </div>
          <div class="card-footer text-body-secondary">
            418
          </div>
        </div>`;
        }

        if (strprod.ok) {
          return strprod.json();
        }
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
      })
      .catch((err) => {
        console.log(err);
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
  const accepted = confirm("sei sicuro di volerlo cancellare? guarda che non torni più indietro");
  if (accepted) {
    const resp = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTM2YmMwMzRmZjAwMTQwM2Y0ZDEiLCJpYXQiOjE2OTI5NDczMDcsImV4cCI6MTY5NDE1NjkwN30.5tO4RfH6s6pW0wftZlqBwFHrumuQeasOT0c0yRSRoco",
      },
    })
      .then((resp) => window.location.assign("index.html"))
      .catch((err) => {
        if (err.status === 404) {
          console.log("la richiesta non è stata trovata");
        }
        if (err.status === 500) {
          console.log("generic server error");
        }
      });
  } else {
    alert("operazione annullata");
  }
};
