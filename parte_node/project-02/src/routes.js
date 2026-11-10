const { Router } = require("express");

const routes = Router();

// cria uma rota get para testar a api
app.get("/health", (request, response) => {
  response.send("Seja bem vindo a minha API");
});

// Cria um array para simular um banco de dados
let users = [];
// cria uma rota post para inserir um novo usuario
app.post("/users", (request, response) => {
  const { name, age } = request.body;

  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name,
    age,
  };
  users.push(newUser);

  response.send(newUser);
});

//rota get pra listar todos os usuarios
app.get("/users", (request, response) => {
  response.send(users);
});

//cria uma rota ger para listar um usuario especifico
app.get("/users/:id", (request, response) => {
  const currrentUser = users.find(
    (user) => user.id == parseInt(request.params.id),
  );

  if (!currrentUser) response.send("Nao foi encontrado nenhum usuario");
  response.send(currrentUser);
});

//cria uma rota para deletar um usuario
app.delete("/users/:id", (request, response) => {
  const index = users.findIndex(
    (user) => user.id === parseInt(request.params.id),
  );

  if (index === -1) response.send("Nao foi encontrado nenhum usuario");

  users.splice(index, 1);

  response.send("Usuario removido com sucesso");
});

//cria uma rota para atualizar um usuario
app.put("/users/:id", (request, response) => {
  const { age, name } = request.body;

  const index = users.findIndex(
    (user) => user.id === parseInt(request.params.id),
  );

  if (index === -1) response.send("Nao foi encontrado nenhum usuario");

  const updateUser = {
    id: users[index].id,
    age,
    name,
  };

  users[index] = updateUser;

  response.send(updateUser);
});

export default routes;
