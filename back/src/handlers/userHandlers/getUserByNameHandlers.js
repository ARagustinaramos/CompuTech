const getUserByNameControllers = require("../../controllers/userControllers/getUserByNameControllers");

const getUserByNameHandlers = async (req, res) => {
	try {
		const { name } = req.query;
		const response = await getUserByNameControllers(name);
		res.status(200).json(response);
	} catch (error) {
		res.status(400).json(error.message);
	}
};
module.exports = getUserByNameHandlers;
