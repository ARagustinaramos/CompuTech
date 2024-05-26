const { Op } = require("sequelize");
const { User } = require("../../config/db");

const getUserByNameControllers = async (name) => {
	const results = await User.findAll({
		where: {
			name: {
				[Op.iLike]: `%${name}%`
			}
		}
	});

	const Users = [];
	results.map((user) => {
		return Users.push(user.dataValues);
	});
	if (Users.length) {
		return Users;
	}
	return "User not fund";
};
module.exports = getUserByNameControllers;
