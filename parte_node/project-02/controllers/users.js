// Cria um array para simular um banco de dados
let users = [];

function createUser(request, response) {
  const { name, age } = request.body;

  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name,
    age,
  };
  users.push(newUser);

  return response.status(201).json(newUser);
}

function listUsers(request, response) {
  return response.status(200).json(users);
}

function lisUserDetail(request, response) {
  const currrentUser = users.find(
    (user) => user.id == parseInt(request.params.id),
  );

  if (!currrentUser)
    return response.status(404).json("Nao foi encontrado nenhum usuario");

  return response.status(200).json(currrentUser);
}

function deleteUser(request, response) {
  const index = users.findIndex(
    (user) => user.id === parseInt(request.params.id),
  );

  if (index === -1)
    return response.status(404).json("Nao foi encontrado nenhum usuario");

  users.splice(index, 1);

  return response.status(200).json("Usuario removido com sucesso");
}

function updateUser(request, response) {
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
}

module.exports = {
  createUser,
  listUsers,
  lisUserDetail,
  deleteUser,
  updateUser,
};
