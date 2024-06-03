const  getUserReviews  = require('../../controllers/reviewsControllers/getUserReviews');

const getUserReviewsHandler = async (req, res) => {
  try {
    const { userId } = req.params;
    const reviews = await getUserReviews(userId);
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error in getUserReviewsHandler:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUserReviewsHandler };
