const  getCapturePPController  = require ("../../controllers/paymentsControllers/getCapturePPController");

const getCapturePPHandler = async (req, res) => {
    try {
        const response = getCapturePPController()
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports= getCapturePPHandler