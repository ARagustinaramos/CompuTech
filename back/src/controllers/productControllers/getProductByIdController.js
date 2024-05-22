const axios = require("axios");

const getProductById = async (id) => {
	try {
		const { data } = await axios.get(`http://localhost:3001/products`);

		const productId = data.find((product) => {
			return product.id_Product === id;
		});

		return productId;
	} catch (error) {
		console.error("Error al buscar el producto:", error);
		throw new Error("Error al buscar el producto.");
	}
};

module.exports = getProductById;
