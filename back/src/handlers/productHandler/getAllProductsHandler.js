const getAllProductsController = require("../../controllers/productControllers/getAllProductsController.js");

const getAllProductsHandler = async (req, res) => {
	try {
		const filters = {
			brand: req.query.brand || null,
			category: req.query.category || null
		};

		const sort = {
			field: req.query.sortField || null,
			order: req.query.sortOrder || null
		};

		const products = await getAllProductsController(filters, sort);

		// Modificar la respuesta para incluir los comentarios y el promedio de ranking
		const modifiedProducts = products.map((product) => ({
			id_Product: product.id_Product,
			name: product.name,
			price: product.price,
			image: product.image,
			description: product.description,
			stock: product.stock,
			active: product.active,
			BrandIdBrand: product.BrandIdBrand,
			CategoryIdCategory: product.CategoryIdCategory,
			reviews: product.reviews, // Incluye los comentarios
			averageRating: product.averageRating // Incluye el promedio de ranking
		}));

		res.json(modifiedProducts);
	} catch (error) {
		console.error("Hubo un error al obtener los productos:", error);
		res.status(500).send("Hubo un error interno del servidor.");
	}
};

module.exports = getAllProductsHandler;