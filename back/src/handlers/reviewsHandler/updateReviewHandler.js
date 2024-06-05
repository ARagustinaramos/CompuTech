const updateReview = require("../../controllers/reviewsControllers/updateReview");

const updateReviewHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const reviewData = req.body;
    const updatedReview = await updateReview(id, reviewData);
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { updateReviewHandler };