// assets/js/storage.js

export function salvarCadastro(cadastro) {
  const cadastros = obterCadastrosSalvos();
  cadastros.push(cadastro);
  localStorage.setItem('cadastros', JSON.stringify(cadastros));
}

export function obterCadastrosSalvos() {
  const dados = localStorage.getItem('cadastros');
  return dados ? JSON.parse(dados) : [];
}
