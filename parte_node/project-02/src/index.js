const express = require("express");
const routes = require("./routes");

// Cria um novo app usando express
const app = express();

//configura o express para usar o padrao json de comunicação
app.use(express.json());
app.use(routes);

app.listen(3001);
