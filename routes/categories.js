const categoriesRouter = require("express").Router();

const {
  findAllCategories,
  createCategory,
  findCategoryById,
} = require("../middlewares/categories");
const {
  sendAllCategories,
  sendCategoryCreated,
  sendCategoryById,
} = require("../controllers/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

module.exports = categoriesRouter;
