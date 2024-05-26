const { Router } = require("express");
const getUserHandlers = require("../handlers/userHandlers/getUserHandlers");
const postUserHandlers = require("../handlers/userHandlers/postUserHandlres"); // Corregido el nombre del archivo
const getUserByIdHandlers = require("../handlers/userHandlers/getUserByIdHandlers");

const userRouter = Router();

userRouter.get("/", getUserHandlers);
userRouter.get("/:id", getUserByIdHandlers);
userRouter.post("/", postUserHandlers);

module.exports = userRouter;
