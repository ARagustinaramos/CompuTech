const { User } = require("../../config/db");

const getUserByEmailControllers = async (email) => {
	const userFound = await User.findOne({ where: { mail: email } });
	if (!userFound) {
		return "user not found";
	}
	return userFound.dataValues;
};

module.exports = getUserByEmailControllers;
