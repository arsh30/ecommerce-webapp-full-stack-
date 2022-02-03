module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
  //same parameter k sath, jo try wala function hai vo upr se mil hi rha hai isme ghuma kr krte hai
};

//this is for try catch agar aise nhi kr skte to try catch add kro

/*ERROR HANDLING 3 TYPES:
1)  ERROR.JS -> agar kuch exist hi nhi krta to yeh krdo chlado eg: // if (!product) { agar product nhi mila toh
  //   return res.status(500).json({
  //     success: false,
  //     message: "Product did not Found",
  //   });

  =======================

2) Handling async error  (use TRY CATCH)-> jb async await use kro uske sath try catch use kro means try isme pura code aajega agar 
nahi hoya to catch block chl jayega. eg agar name hmne nahi diya(which is required true) ya koi parameter to postman me run hota 
jayega and console m error aajayega and server is waste to overcome this  middleware me ik hor function bnaya catch async eror 
which is try catch -> isse server bnd nhi hoga

/==========================

3) unhandled promise , means agar server ki string me change krdo toh what we wil do ->
//so urgently ->  we shut down the server

process.on("unhandledRejection", function (err) {
  console.log(`Error: ${err.message}`);
  console.log("shutting down the server due to nhandled promise rejection");

  //ab apna server close krege isme callback function denege ik
  server.close(() => {
    process.exit(1);
  });
});

=========================================================
4) Uncaught error -> means agar humne kuch console kra  or vo exist hi na krta ho toh error comes yeh sabse upr aayega in server.js

process.on("uncaughtException", function (err) {
    console.log(`Error ${err.message}`);
    console.log("shutting down the server due to uncaught exception");

    process.exit(1);
})

===============================================================
5) mongodb error
 // //wrong mongodb error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`; //mongo db ka error aajega
    err = new ErrorHandler(message, 400);
  }



*/
