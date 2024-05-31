const { User } = require("../../config/db");
const sendCorreo = require("../../../sendGrid");
const fs = require("fs");
const path = require("path");

const postUserController = async (userInfo) => {
	console.log("User Info:", userInfo);
	const { name, email, phone, image, address, roles } = userInfo;

	const user = await User.create({
		name,
		mail: email,
		phone,
		image,
		address,
		active: true,
		rol: roles.includes("admin"),
		shoppingCart: [],
		recurringPayment: {}
	});

	return user;
};

module.exports = postUserController;
