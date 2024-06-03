const createOrderController = require('../../controllers/orderControllers/createOrderController');

const createOrderHandler = async (req, res) => {
  const userId = req.params.id; // Asegúrate de que el id del usuario está en los parámetros de la ruta
  const paypalResponse = req.body;

  try {
    await createOrderController(userId, paypalResponse, res);
  } catch (error) {
    console.error('Error in createOrderHandler:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = createOrderHandler;
