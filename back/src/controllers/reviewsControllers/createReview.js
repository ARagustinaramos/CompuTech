const { Review, User, Product } = require("../../config/db");

const createReview = async (reviewData) => {
	const { userId, productId, ranking, comment } = reviewData;
	// Validar los datos de la review
	if (!userId || !productId || ranking === undefined || comment === undefined) {
		throw new Error(
			"All fields (userId, productId, ranking, comment) are required"
		);
	}

	// Verificar si el usuario existe
	const user = await User.findByPk(userId);
	if (!user) {
		throw new Error("User not found");
	}
	// Verificar si el producto existe
	const product = await Product.findByPk(productId);
	if (!product) {
		throw new Error("Product not found");
	}

	// Crear la nueva review con las asociaciones correctas
	const newReview = await Review.create({
		ranking,
		comment,
		UserIdUser: userId,
		ProductIdProduct: productId
	});
	return newReview;
};

module.exports = createReview;
