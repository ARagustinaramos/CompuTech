const postUserControllers = require("../../controllers/userControllers/postUserControllers");

const postUserHandlers = async (req, res) => {
	try {
		const body = req.body;
		const user = req.user;
		const response = await postUserControllers(body, user);
		res.status(200).json(response);
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = postUserHandlers;
