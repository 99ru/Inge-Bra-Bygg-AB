const { Router } = require("express");
const TaskController = require("../controllers/TaskController");
const Auth = require('../middlewares/auth');
const Validations = require("../validations");
const asyncHandler = require("../utils/asyncHandler");

const router = new Router();

// routes
router.get("/", Auth.user, asyncHandler(TaskController.allTasks));
router.post("/", Auth.user, asyncHandler(TaskController.createTask));
router.patch("/:id", Auth.user, asyncHandler(TaskController.updateTask));
router.delete("/:id", Auth.user, asyncHandler(TaskController.deleteTask));


module.exports = router