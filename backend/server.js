const app = require("./app");

const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

//handling uncaught exception
process.on("uncaughtException", function (err) {
  console.log(`Error ${err.message}`);
  console.log("shutting down the server due to uncaught exception");

  process.exit(1);
});

//config -> 2nd step is to config this  dotenv file
dotenv.config({ path: "backend/config/config.env" }); //->  after giving the  path -> ab hm iske variable use kr skte hai , create krke

//connecting to database after config
connectDatabase();

//create server
const server = app.listen(process.env.PORT, () => {
  console.log(
    `server is listening on this http://localhost:${process.env.PORT}`
  );
  //-> here the port number is in .env file so we have to import the file [use kaise pta chlega ki iss port pr listen krna h]
});

//unhandled promise -> when string change krdo mongo ki
process.on("unhandledRejection", function (err) {
  console.log(`Error: ${err.message}`);
  console.log("shutting down the server due to nhandled promise rejection");

  //ab apna server close krege isme callback function denege ik
  server.close(() => {
    process.exit(1);
  });
});
