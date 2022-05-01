const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const connection = require("./database/connection");

require("dotenv").config();

// middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload()); 
app.use(express.json()); 

// Routes


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
