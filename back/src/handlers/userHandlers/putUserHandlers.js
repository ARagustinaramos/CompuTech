const putUserControllers = require("../../controllers/userControllers/putUserControllers");

const putUserHandlers = async (req, res) => {
	try {
		const id = req.params.id;
		const update = req.body;
		const response = await putUserControllers(id, update);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error.message);
	}
};

module.exports = putUserHandlers;
