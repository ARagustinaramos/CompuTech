const getUserControllers = require("../../controllers/userControllers/getUserControllers");

const getUserHandlers = async (req, res) => {
    try {
        // Llamar al controlador para obtener los usuarios
        const users = await getUserControllers();

        // Retornar los usuarios como respuesta
        res.status(200).json(users);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error al obtener los usuarios");
    }
};

module.exports = getUserHandlers;
