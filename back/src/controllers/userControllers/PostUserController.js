const { where } = require("sequelize");
const { User } = require("../../config/db");
const sendCorreo = require("../../config/sendGrid");
const fs = require("fs");
const path = require("path");
const postUserController = async (req, res) => {
	try {
		const { name, mail, rol } = req.body;
		const existeUser = await User.findOne({ where: { mail: mail } });
		if (existeUser) {
			return res.status(201).json("Usuario ya registrado");
		}
		const newUser = await User.create({
			mail,
			name,
			rol: true
			// Aquí puedes añadir más campos si es necesario
		});

		const bienvenidoHtml = fs.readFileSync(
			path.join(__dirname, "../../config/HtmlCorreos/BienvenidoCompuTech.html")
		);
		await sendCorreo(mail, bienvenidoHtml);
		res.status(201).json(newUser);
	} catch (error) {
		console.error("Error creating user:", error);
		res.status(500).json({ message: "Error interno del servidor." });
	}
};

module.exports = postUserController;
