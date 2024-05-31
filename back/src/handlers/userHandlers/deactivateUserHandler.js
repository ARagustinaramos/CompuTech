const  deactivateUser  = require('../../controllers/userControllers/deactivateUser');
const  deactivateUser  = require('../../controllers/userControllers/deactivateUser');

const deactivateUserHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await deactivateUser(id);

    res.status(200).json({ message: 'User deactivated successfully' });
  } catch (error) {
    if (error.message === 'User not found') {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(500).json({ message: 'Error deactivating user', error });
    }
  }
};

module.exports = deactivateUserHandler;
