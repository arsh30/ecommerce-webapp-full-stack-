const express = require("express");
const app = express();

app.use(express.json()); // -> it is used add the data in body

//Routes Import
const product = require("./routes/productRoute");
app.use("/api/v1/", product); //-> 2nd parameter is vo product wala route

module.exports = app; //-> import this app in  server.js
