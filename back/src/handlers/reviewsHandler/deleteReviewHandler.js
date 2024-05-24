const deleteReview  = require('../../controllers/reviewsControllers/deleteReview');

const deleteReviewHandler = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteReview(id);
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { deleteReviewHandler };