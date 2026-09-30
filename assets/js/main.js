// assets/js/main.js
import { views } from "./views.js";
import { configurarFormulario } from "./form.js";

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

  // Executa o listener do formulário apenas quando a aba de cadastro está ativa
  if (hash === "#cadastro") {
    configurarFormulario();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  render();
  window.addEventListener("hashchange", render);
});
