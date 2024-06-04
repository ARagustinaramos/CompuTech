const deleteUserController = require('../../controllers/userControllers/deleteUserController');

const deleteUserHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await deleteUserController(id);
    res.status(200).json({ message });
  } catch (error) {
    if (error.message === 'User not found') {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
  }
};

module.exports = deleteUserHandler;
