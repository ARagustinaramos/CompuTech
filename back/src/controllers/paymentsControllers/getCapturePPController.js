const { Order } = require("../../config/db");

const getCapturePPControllers = async () => {
    const {token} = req.query

    const response = await axios.post(`${URL_PAYPAL}/v2/checkout/orders/${token}/api/capture-order`, {} ,
        {
            auth:{
                username: CLIENT_ID_PAYPAL,
                password: SECRET_KEY_PAYPAL
            }
    })

    console.log(response.data)
};


module.exports = getCapturePPControllers
