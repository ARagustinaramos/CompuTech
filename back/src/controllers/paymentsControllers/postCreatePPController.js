const axios = require('axios');
const { Order } = require("../../config/db");

const FRONT_URL = process.env.FRONT_URL;
const URL_PAYPAL = process.env.URL_PAYPAL;
const CLIENT_ID_PAYPAL = process.env.CLIENT_ID_PAYPAL;
const SECRET_KEY_PAYPAL = process.env.SECRET_KEY_PAYPAL;

const postCreatePPControllers = async (req, res) => {
    try {
        const { total } = req.body; 
        const order = {
            intent: 'CAPTURE',
            purchase_units: [
                {
                    amount: {
                        currency_code: 'USD',
                        value: total
                    }
                }
            ],
            application_context: {
                brand_name: 'Computech',
                landing_page: 'NO_PREFERENCE',
                user_action: 'PAY_NOW',
                return_url: `${FRONT_URL}/capture-order`,
                cancel_url: `${FRONT_URL}/cancel-order`
            }
        };

        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');

        const { data: { access_token } } = await axios.post(`${URL_PAYPAL}/v1/oauth2/token`, params, {
            auth: {
                username: CLIENT_ID_PAYPAL,
                password: SECRET_KEY_PAYPAL
            }
        });

        const response = await axios.post(`${URL_PAYPAL}/v2/checkout/orders`, order, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });

        console.log(res.json({ orderID: response.data.id }))

    } catch (error) {
        console.error('Error creating PayPal order:', error.response ? error.response.data : error.message);
        res.status(500).send('Error creating PayPal order');
    }
};

module.exports = postCreatePPControllers;
