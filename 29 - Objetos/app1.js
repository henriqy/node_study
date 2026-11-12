const car = {
  name: "Corolla",
  color: "balck",
  fabrication: 2023,
  "size-car": "4 metros",
  "air-bag": true,
};

// Acessar prorpriedades de um objeto

console.log(car.name);
console.log(car["size-car"]);

console.log("---------------------------");

// MOdificar o valro de uma propriedade

car.name = "Honda Civic";
console.log(car.name);

// CRiar uma nova propriedade

console.log("------------------------");
console.log(car.age);
car.age = 3;
console.log(car.age);

// Deletar uma propriedade

console.log("----------------");

delete car.age;
console.log(car.age);

//Verificar se existe uma propriedade com esse nome

if ("name" in car) {
  console.log("Nome existe dentro do carro");
} else {
  console.log("Nome nao existe dentro de carro");
}
