const { Router } = require("express");
const getUserHandlers = require("../handlers/userHandlers/getUserHandlers");
const postUserHandlers = require("../handlers/userHandlers/postUserHandlres"); // Corregido el nombre del archivo
const getUserByIdHandlers = require("../handlers/userHandlers/getUserByIdHandlers");
const getUserByNameHandlers = require("../handlers/userHandlers/getUserByNameHandlers");
const putUserHandlers = require("../handlers/userHandlers/putUserHandlers");
const putAdminHandlers = require("../handlers/userHandlers/putAdminHandlers");

const userRouter = Router();

userRouter.get("/", getUserHandlers);
userRouter.get("/name", getUserByNameHandlers);
userRouter.get("/:id", getUserByIdHandlers);
userRouter.post("/", postUserHandlers);
userRouter.put("/:id", putUserHandlers);
userRouter.put("/admin/:id", putAdminHandlers);

module.exports = userRouter;
