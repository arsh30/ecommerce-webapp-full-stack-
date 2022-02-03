//in controllers -> we have functions  that is used in routes
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");

//create Product -> This is Admin Route [ki sirf admin hi add kr ske]
exports.createProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

//GET ALL PRODUCT
exports.getAllProduct = catchAsyncError(async (req, res) => {
  //1st function -> it is a callback function
  const products = await Product.find();
  // res.status(200).json({ message: "route is working fine" }); //1st
  res.status(200).json({
    success: true,
    products,
  });
});

//get single product details
exports.getProductDetails = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  // if (!product) {
  //   return res.status(500).json({
  //     success: false,
  //     message: "Product does not found",
  //   });
  // }
  if (!product) {
    return next(new ErrorHandler("product does Not Found", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});

//update -> only for admin
exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id); //-> jo parameter me pass krege vo find kra phle
  console.log("product ---> ", product);
  // console.log("product",product);
  // if (!product) {
  //   return res.status(500).json({
  //     success: false,
  //     message: "Product did not Found",
  //   });
  // }
  if (!product) {
    return next(new ErrorHandler("product does Not Found", 404));
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
});

//delete ->=======================================================
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  // if (!product) {
  //   return res.status(500).json({
  //     success: false,
  //     message: "Product does not found",
  //   });
  // }
  if (!product) {
    return next(new ErrorHandler("product does Not Found", 404));
  }

  //if we find the product
  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product Delete successfully",
  });
});
