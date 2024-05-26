const { User } = require("../../config/db");

const putAdminControllers = async (idAdmin, updateUser) => {
	const perfilAdmin = await User.findByPk(idAdmin);
	if (perfilAdmin.rol === false) {
		return "permission denied";
	}
	const perfilUser = await User.findByPk(updateUser.id_User);
	if (perfilUser.id_User === updateUser.id_User) {
		if (perfilUser.rol === false) {
			perfilUser.rol = true;
			perfilUser.save();
			return "now he is admin";
		}
		if (perfilUser.rol === true) {
			perfilUser.rol = false;
			perfilUser.save();
			return "he is no longer admin";
		}
	}
};
module.exports = putAdminControllers;
