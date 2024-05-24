const { Router } = require("express");
const getUserHandlers = require("../handlers/userHandlers/getUserHandlers");
const postUserHandlers = require("../handlers/userHandlers/postUserHandlres"); // Corregido el nombre del archivo

const userRouter = Router();

userRouter.get("/", getUserHandlers);
userRouter.post("/", postUserHandlers);

module.exports = userRouter;
