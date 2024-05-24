const { Review } = require('../../config/db');

const deleteReview = async (id_Review) => {
    const review = await Review.findByPk(id_Review);
    if (!review) throw new Error('Review not found');
    await review.destroy();
    return review;
};

module.exports = deleteReview;