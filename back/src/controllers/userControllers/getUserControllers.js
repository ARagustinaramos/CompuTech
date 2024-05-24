const { User } = require("../../config/db");

const getUserControllers = async () => {
    try {
        // Obtener todos los usuarios de la base de datos
        const users = await User.findAll();
        return users;
    } catch (error) {
        throw new Error("Error al obtener los usuarios");
    }
};

module.exports = getUserControllers;