const { Product } = require("../../config/db");
const getProductById = async (id) => {
	try {
		const foundProduct = await Product.findOne({
			where: {
				id_Product: id
			}
		});
		if (foundProduct.dataValues) {
			return foundProduct.dataValues;
		}
		return "Product Id not found";
	} catch (error) {
		console.error("Error al buscar el producto:", error);
		throw new Error("Error al buscar el producto.");
	}
};

module.exports = getProductById;
