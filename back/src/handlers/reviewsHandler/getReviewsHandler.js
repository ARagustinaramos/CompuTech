const getAllReviews = require('../../controllers/reviewsControllers/getAllReviews');


const getReviewsHandler = async (req, res) => {
    try {
        const reviews = await getAllReviews();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getReviewsHandler }