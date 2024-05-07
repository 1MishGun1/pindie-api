const users = require("../models/user");

const findAllUsers = async (req, res, next) => {
  const result = (req.usersArray = await users.find({}));
  req.usersArray = result;
  next();
};

// Create new user
const createUser = async (req, res, next) => {
  console.log("POST /users");
  try {
    console.log(req.body);
    req.user = await users.create(req.body);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res
      .statusCode(400)
      .send(JSON.stringify({ message: "Error create new user" }));
  }
};

// Search game by id
const findUserById = async (req, res, next) => {
  try {
    req.user = await users.findById(req.params.id);
  } catch (error) {
    res.statusCode(404).send(JSON.stringify({ message: "User not found" }));
  }
};

module.exports = { findAllUsers, createUser, findUserById };
