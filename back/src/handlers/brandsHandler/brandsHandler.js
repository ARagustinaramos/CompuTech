const { getAllBrands } = require('../../controllers/brandControllers/allBrandsController');

const getBrandsHandler = async (req, res) => {
    try {
        const brands = await getAllBrands();
        res.json(brands);
    } catch (error) {
        res.status(500).send('Hubo un error al obtener las marcas.');
    }
};

module.exports = getBrandsHandler;
