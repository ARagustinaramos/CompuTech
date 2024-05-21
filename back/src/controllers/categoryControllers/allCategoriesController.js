const fs = require('fs');
const path = require('path');
const { Categories } = require('../../config/db');  // Asegúrate de que la importación es correcta

const getCategoriesFilePath = path.join(__dirname, '..', '..', '..', 'json/db.json');

const getAllCategories = async () => {
    try {
        const data = fs.readFileSync(getCategoriesFilePath, 'utf8');
        const jsonData = JSON.parse(data);
        const categoriesData = jsonData.categories;

        const categories = await Promise.all(categoriesData.map(async (categoryData) => {
            const [category, created] = await Categories.findOrCreate({
                where: { name: categoryData.name }
            });
            return category;
        }));
        const categoryNames = categories.map(category => category.name);
        return categoryNames;

    } catch (error) {
        console.error('Hubo un error al obtener las categorías:', error);
        throw new Error('Hubo un error interno del servidor.');
    }
};

module.exports = { getAllCategories };
