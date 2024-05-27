const deleteUserController = require("../../controllers/userControllers/deleteUserController");

const deleteUserHandler = async (req, res) => {
    try {
        const idUser = req.params.id;
        const currentUser = req.user; 
        if (!currentUser || !currentUser.rol) {
            return res.status(403).json({ message: "Access denied" });
        }

        const result = await deleteUserController(idUser);
        res.status(200).json({ message: result });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = deleteUserHandler;