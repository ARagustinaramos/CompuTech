const getProducts = require("../../controllers/productControllers/getProductsController");

const getProductsHandler = async (req, res) => {
	try {
		const filters = {
			brand: req.query.brand || null,
			category: req.query.category || null
		};

		const sort = {
			field: req.query.sortField || null,
			order: req.query.sortOrder || null
		};

		const products = await getProducts(filters, sort);

		res.json(products);
	} catch (error) {
		console.error("Hubo un error al obtener los productos:", error);
		res.status(500).send("Hubo un error interno del servidor.");
	}
};

module.exports = getProductsHandler;
