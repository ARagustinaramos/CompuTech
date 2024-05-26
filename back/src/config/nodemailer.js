const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Tu dirección de correo electrónico
        pass: process.env.EMAIL_PASS, // Tu contraseña de correo electrónico o token de aplicación
    },
});

module.exports = transporter;