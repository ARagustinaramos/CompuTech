const { Order } = require('../../config/db'); // Ajusta la ruta según tu estructura de proyecto

// Función para crear una orden basada en la respuesta de PayPal
const createOrder = async (req, res) => {
  try {
    const paypalResponse = req.body;

    // Extraer información relevante de la respuesta de PayPal
    const { payer, purchase_units, status, update_time } = paypalResponse;

    const { address } = purchase_units[0].shipping;
    const { name } = purchase_units[0].shipping;
    const { amount } = purchase_units[0];
    const { status: paymentStatus } = purchase_units[0].payments.captures[0];
    const { value: total } = purchase_units[0].amount;
    
    const addressString = `${address.address_line_1} ${address.address_line_2} ${address.admin_area_2} ${address.admin_area_1} ${address.postal_code} ${address.country_code}`;
    const nameString = `${name.given_name} ${name.surname}`;
    const paymentInformation = {
    nameString,
      payer_id: payer.payer_id,
      amount,
    };
    const date = update_time;
    
    console.log("Address:", addressString);
    console.log("Name:", nameString);
    console.log("Payment Information:", paymentInformation);
    console.log("Payment Status:", paymentStatus);
    console.log("Date:", date);
    console.log("Total:", total);

    const newOrder = await Order.create({
        address:addressString,
        paymentMethod: 'PayPad',
        paymentInformation: paymentInformation,
        paymentStatus: paymentStatus,
        date: date,
        total: total
          
    });
    console.log("Orden:",newOrder);
    console.log(newOrder.id);
    res.status(201).json({ 
      message: 'Orden creada exitosamente',
      
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Fallo al crear la orden' });
  }
};

module.exports = {
  createOrder,
};
