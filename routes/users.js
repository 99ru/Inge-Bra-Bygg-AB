const { Router } = require("express");
const UserController = require("../controllers/UserController");
const Auth = require('../middlewares/auth');
const Validations = require("../validations");
const asyncHandler = require("../utils/asyncHandler");

const router = new Router();

router.get('/users', Auth.user, asyncHandler(UserController.allUsers)); 




module.exports = router