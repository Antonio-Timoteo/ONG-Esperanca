// assets/js/main.js
import './storage.js';
import './views.js';
import './form.js';

console.log("Aplicação ONG Esperança carregada com sucesso!");

function render() {
  const container = document.getElementById("app");
  if (!container) return;

  const hash = window.location.hash || "#inicio";
  let content = views.inicio;

  if (hash === "#projetos") {
    content = views.projetos;
  } else if (hash === "#cadastro") {
    content = views.cadastro;
  }

  container.innerHTML = content;

  // Executa a configuração do formulário apenas na rota de cadastro
  if (hash === "#cadastro" && typeof configurarFormulario === "function") {
    configurarFormulario();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  render();
  window.addEventListener("hashchange", render);
});
