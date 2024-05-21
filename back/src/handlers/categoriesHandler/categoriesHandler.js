const { getAllCategories } = require('../../controllers/categoryControllers/allCategoriesController');

const getCategoriesHandler = async (req, res) => {
    try {
        const categories = await getAllCategories();
        res.json(categories);
    } catch (error) {
        res.status(500).send('Hubo un error al obtener las categorías.');
    }
};

module.exports = { getCategoriesHandler };
