const Usuario = require("./usuario");

async function testarInsercao() {
  const user = new Usuario("Monique", "monique@example.com");
  await user.inserir();
}

testarInsercao();