/* const soma = 1 + 1 + 1000;

console.log(soma);

const geolib = require("geolib");

console.log(geolib.convertSpeed(29.8678, "kmh"));*/

const user = {
  name: "Daniel",
  age: 32,
};

console.log(user, "OBSJECT");
console.log(user.name, "OBJECT NAME");

const userJson = JSON.stringify(user);
console.log(userJson, "JSON");
console.log(userJson.name, "JSON NAME");

const userParsedJson = JSON.parse(userJson);
console.log(userParsedJson, "JSON PARSED");
console.log(userParsedJson.name, "JSON PARSED name");
