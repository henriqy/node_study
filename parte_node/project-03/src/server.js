const routes = require("./routes"); // importando o arquivo de rotas no server.js
const express = require("express");
const app = express(); //instancia do express

app.use(express.json());
app.use(routes); //app(que eh o express) ira usar as rotas

app.listen(3000, () => {
  console.log("server is on port 3000");
});
