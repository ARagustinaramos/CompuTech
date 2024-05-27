const { User } = require("../../config/db");

const postUserControllers = async (body, user) => {
	// Validar los datos de usuario
	console.log("user post: ", user);
	// if (!body.name || !body.email || !body.picture) {
	// 	throw new Error("All fields are required");
	// }
	if (!user.name || !user.email || !user.picture) {
		throw new Error("All fields are required");
	}

	// Verificar si el usuario ya existe
	const existingUser = await User.findOne({ where: { mail: user.email } });
	if (existingUser) {
		return "User with this email already exists";
	}
	// password Polenta22@
	let rol = false;
	if (user.email === "eltodopoderoso@gmail.com") {
		rol = true;
	}
	// Crear el nuevo usuario
	let newName = user.name;
	if (user.name.includes("@")) {
		const index = user.name.indexOf("@");
		newName = user.name.substring(0, index);
	}
	const newUser = await User.create({
		name: newName,
		mail: user.email,
		image: user.picture,
		rol: rol,
		active: true
	});
	return newUser;
};

module.exports = postUserControllers;
