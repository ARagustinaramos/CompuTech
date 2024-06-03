const { User } = require("../../config/db");

const putUserController = async (id, userData, res) => {
  try {
    // Buscar el usuario por su ID
    const user = await User.findByPk(id);
    console.log(id)

    // Verificar si el usuario existe
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Actualizar los campos del usuario con los datos proporcionados
    user.name = userData.name || user.name;
    user.phone = userData.phone || user.phone;
    user.image = userData.image || user.image;
    user.address = userData.address || user.address;
    user.active = userData.active || user.active;
    user.shoppingCart = userData.shoppingCart || user.shoppingCart;
    user.recurringPayment = userData.recurringPayment || user.recurringPayment;

    // Guardar los cambios en la base de datos
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = putUserController;