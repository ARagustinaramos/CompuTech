const { User } = require("../../config/db");

const getUserByIdControllers = async (id) => {
	const foundUsers = await User.findByPk(id);
	if (foundUsers.dataValues) {
		return foundUsers.dataValues;
	}
	return "Users Id not found!";
};

module.exports = getUserByIdControllers;
