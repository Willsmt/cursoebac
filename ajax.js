// Espera o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
  // Captura os elementos do HTML pelos seus IDs
  const name = document.querySelector("#name"); // h1 com o nome
  const username = document.querySelector("#username"); // h2 com o login
  const avatar = document.querySelector("#avatar"); // imagem do perfil
  const repositorios = document.querySelector("#repositorio"); // número de repositórios
  const seguidores = document.querySelector("#Seguidores"); // número de seguidores
  const seguindo = document.querySelector("#seguindo"); // número de seguindo
  const linkgit = document.querySelector("#link"); // link para o perfil

  // Faz a requisição para a API do GitHub do usuário Willsmt
  fetch("https://api.github.com/users/Willsmt")
    .then(function (res) {
      // Converte a resposta em JSON
      return res.json();
    })
    .then(function (json) {
      // Preenche os elementos do HTML com os dados recebidos
      name.innerText = json.name; // Nome completo
      username.innerText = json.login; // Nome de usuário
      avatar.src = json.avatar_url; // Foto de perfil
      repositorios.innerText = json.public_repos; // Quantidade de repositórios públicos
      seguidores.innerText = json.followers; // Quantidade de seguidores
      seguindo.innerText = json.following; // Quantidade de pessoas que o usuário segue
      linkgit.href = json.html_url; // Link para o perfil no GitHub
    })
    .catch(function (erro) {
      // Caso ocorra algum erro na requisição, mostra um alerta
      alert("Erro ao carregar dados do GitHub!");
      console.error(erro); // Mostra detalhes do erro no console
    });
});
