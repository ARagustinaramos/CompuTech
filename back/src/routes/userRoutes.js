const { Router } = require("express");
const getUserHandler = require("../handlers/userHandlers/getUserHandler");
const getUserIdHandler = require("../handlers/userHandlers/getIdUserHandler");
const postUserHandler = require("../handlers/userHandlers/postUserHandler");
const toggleUserActivationHandler = require("../handlers/userHandlers/deactivateUserHandler");
const syncUsersHandler = require("../handlers/userHandlers/syncUsersHandler");
const putUserHandler = require("../handlers/userHandlers/putUserHandler");

const userRouter = Router();

userRouter.get("/", getUserHandler);
userRouter.get("/:id",  getUserIdHandler);
userRouter.post("/", postUserHandler);
userRouter.patch("/:id/toggle",  toggleUserActivationHandler);
userRouter.post('/sync',  syncUsersHandler);
userRouter.put("/put/:id",  putUserHandler);

module.exports = userRouter;
