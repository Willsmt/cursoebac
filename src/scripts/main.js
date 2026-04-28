document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("button-click");
  botao.addEventListener("click", function () {
    document.body.classList.toggle("bg-active");
  });
});
