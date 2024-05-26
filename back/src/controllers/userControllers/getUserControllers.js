const { User } = require("../../config/db");

const getUserControllers = async () => {
    try {
        // Obtener todos los usuarios activos de la base de datos
        const users = await User.findAll({ where: { active: true } });
        return users;
    } catch (error) {
        throw new Error("Error al obtener los usuarios");
    }
};

module.exports = getUserControllers;