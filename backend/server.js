const app = require("./app");

const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

//config -> 2nd step is to config this  dotenv file
dotenv.config({ path: "backend/config/config.env" }); //->  after giving the  path -> ab hm iske variable use kr skte hai , create krke

//connecting to database after config
connectDatabase();

//create server
app.listen(process.env.PORT, () => {
    console.log(`server is listening on this http://localhost:${process.env.PORT}`);
    //-> here the port number is in .env file so we have to import the file [use kaise pta chlega ki iss port pr listen krna h]
})