const { Review, User, Product } = require("../../config/db");

const createReview = async (reviewData) => {
  const { userId, productId, ranking, comment } = reviewData;
  if (!userId || !productId || ranking === undefined || comment === undefined) {
    throw new Error("All fields (userId, productId, ranking, comment) are required");
  }

  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error("User not found");
  }

  const product = await Product.findByPk(productId);
  if (!product) {
    throw new Error("Product not found");
  }

  const newReview = await Review.create({
    ranking,
    comment,
    UserIdUser: userId,
    ProductIdProduct: productId,
    status: 'pending' // Estado por defecto es "pending"
  });
  return newReview;
};

module.exports = createReview;
