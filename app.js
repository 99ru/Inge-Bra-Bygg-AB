const express = require("express");
const app = express();
const routes = require("./routes");

require("dotenv").config();

// middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
/* app.use(fileUpload()); for later */ 

// Routes
app.use('/', routes.auth); // login                       
app.use('/users', routes.users); // all users




const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
}) 

