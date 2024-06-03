const { Order, User } = require('../../config/db'); // Ajusta la ruta según tu estructura de proyecto

// Función para crear una orden basada en la respuesta de PayPal
const createOrderController = async (userId, paypalResponse, res) => {
  try {
   
    console.log(paypalResponse)
    console.log(userId)
    
    // Extraer información relevante de la respuesta de PayPal
    const { payer, purchase_units, status, update_time } = paypalResponse;
    const { address } = purchase_units[0].shipping;
    const { name } = purchase_units[0].shipping;
    const { amount } = purchase_units[0];
    const { status: paymentStatus } = purchase_units[0].payments.captures[0];
    const { value: total } = purchase_units[0].amount;

    // Obtener información del usuario
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const addressString = `${address.address_line_1} ${address.address_line_2} ${address.admin_area_2} ${address.admin_area_1} ${address.postal_code} ${address.country_code}`;
    const nameString = `${name.given_name} ${name.surname}`;
    const userInformation={
      userId: user.id_User,
      nameLogin: user.name,
      emailLogin: user.mail,
    };
    const paymentInformation = {
      name_payer: nameString,
      email_payer: payer.email_address, // Asegúrate de que la respuesta de PayPal incluye el correo del pagador aquí
      payer_id: payer.payer_id,
      total,
      addressCurrently: user.address,
      shoppingCart: user.shoppingCart
    };
    
    const date = update_time;

   

    const newOrder = await Order.create({
      userInformation: userInformation,
      address: addressString,
      paymentMethod: 'PayPal',
      paymentInformation: paymentInformation,
      paymentStatus: paymentStatus,
      date: date,
      total: total,
      // Relacionar la orden con el usuario
    });

    console.log("Orden:", newOrder);
    console.log(newOrder.id);
    res.status(201).json({ 
      message: 'Orden creada exitosamente',
      order: newOrder, // Puedes devolver la orden creada si es necesario
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Fallo al crear la orden' });
  }
};

module.exports = createOrderController;
