const express = require("express");
const { getReviewsHandler } = require("../handlers/reviewsHandler/getReviewsHandler");
const { createReviewHandler } = require("../handlers/reviewsHandler/createReviewHandler");
const { updateReviewHandler } = require("../handlers/reviewsHandler/updateReviewHandler");
const { deleteReviewHandler } = require("../handlers/reviewsHandler/deleteReviewHandler");
const { getUserReviewsHandler } = require("../handlers/reviewsHandler/getUserReviews");

const reviewsRouter = express.Router();

reviewsRouter.get("/", getReviewsHandler);
reviewsRouter.post("/", createReviewHandler);
reviewsRouter.put("/:id", updateReviewHandler);
reviewsRouter.delete("/:id", deleteReviewHandler);

reviewsRouter.get("/user/:userId", getUserReviewsHandler);

module.exports = reviewsRouter;