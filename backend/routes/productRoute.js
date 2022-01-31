const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const router = express.Router(); //-> this is used to use the routes

//create routes here
router.route("/products").get(getAllProduct); // pass the function in this -> 1st step make routes and then make function in controllers
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct);
router.route("/product/:id").delete(deleteProduct);
router.route("/product/:id").get(getProductDetails);
module.exports = router;
