const { Order } = require('../../config/db');

const deleteOrder = async (orderId) => {
  try {
    // Eliminar la orden de la base de datos
    const deletedOrder = await Order.destroy({
      where: {
        id_Order: orderId
      }
    });
    
    // Si se eliminó correctamente, devolver true; de lo contrario, devolver false
    return deletedOrder ? true : false;
  } catch (error) {
    throw new Error('Error deleting order');
  }
};

module.exports = {
  deleteOrder,
};