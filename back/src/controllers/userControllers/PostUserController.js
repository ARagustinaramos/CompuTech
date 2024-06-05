const postUserController = async (req, res) => {
  try {
    const { name, mail, image, rol } = req.body;
    const existingUser = await User.findOne({ where: { mail } });

    if (existingUser) {
      if (!existingUser.active) {
        return res.status(403).json({ message: "Esta cuenta está desactivada." });
      }
      return res.status(200).json(existingUser);
    }

    const newUser = await User.create({
      mail,
      name,
      image: image || null,
      rol: true,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error en postUserController:", error);

    // Aquí agregamos un manejo más específico de errores
    if (error.name === "SequelizeValidationError") {
      // Si el error es una validación de Sequelize, respondemos con un estado 400 y el mensaje de error
      return res.status(400).json({ message: "Error de validación en la creación del usuario.", error: error.message });
    }

    // Si el error no es una validación de Sequelize u otro tipo específico, respondemos con un estado 500 y un mensaje genérico
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = postUserController;