const { User } = require("../../config/db");

const deactivateUser = async (id) => {
	const user = await User.findByPk(id);
	if (!user) return "User not found!";
	user.active = false;
	await user.save();
	return "User successfully marked as inactive!";
};

module.exports = deactivateUser;
