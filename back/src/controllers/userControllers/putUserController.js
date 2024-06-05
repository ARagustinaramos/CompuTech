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

		// Variables para verificar cambios en shoppingCart y recurringPayment
		let shoppingCartChanged = false;
		let recurringPaymentChanged = false;

		// Actualizar los campos del usuario con los datos proporcionados
		user.name = userData.name || user.name;
		user.phone = userData.phone || user.phone;
		user.image = userData.image || user.image;
		user.address = userData.address || user.address;
		user.active = userData.active || user.active;

		if (userData.shoppingCart !== undefined && userData.shoppingCart !== user.shoppingCart) {
			user.shoppingCart = userData.shoppingCart;
			shoppingCartChanged = true;
		}

		if (userData.recurringPayment !== undefined && userData.recurringPayment !== user.recurringPayment) {
			user.recurringPayment = userData.recurringPayment;
			recurringPaymentChanged = true;
		}

		// Guardar los cambios en la base de datos
		await user.save();

		// Enviar el correo solo si se modificaron shoppingCart o recurringPayment
		if (shoppingCartChanged || recurringPaymentChanged) {
			// Busca el archivo html de update
			const updateHtml = fs.readFileSync(
				path.join(__dirname, "../../config/HtmlCorreos/Update.html"),
				"utf-8"
			);

			// Enviar el correo al usuario que actualizó su perfil
			const email = user.mail;
			await sendCorreo(email, updateHtml);
		}

		res.status(200).json(user);
	} catch (error) {
		console.error("Error updating user:", error);
		res.status(500).json({ message: "Internal server error" });
	}
};

module.exports = putUserController;
