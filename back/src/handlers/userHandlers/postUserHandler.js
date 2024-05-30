const { postUserControllers } = require('../../controllers/userController');

const postUserHandlers = async (req, res) => {
  try {
    const newUser = await postUserControllers(req.userInfo);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

module.exports = postUserHandlers;
