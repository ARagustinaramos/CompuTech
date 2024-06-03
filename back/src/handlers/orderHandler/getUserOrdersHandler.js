const  getUserOrders  = require('../../controllers/orderControllers/getUserOrders');
const { User } = require('../../config/db'); // Importa el modelo User

const getUserOrdersHandler = async (req, res) => {
  try {
    const { userId } = req.params;

    // Verificar si el usuario existe en la base de datos
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Obtener las órdenes asociadas al usuario
    const orders = await getUserOrders(userId);
    res.status(200).json(orders);

  } catch (error) {
    console.error('Error fetching user orders:', error);
    res.status(500).json({ error: 'Fallo al obtener las órdenes del usuario' });
  }
};

module.exports = getUserOrdersHandler;