const { where } = require("sequelize");
const { User } = require("../../config/db");
const sendCorreo = require("../../config/sendGrid");
const fs = require("fs");
const path = require("path");
const postUserController = async (req, res) => {
  try {
    const { name, mail, image, rol } = req.body;
    const existingUser = await User.findOne({ where: { mail } });

    if (existingUser) {
      // Si el usuario ya existe, verificamos si está activo
      if (!existingUser.active) {
        // Si el usuario no está activo, devolvemos un mensaje indicando que la cuenta está desactivada
        return res.status(403).json({ message: "Esta cuenta está desactivada." });
      }
      // Si el usuario está activo, simplemente devolvemos el usuario existente
      return res.status(200).json(existingUser);
    }

    // Si el usuario no existe, lo creamos
    const newUser = await User.create({
      mail,
      name,
      image: image || null,
      rol: true,
      // Aquí puedes añadir más campos si es necesario
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = postUserController;
