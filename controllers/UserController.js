const Users = require("../models/User");
const Tasks = require("../models/Task");

module.exports = {
  allUsers: async (req, res) => {
    const users = await Users.findAll({ attributes: { exclude: ["password"] } });
    res.json({ users });
  },
};


