const Task = require("../models/Task");
const User = require("../models/User");

module.exports = {
  allTasks: async (req, res) => {
    const tasks = await Task.findAll({});
    res.json(tasks)
  }
}