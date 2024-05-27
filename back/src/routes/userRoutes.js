const { Router } = require("express");
const getUserHandlers = require("../handlers/userHandlers/getUserHandlers");
const getUserByIdHandlers = require("../handlers/userHandlers/getUserByIdHandlers");
const getUserByNameHandlers = require("../handlers/userHandlers/getUserByNameHandlers");
const putUserHandlers = require("../handlers/userHandlers/putUserHandlers");
const putAdminHandlers = require("../handlers/userHandlers/putAdminHandlers");
const getUserByEmailHandlers = require("../handlers/userHandlers/getUserByEmailHandlers");
const { checkJwt } = require("../server");
const postUserHandlers = require("../handlers/userHandlers/postUserHandlers");

const userRouter = Router();

userRouter.get("/", getUserHandlers);
userRouter.get("/name", getUserByNameHandlers);
userRouter.get("/email", getUserByEmailHandlers);
userRouter.get("/:id", getUserByIdHandlers);
userRouter.post("/", checkJwt, postUserHandlers);
userRouter.put("/:id", putUserHandlers);
userRouter.put("/admin/:id", putAdminHandlers);

module.exports = userRouter;
