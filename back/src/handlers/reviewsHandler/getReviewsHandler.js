const {getAllReviews} = require('../../controllers/reviewsControllers/getAllReviews');

const getReviewsHandler = async (req, res) => {
    try {
        const {filters, sort} = req.query;
        const reviews = await getAllReviews(filters, sort);
        res.json(reviews);
    } catch (error) {
        res.status(500).send('Hubo un error al obtener las reviews');
    }
}

module.exports = { getReviewsHandler }