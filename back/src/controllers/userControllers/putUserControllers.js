const { User } = require("../../config/db");
const putUserControllers = async (id, update) => {
	const user = await User.findByPk(id);

	if (!user) {
		return "user with Id no found";
	}
	if (update.name) user.name = update.name;
	if (update.email) user.mail = update.email;
	if (update.phone) user.phone = update.phone;
	if (update.picture) user.image = update.picture;
	if (update.address) user.address = update.address;
	if (update.active) user.active = update.active;
	if (update.shoppingCart) user.shoppingCart = update.shoppingCart;
	if (update.recurringPayment) user.recurringPayment = update.recurringPayment;

	user.save();
};
module.exports = putUserControllers;
