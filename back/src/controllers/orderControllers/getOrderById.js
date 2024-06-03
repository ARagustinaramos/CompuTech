const { Order } = require('../../config/db');

const getOrderById = async (orderId) => {
  try {
    const order = await Order.findByPk(orderId);
    return order;
  } catch (error) {
    throw new Error('Error fetching order by ID');
  }
};

module.exports= getOrderById;