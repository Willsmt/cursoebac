const form = document.getElementById("form-deposito");
const nomeBeneficiario = document.getElementById("nome-beneficiario");
let fomrEvalido = false;

function validaNome(nomeCompleto) {
  const nomeComoArray = nomeCompleto.split(" ");
  return nomeComoArray.length >= 2;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const numeroConta = document.getElementById("numero-conta");
  const valorDeposito = document.getElementById("valor-deposito");
  const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b>, foi depositado na conta: <b>${numeroConta.value}</b> de <b>${nomeBeneficiario.value}</b>`;

  fomrEvalido = validaNome(nomeBeneficiario.value);
  // if ( validaNome(nomeBeneficiario.value) === false) - tem o mesmo sentido de negação
  //  IF (!validaNome(nomeBeneficiario.value))   - tem o mesmo sentido de negação
  if (fomrEvalido) {
    const conteinerMensagemSucesso = document.querySelector(".sucess-message");
    conteinerMensagemSucesso.innerHTML = mensagemSucesso;
    conteinerMensagemSucesso.style.display = "block";

    nomeBeneficiario.value = "";
    numeroConta.value = "";
    valorDeposito.value = "";
  } else {
    document.querySelector(".error-message").style.display = "block";
    nomeBeneficiario.style.border = "solid 1px red ";
  }
});

nomeBeneficiario.addEventListener("keyup", function (e) {
  fomrEvalido = validaNome(e.target.value);
  if (!fomrEvalido) {
    document.querySelector(".error-message").style.display = "block";
    nomeBeneficiario.classList.add("error");
  } else {
    document.querySelector(".error-message").style.display = "none";
    nomeBeneficiario.classList.remove("error");
  }
});
