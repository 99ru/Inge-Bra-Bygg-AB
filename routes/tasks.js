const { Router } = require("express");
const TaskController = require("../controllers/TaskController");
const Auth = require('../middlewares/auth');
const Validations = require("../validations");
const asyncHandler = require("../utils/asyncHandler");

const router = new Router();

router.get("/", Auth.user, asyncHandler(TaskController.allTasks));


module.exports = router