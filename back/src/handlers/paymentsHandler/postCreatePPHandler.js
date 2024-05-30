const  postCreatePPController  = require ("../../controllers/paymentsControllers/postCreatePPController");

const postCreatePPHandler = async (req, res) => {
    try {
        const response = postCreatePPController()
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports= postCreatePPHandler