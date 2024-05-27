const { User } = require("../../config/db");

const postUserControllers = async (body, user) => {
	// Validar los datos de usuario
	console.log("user post: ", user);
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
	// password Polenta22@
	let rol = false;
	if (body.email === "eltodopoderoso@gmail.com") {
		rol = true;
	}
	// Crear el nuevo usuario
	let newName = body.name;
	if (body.name.includes("@")) {
		const index = body.name.indexOf("@");
		newName = body.name.substring(0, index);
	}
	const newUser = await User.create({
		name: newName,
		mail: body.email,
		image: body.picture,
		rol: rol,
		active: true
	});
	return newUser;
};

module.exports = postUserControllers;
