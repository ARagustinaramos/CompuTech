const getProductByName = require("../../controllers/productControllers/getProductByNameController.js");

const getNameProductHandler = async (req, res) => {
	try {
		const { name } = req.query;
		const products = await getProductByName(name);
		res.status(200).json(products);
	} catch (error) {
		console.error("Error al buscar los productos:", error);
		res.status(500).json({ error: "Error interno del servidor" });
	}
};

module.exports = getNameProductHandler;