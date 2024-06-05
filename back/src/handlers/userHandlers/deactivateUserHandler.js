const toggleUserActivation = require('../../controllers/userControllers/deactivateUser');

const toggleUserActivationHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { action } = req.query; // Obtener el parámetro de la query string
    const activate = action === 'activate'; // Determinar si se va a activar o desactivar

    const message = await toggleUserActivation(id, activate);
    res.status(200).json({ message });
  } catch (error) {
    if (error.message === 'User not found') {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(500).json({ message: 'Error toggling user activation', error: error.message });
    }
  }
};

module.exports = toggleUserActivationHandler;
