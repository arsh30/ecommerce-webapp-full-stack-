//in controllers -> we have functions  that is used in routes
const Product = require("../models/productModel");

//create Product -> This is Admin Route [ki sirf admin hi add kr ske]
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

//GET ALL PRODUCT
exports.getAllProduct = async (req, res) => {
  //1st function -> it is a callback function
  const products = await Product.find();
  // res.status(200).json({ message: "route is working fine" }); //1st
  res.status(200).json({
    success: true,
    products,
  });
};

//get single product details
exports.getProductDetails = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product does not found",
    });
  }

  res.status(200).json({
    success: true,
    product,
  });
};

//update -> only for admin
exports.updateProduct = async (req, res) => {
  let product = await Product.findById(req.params.id); //-> jo parameter me pass krege vo find kra phle
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product did not Found",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(201).json({
    success: true,
    product,
  });
};

//delete ->=======================================================
exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product does not found",
    });
  }

  //if we find the product
  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product Delete successfully",
  });
};
