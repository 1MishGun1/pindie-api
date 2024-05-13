const usersRouter = require("express").Router();

const {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail,
} = require("../middlewares/users");
const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDeleted,
} = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  createUser,
  sendUserCreated
);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.put(
  "/users/:id",
  findUserById,
  checkEmptyNameAndEmail,
  updateUser,
  sendUserUpdated
);
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;
