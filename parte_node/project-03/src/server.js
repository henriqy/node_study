const express = require("express");
const app = express(); //instancia do express

app.use(express.json());

app.listen(3000, () => {
  console.log("server is on port 3000");
});
