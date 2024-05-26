const { Product } = require("../../config/db");

const deleteProductsControllers = async (idProduct) => {
	const productData = await Product.findByPk(idProduct);
	if (!productData) return "Product not found!";

	productData.active = false;
	await productData.save();
	return "Product successfully marked as inactive!";
};

module.exports = deleteProductsControllers;