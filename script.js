const form = document.getElementById("formularz");
form.addEventListener("submit", calculateTip);

const p1 = document.getElementById("p1");
p1.addEventListener("click", SetTip);

const p2 = document.getElementById("p2");
p2.addEventListener("click", SetTip2);

const p3 = document.getElementById("p3");
p3.addEventListener("click", SetTip3);

const napiwek = document.getElementById("Napiwek");

function calculateTip(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const kwota = parseFloat(data.get("kwota"));

  const napiwek = parseFloat(data.get("Napiwek"));

  const procent = napiwek / 100;

  let calosc = kwota + procent * kwota;

  let wynik = document.getElementById("wynik");
  let nap = document.getElementById("nap");
  nap.innerText = `Napiwek : ${kwota * procent}`;

  wynik.innerText = ` Kwota całkowita: ${calosc}`;
}

function SetTip() {
  let opcja1 = document.getElementById("Napiwek").value;
  opcja1 = 10;
  document.getElementById("Napiwek").value = opcja1;
  console.log(document.getElementById("Napiwek").value);
}
function SetTip2() {
  let opcja2 = document.getElementById("Napiwek").value;
  opcja2 = 25;
  document.getElementById("Napiwek").value = opcja2;
  console.log(document.getElementById("Napiwek").value);
}
function SetTip3() {
  let opcja3 = document.getElementById("Napiwek").value;
  opcja3 = 50;
  document.getElementById("Napiwek").value = opcja3;
  console.log(document.getElementById("Napiwek").value);
}

const wartosc = document.getElementById("wartosc");
wartosc.textContent = `Podaj Procent napiwku ${napiwek.value} %`;
napiwek.addEventListener("input", (event) => {
  wartosc.textContent = `Podaj Procent napiwku ${event.target.value} %`;
});
