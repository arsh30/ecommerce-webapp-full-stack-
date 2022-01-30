exports.getAllProduct = (req, res) => {
  //1st function -> it is a callback function
  res.status(200).json({ message: "route is working fine" }); //1st
};

//in controllers -> we have functions  that is used in routes
