const { Order } = require('../../config/db');

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Fallo al obtener las órdenes' });
  }
};

module.exports = {
  getAllOrders,
};