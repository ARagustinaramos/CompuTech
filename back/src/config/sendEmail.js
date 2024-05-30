const transporter = require('./nodemailer');

const sendWelcomeEmail = async (userEmail, userName) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: '¡Bienvenido a Nuestra Plataforma!',
        html: `
            <h1>Bienvenido, ${userName}!</h1>
            <p>Gracias por registrarte en nuestra plataforma. Estamos encantados de tenerte con nosotros.</p>
            <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos.</p>
            <p>Saludos,</p>
            <p>El equipo de [Computech]</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Correo de bienvenida enviado correctamente');
    } catch (error) {
        console.error('Error enviando el correo de bienvenida:', error);
    }
};

module.exports = sendWelcomeEmail;