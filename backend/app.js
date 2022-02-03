const express = require("express");
const errorMiddleware = require("./middleware/error");
const app = express();

app.use(express.json()); // -> it is used add the data in body

//Routes Import
const product = require("./routes/productRoute");
app.use("/api/v1/", product); //-> 2nd parameter is vo product wala route

//middleware for error
app.use(errorMiddleware);
module.exports = app; //-> import this app in  server.js
