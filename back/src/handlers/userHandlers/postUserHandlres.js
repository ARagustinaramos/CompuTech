const postUserControllers = require("../../controllers/userControllers/postUserControllers");

const postUserHandlers = async (req, res) => {
	try {
		const data = req.body;
		const response = await postUserControllers(data);
		res.status(200).json(response);
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = postUserHandlers;
