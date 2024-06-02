const syncUsersFromFirebase = require('../../controllers/userControllers/syncUsersController');

const syncUsersHandler = async (req, res) => {
  try {
    const result = await syncUsersFromFirebase();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error syncing users', error });
  }
};

module.exports = syncUsersHandler;
