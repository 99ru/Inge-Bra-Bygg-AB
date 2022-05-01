const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const connection = require("./database/connection");

require("dotenv").config();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
/* app.use */

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
