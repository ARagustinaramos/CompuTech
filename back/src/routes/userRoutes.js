const { Router } = require("express");
const getUserHandlers = require("../handlers/userHandlers/getUserHandlers");
const getUserByIdHandlers = require("../handlers/userHandlers/getUserByIdHandlers");
const postUserHandlers = require("../handlers/userHandlers/postUserHandlers");
const deleteUserHandlers = require("../handlers/userHandlers/deleteUserHandlers");
const { checkJwt, getUserInfoFromJwt, checkAdminRole } = require("../middleware/auth0");

const userRouter = Router();

userRouter.get("/", checkJwt, getUserInfoFromJwt, getUserHandlers);
userRouter.get("/:id", checkJwt, getUserInfoFromJwt, getUserByIdHandlers);
userRouter.post("/", checkJwt, getUserInfoFromJwt, postUserHandlers);
userRouter.delete("/:id", checkJwt, getUserInfoFromJwt, checkAdminRole, deleteUserHandlers);

module.exports = userRouter;

