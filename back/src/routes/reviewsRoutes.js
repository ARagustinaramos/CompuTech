const express = require("express");
const {getReviewsHandler} = require("../handlers/reviewsHandler/getReviewsHandler");

const reviewsRouter = express.Router();

reviewsRouter.get("/", getReviewsHandler);

module.exports = reviewsRouter;