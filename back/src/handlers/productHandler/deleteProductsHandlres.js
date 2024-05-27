const deleteProductsControllers = require("../../controllers/productControllers/deleteProductController");

const deleteProducts = async (req, res) => {
	try {
		const idProduct = req.params.id;
		const result = await deleteProductsControllers(idProduct);
		res.status(200).json({ message: result });
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = deleteProducts;
