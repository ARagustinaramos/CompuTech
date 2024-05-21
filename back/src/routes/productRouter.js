const { Router } = require("express");
const postProductsHandler = require("../handlers/productHandler/postProductsHandler");
const getProductsHandler = require("../handlers/productHandler/getProductsHandler");
const putProductsHandles = require("../handlers/productHandler/putProductsHandler");
const deleteProducts = require("../handlers/productHandler/deleteProductsHandlres");
const getIdProductHandler = require("../handlers/productHandler/getIdProductHandler");
const getNameProductHandler = require("../handlers/productHandler/getNameProductHandler");
const { getAllHandler } = require("../handlers/productHandler/getAllHandler");

const productRouter = Router();

productRouter.get("/", getProductsHandler);
productRouter.get("/all", getAllHandler);
productRouter.get("/name", getNameProductHandler);
productRouter.get("/:id", getIdProductHandler);
productRouter.post("/", postProductsHandler);
productRouter.put("/:id", putProductsHandles);
productRouter.delete("/delete/:id", deleteProducts);

module.exports = productRouter;
