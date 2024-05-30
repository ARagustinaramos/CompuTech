// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript;
require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const myCorreo = process.env.EMAIL_USER;

const sendCorrero = async (user) => {
	const msg = {
		to: user, // Change to your recipient
		from: `${myCorreo}`, // Change to your verified sender
		subject: "Sending with SendGrid is Fun",
		text: "and easy to do anywhere, even with Node.js",
		html: "<strong>and easy to do anywhere, even with Node.js</strong><p>Funcionaaaa</p>"
	};

	sgMail
		.send(msg)
		.then(() => {
			console.log("Email sent");
			return "Email sent";
		})
		.catch((error) => {
			console.error(error);
			return error;
		});
};

module.exports = sendCorrero;
