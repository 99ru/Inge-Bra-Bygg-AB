const express = require('express');
const app = express();
const mongoose = require('mongoose');





app.use(express.urlencoded({ extended: true }));


app.listen(3000, () => {
 console.log("APP IS LISTENING ON PORT 3000!")
})