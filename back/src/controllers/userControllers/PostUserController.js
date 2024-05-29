const { User } = require("../../config/db");
const sendEmail = require("../../config/sendEmail");

const postUserController = async (userInfo) => {
	const { name, email, phone, image, address, roles } = userInfo;

	const user = await User.create({
		name,
    mail: email,
    phone,
    image,
    address,
    active: true,
    rol: roles.includes('admin'),
    shoppingCart: [],
    recurringPayment: {}
	});
	sendEmail(email, name);
	return user;
};

module.exports = postUserController;