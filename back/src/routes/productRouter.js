const { Router } = require("express");
const postProductsHandler = require("../handlers/productHandler/postProductsHandler");
const getProductsHandler = require("../handlers/productHandler/getProductsHandler");
const putProductsHandles = require("../handlers/productHandler/putProductsHandler");
const getIdProductHandler = require("../handlers/productHandler/getIdProductHandler");
const getNameProductHandler = require("../handlers/productHandler/getNameProductHandler");
const getAllProductsHandler = require("../handlers/productHandler/getAllProductsHandler");
const deleteProductsHandler = require("../handlers/productHandler/deleteProductsHandler");

const productRouter = Router();

productRouter.get("/", getProductsHandler);
productRouter.get("/all", getAllProductsHandler);
productRouter.get("/name", getNameProductHandler);
productRouter.get("/:id", getIdProductHandler);
productRouter.post("/", postProductsHandler);
productRouter.put("/:id", putProductsHandles);
productRouter.delete("/delete/:id", deleteProductsHandler);

module.exports = productRouter;