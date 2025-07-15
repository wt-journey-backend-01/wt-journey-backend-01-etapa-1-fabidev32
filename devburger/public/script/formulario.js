const urlParams = new URLSearchParams(window.location.search);
document.getElementById("nome").textContent = urlParams.get("nome");
document.getElementById("email").textContent = urlParams.get("email");
document.getElementById("assunto").textContent = urlParams.get("assunto");
document.getElementById("mensagem").textContent = urlParams.get("mensagem");
