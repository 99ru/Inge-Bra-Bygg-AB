const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const routes = require("./routes");

require("dotenv").config();

// middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
/* app.use(fileUpload()); for later */ 

// Routes
app.use('/api', routes.auth); // login 
app.use('/api/users', routes.users); 




app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
