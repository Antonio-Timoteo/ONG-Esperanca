// assets/js/views.js

const projetosDados = [
  {
    titulo: "Inclusão Digital para Jovens",
    descricao: "Aulas gratuitas de informática básica, programação e uso seguro da internet em comunidades vulneráveis."
  },
  {
    titulo: "Capacitação Profissional",
    descricao: "Oficinas de preparação para o primeiro emprego e desenvolvimento de habilidades digitais."
  }
];

function gerarTemplateProjetos(lista) {
  return lista
    .map(
      (projeto) => `
      <article class="card-projeto">
        <h3><i class="fa-solid fa-laptop-code"></i> ${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
      </article>
    `
    )
    .join("");
}

function gerarListaCadastros() {
  const cadastros = obterCadastrosSalvos();
  if (cadastros.length === 0) return "<p>Nenhum cadastro realizado ainda.</p>";

  return `
    <ul class="lista-cadastrados">
      ${cadastros.map(c => `<li><strong>${c.nome}</strong> - ${c.email} (<em>${c.tipo}</em>)</li>`).join("")}
    </ul>
  `;
}

const views = {
  inicio: `
    <section id="sobre">
      <h2>Sobre a Nossa ONG</h2>
      <p>Promovemos a inclusão social e a transformação digital.</p>
      <img src="assets/images/hero-ong.webp" alt="Voluntários da ONG a lecionar aula de informática para jovens">
    </section>
    <section id="contacto">
      <h2>Contacto</h2>
      <p>E-mail: contacto@ongesperanca.org | Tel: (11) 99999-9999</p>
    </section>
  `,
  projetos: `
    <section id="projetos-lista">
      <h2>Nossos Projetos Sociais</h2>
      ${gerarTemplateProjetos(projetosDados)}
    </section>
  `,
  cadastro: `
    <section id="formulario">
      <h2>Cadastro de Voluntários e Beneficiários</h2>
      <form id="form-cadastro" action="#" method="post" novalidate>
        <div class="campo-grupo">
          <label for="nome">Nome Completo:</label><br>
          <input type="text" id="nome" name="nome" placeholder="Seu nome completo">
        </div>
        <br>
        <div class="campo-grupo">
          <label for="email">E-mail:</label><br>
          <input type="email" id="email" name="email" placeholder="seu@email.com">
        </div>
        <br>
        <div class="campo-grupo">
          <label for="tipo">Desejo me cadastrar como:</label><br>
          <select id="tipo" name="tipo">
            <option value="voluntario">Voluntário</option>
            <option value="beneficiario">Beneficiário</option>
            <option value="doador">Doador</option>
          </select>
        </div>
        <br>
        <div>
          <button type="submit">Enviar Cadastro</button>
        </div>
      </form>

      <hr style="margin: 2rem 0;">
      <h3>Cadastros Registados (LocalStorage):</h3>
      <div id="historico-cadastros">
        ${gerarListaCadastros()}
      </div>
    </section>
  `
};