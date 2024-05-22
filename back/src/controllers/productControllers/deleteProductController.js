const { Product } = require("../../config/db");

const deleteProductsControllers = async (idProduct) => {
	const productData = await Product.findByPk(idProduct);
	if (!productData) return "Product not found!";

	await productData.destroy();
	return "Successful product removal!";
};

module.exports = deleteProductsControllers;
