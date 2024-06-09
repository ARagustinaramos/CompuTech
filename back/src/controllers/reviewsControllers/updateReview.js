const { Review } = require('../../config/db');

const updateReview = async (id_Review, reviewData) => {
  const review = await Review.findByPk(id_Review);
  if (!review) throw new Error('Review not found');
  return await review.update(reviewData);
};

module.exports = updateReview;
