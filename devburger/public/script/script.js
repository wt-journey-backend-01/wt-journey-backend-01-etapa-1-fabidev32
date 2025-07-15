const lanchesDiv = document.getElementById("lanches");

function ExibirAlerta() {
  alert("Novo lanche adicionado!");
}

function RedirecionarPagina() {
  window.location.href = "/contato";
}

async function PegarDados() {
  const resposta = await fetch("/data/lanches.json");
  const conteudo = await resposta.json();
  return conteudo;
}

function InserirElementosHTML(item) {
  const nome = document.createElement("h3");
  const ingredientes = document.createElement("li");
  nome.innerHTML = item.nome;
  ingredientes.innerHTML = item.ingredientes;
  lanchesDiv.appendChild(nome);
  lanchesDiv.appendChild(ingredientes);
}

async function ExibirHTML() {
  const dadosLanches = await PegarDados();
  dadosLanches.lanches.forEach((lanche) => {
    InserirElementosHTML(lanche);
  });
}

ExibirHTML();
