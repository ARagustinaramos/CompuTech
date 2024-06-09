const { User } = require("../../config/db");


const getUserId = async (id) => {
	const user = await User.findByPk(id);
	return user;
};

module.exports = getUserId;