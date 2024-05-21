const { getTypesController } = require('../controllers/typesControllers');

const getTypesHandler = async (req, res) => {
    try {
        const response = await getTypesController()
        const respuesta = res.status(200).json(response)

        return respuesta 
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getTypesHandler
};