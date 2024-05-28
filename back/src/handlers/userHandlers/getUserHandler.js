const { getAllUsers } = require('../../controllers/userController');

const getUserHandlers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

module.exports = getUserHandlers;
