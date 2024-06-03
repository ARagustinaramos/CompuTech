const { getAllOrders } = require('../../controllers/orderControllers/getAllOrdersController');

const getAllOrdersHandler = async (req, res) => {
  await getAllOrders(req, res);
};

module.exports = getAllOrdersHandler;