const form = document.getElementById("formNumeroMaior");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const numeroA = document.querySelector("#numeroA").value;
  const numeroB = document.querySelector("#numeroB").value;

  if (numeroB > numeroA) {
    alert("O numero B é maior que o numero A");
  } else;
  alert("O numero B não é maior que o numero A");
});
