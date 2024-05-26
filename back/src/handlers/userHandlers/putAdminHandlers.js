const putAdminControllers = require("../../controllers/userControllers/putAdminControllers");

const putAdminHandlers = async (req, res) => {
	try {
		const response = await putAdminControllers();
		res.status(200).json(response);
	} catch (error) {
		res.status(400).json(error.message);
	}
};

module.exports = putAdminHandlers;
