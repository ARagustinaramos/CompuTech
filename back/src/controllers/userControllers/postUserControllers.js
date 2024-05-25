const { User } = require("../../config/db");

const postUserControllers = async (body, user) => {
	// Validar los datos de usuario
	if (!body.name || !body.email || !body.picture) {
		throw new Error("All fields are required");
	}
	// if (!user.name || !user.email || !user.picture) {
	// 	throw new Error("All fields are required");
	// }

	// Verificar si el usuario ya existe
	const existingUser = await User.findOne({ where: { mail: body.email } });
	if (existingUser) {
		return "User with this email already exists";
	}

	// Crear el nuevo usuario

	const newUser = await User.create({
		name: body.name,
		mail: body.email,
		image: body.picture,
		rol: false
	});
	return newUser;
};

module.exports = postUserControllers;
