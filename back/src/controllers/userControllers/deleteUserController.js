const { User } = require("../../config/db");

const deleteUserController = async (idUser) => {
    const user = await User.findByPk(idUser);
    if (!user) return "User not found!";

    user.active = false;
    await user.save();
    return "User successfully marked as inactive!";
};

module.exports = deleteUserController;