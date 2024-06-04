const { User } = require("../../config/db");
const admin = require('firebase-admin');

const deleteUserController = async (id) => {
  const user = await User.findByPk(id);

  if (!user) throw new Error("User not found");

  user.active = false;
  await user.save();

  // Deshabilitar al usuario en Firebase
  await admin.auth().updateUser(user.id_User, { disabled: true });

  return "User successfully marked as inactive!";
};

module.exports = deleteUserController;