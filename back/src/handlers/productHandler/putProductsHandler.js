const putProducts = require("../../controllers/productControllers/putProductsController");

const putProductsHandles = async (req, res) => {
	try {
		const IdParams = req.params.id;
		const update = req.body;
		const response = await putProducts(IdParams, update);
		if (response === "Product not found!") {
			return res.status(500).send(response);
		}
		res.status(200).json(response);
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = putProductsHandles;