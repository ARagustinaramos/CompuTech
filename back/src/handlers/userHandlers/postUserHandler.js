const postUserController = require('../../controllers/userControllers/postUserController');

const postUserHandler = async (req, res) => {
  try {
    const newUser = await postUserController(req.userInfo);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

module.exports = postUserHandler;
