const putAdminControllers = require("../../controllers/userControllers/putAdminControllers");

const putAdminHandlers = async (req, res) => {
	try {
		const idAdmin = req.params.id;
		const updateUser = req.body;
		const response = await putAdminControllers(idAdmin, updateUser);
		res.status(200).json(response);
	} catch (error) {
		res.status(400).json(error.message);
	}
};

module.exports = putAdminHandlers;
