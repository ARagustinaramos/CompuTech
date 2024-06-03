const { deleteOrder } = require('../../controllers/orderControllers/deleteOrder');

const deleteOrderHandler = async (req, res) => {
  try {
    const { orderId } = req.params;

    // Intentar eliminar la orden
    const isDeleted = await deleteOrder(orderId);

    // Si la orden se eliminó correctamente, devolver una respuesta exitosa
    if (isDeleted) {
      return res.status(200).json({ message: 'Orden eliminada correctamente' });
    } else {
      // Si la orden no se encontró, devolver un error 404
      return res.status(404).json({ error: 'La orden no se encontró' });
    }
  } catch (error) {
    console.error('Error deleting order:', error);
    // Si ocurrió un error inesperado, devolver un error 500
    return res.status(500).json({ error: 'Error al eliminar la orden' });
  }
};

module.exports = deleteOrderHandler;
