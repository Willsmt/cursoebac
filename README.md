

```markdown
# 📌 Meu Perfil no GitHub

Este projeto é uma página simples que consome a **API pública do GitHub** para exibir informações de um usuário, como avatar, nome, login, número de repositórios, seguidores e seguindo.

---

## 🚀 Tecnologias utilizadas
- **HTML5** → Estrutura da página
- **CSS3** → Estilização (arquivo `main.css`)
- **JavaScript (ES6)** → Consumo da API e manipulação do DOM
- **Fetch API** → Requisições HTTP assíncronas

---

## 📂 Estrutura do projeto
- `index.html` → Página principal com os elementos que serão preenchidos dinamicamente.
- `main.css` → Arquivo de estilos para personalizar a aparência.
- `ajax.js` → Script responsável por buscar os dados na API do GitHub e atualizar o conteúdo da página.

---

## 🔧 Como funciona
1. O JavaScript aguarda o carregamento do DOM (`DOMContentLoaded`).
2. Faz uma requisição para `https://api.github.com/users/<usuario>`.
3. Converte a resposta em JSON.
4. Preenche os elementos da página com os dados retornados:
   - Foto de perfil (`avatar_url`)
   - Nome (`name`)
   - Login (`login`)
   - Número de repositórios (`public_repos`)
   - Seguidores (`followers`)
   - Seguindo (`following`)
   - Link para o perfil (`html_url`)

---

## 📷 Exemplo de uso
No arquivo `ajax.js`, basta trocar o nome do usuário:
```javascript
fetch("https://api.github.com/users/Willsmt")
```
Substitua `Willsmt` pelo seu usuário do GitHub.

---

## ⚠️ Tratamento de erros
Caso a requisição falhe, o código exibe um alerta:
```javascript
alert("Erro ao carregar dados do GitHub!");
```

---

## 📄 Licença
Este projeto é livre para uso e modificação.
```
