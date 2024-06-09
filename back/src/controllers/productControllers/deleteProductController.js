const { Product } = require("../../config/db");

const deleteProductsControllers = async (idProduct, exterminateProduct) => {
	const productData = await Product.findByPk(idProduct);
	if (!productData) return "Product not found!";
	console.log("exter:", exterminateProduct);
	if (exterminateProduct === true) {
		Product.destroy({ where: { id_Product: idProduct } });
		return "Product successfully removed!";
	}

	if (productData.active === true) {
		productData.active = false;
		await productData.save();
		return "Product successfully marked as inactive!";
	}
	if (productData.active === false) {
		productData.active = true;
		await productData.save();
		return "Product successfully marked as active!";
	}
};

module.exports = deleteProductsControllers;
