const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./Routes/routes");
const password = require("./password");
const App = express();
const port = 4000;
// BODY-PARSER //
App.use(bodyParser.json());

App.use(router);

// CONECTION DB
mongoose
  .connect(
    `mongodb+srv://lucas:${password}@reactnative.i80qw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Conectado ao DB");
  });
//
// user.createCollection(); // CREATE COLLECTION

App.listen(port, () => {
  console.log("Server rodando http://localhost:4000");
});
