const  getCancelPPController  = require ("../../controllers/paymentsControllers/getCancelPPController");

const getCancelPPHandler = async (req, res) => {
    try {
        const response = getCancelPPController()
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports= getCancelPPHandler