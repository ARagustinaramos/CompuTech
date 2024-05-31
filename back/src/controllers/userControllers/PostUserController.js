const { User } = require("../../config/db");

const postUserController = async (req, res) => {
	try {
		const { name, mail, rol } = req.body;
		const newUser = await User.create({
			mail,
			name,
			rol: true
			// Aquí puedes añadir más campos si es necesario
		});
		res.status(201).json(newUser);
	} catch (error) {
		console.error("Error creating user:", error);
		res.status(500).json({ message: "Error interno del servidor." });
	}
};

module.exports = postUserController;
