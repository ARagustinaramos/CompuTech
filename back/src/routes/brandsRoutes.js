const { Router } = require("express");
const getBrandsHandler = require("../handlers/brandsHandler/brandsHandler");

const brandsRouter = Router();

brandsRouter.get("/", getBrandsHandler);

module.exports = brandsRouter;