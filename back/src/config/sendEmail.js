const transporter = require('../config/nodemailer');

const sendPurchaseEmail = async (userEmail, purchaseDetails) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: 'Detalles de tu compra',
        html: `
            <h1>Gracias por tu compra</h1>
            <p>Estos son los detalles de tu compra:</p>
            <ul>
                ${purchaseDetails.map(item => `
                    <li>${item.productName} - Cantidad: ${item.quantity} - Precio: $${item.price}</li>
                `).join('')}
            </ul>
            <p>Total: $${purchaseDetails.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Correo enviado correctamente');
    } catch (error) {
        console.error('Error enviando el correo:', error);
    }
};

module.exports = sendPurchaseEmail;