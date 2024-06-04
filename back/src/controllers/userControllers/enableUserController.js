const { User } = require("../../config/db");
const admin = require('firebase-admin');

const enableUserController = async (id) => {
  const user = await User.findByPk(id);

  if (!user) throw new Error("User not found");

  user.active = true;
  await user.save();

  // Habilitar al usuario en Firebase
  await admin.auth().updateUser(user.id_User, { disabled: false });

  return "User successfully marked as active!";
};

module.exports = enableUserController;
