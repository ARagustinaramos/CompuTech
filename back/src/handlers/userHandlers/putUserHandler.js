const putUserController = require("../../controllers/userControllers/putUserController.js");

const putUserHandler = async (req, res) => {
	try {
		const { id } = req.params; // Obtener el ID del usuario de los parámetros de la solicitud
		const userData = req.body; // Obtener los datos del usuario del cuerpo de la solicitud
		await putUserController(id, userData, res); // Llamar al controlador con el ID y los datos del usuario
	} catch (error) {
		console.error("Error in putUserHandler:", error);
		res.status(500).json({ message: "Internal server error" });
	}
};

module.exports = putUserHandler;
