const { User } = require("../../config/db");

const toggleUserActivation = async (id, activate) => {
	const user = await User.findByPk(id);
	if (!user) throw new Error("User not found");
	user.active = activate;
	await user.save();
	return activate ? "User successfully marked as active!" : "User successfully marked as inactive!";
  };
  
  module.exports = toggleUserActivation;