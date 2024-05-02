const categoriesRouter = require("express").Router();

const findAllUsers = require("../middlewares/categories");
const sendAllUsers = require("../controllers/categories");

categoriesRouter.get("/users", findAllUsers, sendAllUsers);

module.exports = categoriesRouter;
