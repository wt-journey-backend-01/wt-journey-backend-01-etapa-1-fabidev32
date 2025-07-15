import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static("public"));
app.get("/", (requisicao, resposta) => {
  resposta.status(200).sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/contato", (requisicao, resposta) => {
  resposta.status(200).sendFile(path.join(__dirname, "views", "contato.html"));
});

app.get("/formularioEnviado", (requisicao, resposta) => {
  resposta
    .status(200)
    .sendFile(path.join(__dirname, "views", "formularioEnviado.html"));
});

export default app;
