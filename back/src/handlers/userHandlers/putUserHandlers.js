const putUserControllers = require("../../controllers/userControllers/putUserControllers");

const putUserHandlers = async (req, res) => {
	try {
		const id = req.params.id;
		const response = await putUserControllers(id);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error.message);
	}
};

module.exports = putUserHandlers;
