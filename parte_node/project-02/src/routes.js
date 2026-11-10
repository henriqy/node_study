const { Router } = require("express");

const routes = Router();

// cria uma rota get para testar a api
app.get("/health", (request, response) => {
  return response.status(200).json("Seja bem vindo a minha API");
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

  return response.status(201).json(newUser);
});

//rota get pra listar todos os usuarios
app.get("/users", (request, response) => {
  return response.status(200).json(users);
});

//cria uma rota ger para listar um usuario especifico
app.get("/users/:id", (request, response) => {
  const currrentUser = users.find(
    (user) => user.id == parseInt(request.params.id),
  );

  if (!currrentUser)
    return response.status(404).json("Nao foi encontrado nenhum usuario");

  return response.status(200).json(currrentUser);
});

//cria uma rota para deletar um usuario
app.delete("/users/:id", (request, response) => {
  const index = users.findIndex(
    (user) => user.id === parseInt(request.params.id),
  );

  if (index === -1)
    return response.status(404).json("Nao foi encontrado nenhum usuario");

  users.splice(index, 1);

  return response.status(200).json("Usuario removido com sucesso");
});

//cria uma rota para atualizar um usuario
app.put("/users/:id", (request, response) => {
  const { age, name } = request.body;

  const index = users.findIndex(
    (user) => user.id === parseInt(request.params.id),
  );

  if (index === -1)
    return response.status(404).json("Nao foi encontrado nenhum usuario");

  const updateUser = {
    id: users[index].id,
    age,
    name,
  };

  users[index] = updateUser;

  return response.status(200).json(updateUser);
});

export default routes;
