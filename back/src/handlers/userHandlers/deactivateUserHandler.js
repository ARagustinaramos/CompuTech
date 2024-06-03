const deactivateUser = require('../../controllers/userControllers/deactivateUser');

const deactivateUserHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await deactivateUser(id);
    res.status(200).json({ message });
  } catch (error) {
    if (error.message === 'User not found') {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(500).json({ message: 'Error deactivating user', error: error.message });
    }
  }
};

module.exports = deactivateUserHandler;
