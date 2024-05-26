const getUserByIdControllers = require("../../controllers/userControllers/getUserByIdControllers");

const getUserByIdHandlers = async (req, res) => {
	try {
		const id = req.params.id;
		const response = await getUserByIdControllers(id);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error.message);
	}
};

module.exports = getUserByIdHandlers;
