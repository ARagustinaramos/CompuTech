const express = require("express");
const { getCategoriesHandler } = require("../handlers/categoriesHandler/categoriesHandler");

const categoriesRouter = express.Router(); // Usar express.Router() en lugar de Router()

categoriesRouter.get("/", getCategoriesHandler);

module.exports = categoriesRouter;
