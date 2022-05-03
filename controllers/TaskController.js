const Task = require("../models/Task");
const User = require("../models/User");

module.exports = {

  allTasks: async (req, res) => {
    if (req.user.role === "admin") {
      const tasks = await Task.findAll({});
      res.json(tasks);
    } else if (req.user.role === "worker") {
      const tasks = await Task.findAll({ where: { UserId: req.user.id } });
      res.json(tasks);
    } else {
      req.user.role === "client";
      const tasks = await Task.findAll({ where: { UserId: req.user.id } });
    }
  },

  createTask: async (req, res) => {
    if (req.user.role === "client") {
      throw new Error("I dont tink sååååå");
    } else {
      const task = await Task.create(req.body);
      res.json(task);
    }
  },

  updateTask: async (req, res) => {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    await task.update(req.body, { where: { id } });
    res.json(task);
  },

  deleteTask: async (req, res) => {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (req.user.role === "admin") {
      await task.destroy();
      res.json("task deleted");
    } else {
      throw new Error("You are not allowed to delete this task");
    }
  },


};
