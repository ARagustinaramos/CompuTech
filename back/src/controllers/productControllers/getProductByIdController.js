const { Product, Review, User } = require("../../config/db");
const getProductById = async (id) => {
	try {
		const foundProduct = await Product.findOne({
			where: {
				id_Product: id
			}
		});
		if (foundProduct.dataValues) {
			const review = await Review.findAll({
				where: { ProductIdProduct: id },
				include: [{ model: User, attributes: ["name", "mail"] }]
			});
			const reviewsEstructurado = [];
			if (review) {
				review.map((review) => {
					reviewsEstructurado.push({
						id_Review: review.id_Review,
						id_User: review.UserIdUser,
						user_name: review.User.name,
						user_mail: review.User.mail,
						comment: review.comment,
						ranking: review.ranking
					});
				});
			}

			return { product: foundProduct.dataValues, review: reviewsEstructurado };
		}
		return "Product Id not found";
	} catch (error) {
		console.error("Error al buscar el producto:", error);
		throw new Error("Error al buscar el producto.");
	}
};

module.exports = getProductById;
