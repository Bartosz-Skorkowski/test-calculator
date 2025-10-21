const form = document.getElementById("formularz");
form.addEventListener("submit", calculateTip);

function calculateTip(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const kwota = parseFloat(data.get("kwota"));

  const napiwek = parseFloat(data.get("Napiwek"));

  const procent = napiwek / 100;

  let calosc = kwota + procent * kwota;

  let wynik = document.getElementById("wynik");
  let nap = document.getElementById("nap");
  nap.innerText = "Napiwek: " + kwota * procent;

  wynik.innerText = `Kwota napiwku: ${
    kwota * napiwek
  }, Kwota całkowita: ${calosc}`;
}
