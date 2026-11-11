const { Router } = require("express");
const {
  createUser,
  listUsers,
  lisUserDetail,
  deleteUser,
  updateUser,
} = require("./controllers/users");
const verifyToken = require("./middlewares/AuthMiddleware");

const routes = Router();

// cria uma rota get para testar a api
routes.get("/health", (request, response) => {
  return response.status(200).json("Seja bem vindo a minha API");
});

//rota get pra listar todos os usuarios
routes.get("/users", listUsers);

//cria uma rota ger para listar um usuario especifico
routes.get("/users/:id", lisUserDetail);

//routes.use(verifyToken); -> faz com que todas as funcoes de baixo precisem de autenticação

// cria uma rota post para inserir um novo usuario
routes.post("/users", verifyToken, createUser);

//cria uma rota para deletar um usuario
routes.delete("/users/:id", verifyToken, deleteUser);

//cria uma rota para atualizar um usuario
routes.put("/users/:id", verifyToken, updateUser);

module.exports = routes;
