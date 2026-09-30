// assets/js/storage.js

function obterCadastrosSalvos() {
  const dados = localStorage.getItem("ong_cadastros");
  return dados ? JSON.parse(dados) : [];
}

function salvarCadastro(novoUsuario) {
  const cadastros = obterCadastrosSalvos();
  cadastros.push(novoUsuario);
  localStorage.setItem("ong_cadastros", JSON.stringify(cadastros));
}