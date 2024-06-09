const deleteProductsControllers = require("../../controllers/productControllers/deleteProductController");

const deleteProductsHandler = async (req, res) => {
	try {
		const idProduct = req.params.id;
		const { exterminateProduct } = req.body;
		const result = await deleteProductsControllers(
			idProduct,
			exterminateProduct
		);
		res.status(200).json({ message: result });
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = deleteProductsHandler;