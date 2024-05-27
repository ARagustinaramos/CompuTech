const { Router } = require('express');
const { MercadoPagoConfig, Preference } = require('mercadopago');

const router = Router();

// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'TEST-7685700411863001-052212-68addce11547c97624ec87f6e64b40e0-172263837' });

// Maneja las solicitudes POST a /create_preference
router.post('/', async (req, res) => {
    try {
        const { items } = req.body;

        // Validación de los datos recibidos
        if (!items || !Array.isArray(items)) {
            return res.status(400).json({ error: 'Invalid items data' });
        }

        // Construcción del cuerpo de la preferencia
        const body = {
            items: items.map(item => ({
                title: item.name,
                quantity: Number(item.quantity),
                unit_price: parseFloat(item.price),
                currency_id: 'ARS'
            })),
            back_urls: {
                success: "https://computech.vercel.app/",
                failure: "https://computech.vercel.app/",
                pending: "https://computech.vercel.app/"
            },
            auto_return: "approved",
            external_reference: 'TU_REFERENCIA_EXTERNA',
            notification_url: 'https://co/products'
        };

        // Creación de la preferencia
        const preference = new Preference(client);
        const result = await preference.create({ body });

        // Respuesta con el ID de la preferencia
        res.json({ id: result.id });
    } catch (error) {
        console.error('Error al crear la preferencia en Mercado Pago:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = router;