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

// Search user by id
const findUserById = async (req, res, next) => {
  try {
    req.user = await users.findById(req.params.id);
    next();
  } catch (error) {
    res.statusCode(404).send(JSON.stringify({ message: "User not found" }));
  }
};

// Update user data
const updateUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.statusCode(400).send(JSON.stringify({ message: "Error update user" }));
  }
};

// Delete user by id
const deleteUser = async (req, res, next) => {
  try {
    res.user = await users.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.statusCode(400).send(JSON.stringify({ message: "Error delete user" }));
  }
};

module.exports = {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
};
