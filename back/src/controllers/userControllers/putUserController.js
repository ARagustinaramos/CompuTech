const { User } = require("../../config/db");
const fs = require("fs");
const path = require("path");
const sendCorreo = require("../../config/sendGrid");

const putUserController = async (id, userData, res) => {
	try {
		// Buscar el usuario por su ID
		const user = await User.findByPk(id);
		console.log(id);

		// Verificar si el usuario existe
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		// Actualizar los campos del usuario con los datos proporcionados
		user.name = userData.name || user.name;
		user.phone = userData.phone || user.phone;
		user.image = userData.image || user.image;
		user.address = userData.address || user.address;
		user.active = userData.active || user.active;
		user.shoppingCart = userData.shoppingCart || user.shoppingCart;
		user.recurringPayment = userData.recurringPayment || user.recurringPayment;
		// user.rol = userData.rol || user.rol;

		if (typeof userData.rol !== "undefined") {
			user.rol = userData.rol;
		}

		if (typeof userData.active !== "undefined") {
			user.active = userData.active;
		}

		// Guardar los cambios en la base de datos
		await user.save();
		const correoUser = user.mail;
		const compraRealizada = userData.shoppingCart;

		if (compraRealizada) {
			// Leer el archivo HTML de compra
			const compraHtml = fs.readFileSync(
				path.join(__dirname, "../../config/HtmlCorreos/Compra.html"),
				"utf-8"
			);

			// Enviar correo al usuario después de realizar la compra
			await sendCorreo(correoUser, compraHtml);
		} else {
			// Leer el archivo HTML de actualización
			const updateHtml = fs.readFileSync(
				path.join(__dirname, "../../config/HtmlCorreos/Update.html"),
				"utf-8"
			);

			// Enviar correo al usuario que actualizó su perfil
			await sendCorreo(correoUser, updateHtml);
		}

		res.status(200).json(user);
	} catch (error) {
		console.error("Error updating user:", error);
		res.status(500).json({ message: "Internal server error" });
	}
};

module.exports = putUserController;
