const { User, Review, Product } = require("../../config/db");

const getUserReviews = async (userId) => {
  // Validar que se proporciona un userId
  if (!userId) {
    throw new Error("User ID is required");
  }

  // Verificar si el usuario existe
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error("User not found");
  }

  // Recuperar todas las reviews asociadas a este usuario
  const reviews = await Review.findAll({
    where: { UserIdUser: userId },
    include: [
      { model: Product, attributes: ['id_Product'] } // Incluir información del producto
    ]
  });

  return reviews;
};

module.exports = getUserReviews;
