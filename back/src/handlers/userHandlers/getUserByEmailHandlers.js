const getUserByEmailControllers = require("../../controllers/userControllers/getUserByEmailControllers");

const getUserByEmailHandlers = async (req, res) => {
	try {
		const { email } = req.query;
		const response = await getUserByEmailControllers(email);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error.message);
	}
};

module.exports = getUserByEmailHandlers;
