const form = document.getElementById("formularz");
form.addEventListener("submit", calculateTip);

const p1 = document.getElementById("p1");
p1.addEventListener("click", SetTip);

const p2 = document.getElementById("p2");
p2.addEventListener("click", SetTip2);

const p3 = document.getElementById("p3");
p3.addEventListener("click", SetTip3);

const p4 = document.getElementById("p4");
p4.addEventListener("click", SetTip4);

const p5 = document.getElementById("p5");
p5.addEventListener("click", SetTip5);

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
  nap.innerText = ` ${kwota * procent}`;

  wynik.innerText = ` ${calosc}`;
}

function SetTip() {
  let opcja1 = document.getElementById("Napiwek").value;
  opcja1 = 5;
  document.getElementById("Napiwek").value = opcja1;
  console.log(document.getElementById("Napiwek").value);
}
function SetTip2() {
  let opcja2 = document.getElementById("Napiwek").value;
  opcja2 = 10;
  document.getElementById("Napiwek").value = opcja2;
  console.log(document.getElementById("Napiwek").value);
}
function SetTip3() {
  let opcja3 = document.getElementById("Napiwek").value;
  opcja3 = 15;
  document.getElementById("Napiwek").value = opcja3;
  console.log(document.getElementById("Napiwek").value);
}
function SetTip4() {
  let opcja4 = document.getElementById("Napiwek").value;
  opcja4 = 25;
  document.getElementById("Napiwek").value = opcja4;
  console.log(document.getElementById("Napiwek").value);
}
function SetTip5() {
  let opcja5 = document.getElementById("Napiwek").value;
  opcja5 = 50;
  document.getElementById("Napiwek").value = opcja5;
  console.log(document.getElementById("Napiwek").value);
}

const wartosc = document.getElementById("wartosc");
wartosc.textContent = `Podaj Procent napiwku ${napiwek.value} %`;
napiwek.addEventListener("input", (event) => {
  wartosc.textContent = `Podaj Procent napiwku ${event.target.value} %`;
});
