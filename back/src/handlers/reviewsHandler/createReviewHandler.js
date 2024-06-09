const createReview = require("../../controllers/reviewsControllers/createReview");

const createReviewHandler = async (req, res) => {
  try {
    const reviewData = req.body;
    const newReview = await createReview(reviewData);
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createReviewHandler };
