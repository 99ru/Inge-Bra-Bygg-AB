const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const connection = require("./database/connection"); 
const routes = require("./routes");

require("dotenv").config();

// middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
/* app.use(fileUpload()); */ 

// Routes


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
