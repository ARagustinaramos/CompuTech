require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const myCorreo = process.env.EMAIL_USER;

const sendCorreo = async (user, html) => {
	const msg = {
		to: user, // Change to your recipient
		from: `${myCorreo}`, // Change to your verified sender
		subject: "Equipo de Computech",
		text: "and easy to do anywhere, even with Node.js",
		html: `${html}`
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

module.exports = sendCorreo;
