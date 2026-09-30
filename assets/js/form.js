// assets/js/form.js
import { salvarCadastro } from "./storage.js";
import { gerarListaCadastros } from "./views.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function exibirErro(inputElement, mensagem) {
  const campoContainer = inputElement.parentElement;
  inputElement.classList.add("input-erro");
  inputElement.classList.remove("input-sucesso");

  let mensagemErro = campoContainer.querySelector(".mensagem-erro");
  if (!mensagemErro) {
    mensagemErro = document.createElement("span");
    mensagemErro.className = "mensagem-erro";
    campoContainer.appendChild(mensagemErro);
  }
  mensagemErro.textContent = mensagem;
}

function limparErro(inputElement) {
  const campoContainer = inputElement.parentElement;
  inputElement.classList.remove("input-erro");
  inputElement.classList.add("input-sucesso");

  const mensagemErro = campoContainer.querySelector(".mensagem-erro");
  if (mensagemErro) {
    mensagemErro.remove();
  }
}

export function configurarFormulario() {
  const formulario = document.getElementById("form-cadastro");
  if (!formulario) return;

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const campoNome = document.getElementById("nome");
    const campoEmail = document.getElementById("email");
    const campoTipo = document.getElementById("tipo");
    let formularioValido = true;

    if (campoNome.value.trim().length < 3) {
      exibirErro(campoNome, "O nome deve ter pelo menos 3 caracteres.");
      formularioValido = false;
    } else {
      limparErro(campoNome);
    }

    if (!emailRegex.test(campoEmail.value.trim())) {
      exibirErro(campoEmail, "Por favor, insira um e-mail válido.");
      formularioValido = false;
    } else {
      limparErro(campoEmail);
    }

    if (formularioValido) {
      const novoUsuario = {
        nome: campoNome.value.trim(),
        email: campoEmail.value.trim(),
        tipo: campoTipo.value
      };

      salvarCadastro(novoUsuario);

      alert(`Obrigado pelo cadastro, ${novoUsuario.nome}! Dados salvos no navegador.`);
      formulario.reset();
      campoNome.classList.remove("input-sucesso");
      campoEmail.classList.remove("input-sucesso");

      const historicoContainer = document.getElementById("historico-cadastros");
      if (historicoContainer) {
        historicoContainer.innerHTML = gerarListaCadastros();
      }
    }
  });
}
