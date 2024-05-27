const deleteUserController = require("../../controllers/userControllers/deleteUserController");

const deleteUser = async (req, res) => {
	try {
		const idUser = req.params.id;
		const result = await deleteUserController(idUser);
		res.status(200).json({ message: result });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal server error" });
	}
};

module.exports = deleteUser;
