const { Review, User, Product } = require("../../config/db");

const getAllReviews = async (id) => {
	const reviews = await Review.findAll({
		where: { ProductIdProduct: id },
		include: [
			{ model: User, attributes: ["name", "mail"] },
			{ model: Product, attributes: ["name"] }
		]
	});

	const reviewsEstructurado = [];
	reviews.map((review) => {
		reviewsEstructurado.push({
			id_Review: review.id_Review,
			id_User: review.UserIdUser,
			id_Product: review.ProductIdProduct,
			user_name: review.User.name,
			user_mail: review.User.mail,
			product_name: review.Product.name,
			comment: review.comment,
			ranking: review.ranking
		});
	});

	return reviewsEstructurado;
};

module.exports = getAllReviews;
