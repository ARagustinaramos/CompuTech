const getUserControllers = require("../../controllers/userControllers/getUserControllers");

const getUserHandlers = async (req, res) => {
	try {
		const response = await getUserControllers();
		res.status(200).json(response);
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = getUserHandlers;
