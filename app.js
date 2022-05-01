const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const connection = require("./database/connection"); 
const routes = require("./routes");

require("dotenv").config();

// middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
/* app.use(fileUpload());  */ // allows us to upload files
app.use(express.json()); // allows us to use req.body

// Routes


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
