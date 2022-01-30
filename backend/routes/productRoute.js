const express = require("express");
const { getAllProduct } = require("../controllers/productController");
const router = express.Router(); //-> this is used to use the routes

//create routes here
router.route("/products").get(getAllProduct); // pass the function in this -> 1st step make routes and then make function in controllers

module.exports = router
