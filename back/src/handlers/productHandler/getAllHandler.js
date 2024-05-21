const { getAll } = require("../../controllers/productControllers/getAll");
const getAllHandler = async (req, res) => {
	try {
		await getAll();
		res.status(200).send("Todo salió bien.");
	} catch (error) {
		console.error(error);
		res.status(500).send("Hubo un error al extraer los datos.");
	}
};

module.exports = { getAllHandler };
