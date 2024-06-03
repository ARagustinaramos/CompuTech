const { Order } = require('../../config/db');

const getUserOrders = async (userId) => {
    try {
      // Asegúrate de que userId es un string o un objeto que Sequelize pueda interpretar correctamente
      const orders = await Order.findAll({
        where: {
          'userInformation.userId': userId // Modifica la condición para buscar en userInformation.userId
        }
      });
      return orders;
      
    } catch (error) {
      throw new Error('Error fetching user orders');
    }
  };

module.exports = getUserOrders;