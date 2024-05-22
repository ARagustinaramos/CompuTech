const { Router } = require("express");
const getUserHandlers = require("../handlers/userHandlers/getUserHandlers");
const postUserHandlers = require("../handlers/userHandlers/postUserHandlres");

const userRouter = Router();

userRouter.get("/", getUserHandlers);

userRouter.post("/post", postUserHandlers);

module.exports = userRouter;
