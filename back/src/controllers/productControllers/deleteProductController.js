const { Product } = require("../../config/db");

const deleteProductsControllers = async (idProduct, exterminateProduct) => {
	const productData = await Product.findByPk(idProduct);
	if (!productData) return "Product not found!";
	console.log("exter:", exterminateProduct);
	if (exterminateProduct === true) {
		Product.destroy({ where: { id_Product: idProduct } });
		return "Product successfully removed!";
	}
	productData.active = false;
	await productData.save();
	return "Product successfully marked as inactive!";
};

module.exports = deleteProductsControllers;
