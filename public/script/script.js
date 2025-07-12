const lanchesDiv = document.getElementById("lanches");

function PegarDados() {
  const resposta = () => {
    fetch("http://localhost:3333");
    const conteudo = resposta.json();
    return conteudo;
  };
}

function InserirElementosHTML(item) {
  const nome = createElement("h3");
  const ingredientes = createElement("li");
  nome.innerHTML = item.nome;
  ingredientes.innerHTML = item.ingredientes;
  lanchesDiv.appendChild(nome);
  lanchesDiv.appendChild(ingredientes);
}

function ExibirHTML() {
  const dadosLanches = PegarDados();
  dadosLanches.map((lanche) => {
    InserirElementosHTML(lanche);
  });
}
