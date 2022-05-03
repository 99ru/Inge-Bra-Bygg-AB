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
};
