const postUserControllers = require("../../controllers/userControllers/postUserControllers");

const postUserHandlers = async (req, res) => {
	try {
		const body = req.body;
		const user = req.user;
		console.log("req.user", req.user);
		console.log("req.body", req.body);
		const response = await postUserControllers(body, user);
		res.status(200).json(response);
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = postUserHandlers;
