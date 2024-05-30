const { Brand } = require('../../config/db');
const { Op } = require('sequelize');
const normaliceFunction = require('../Utils/normaliceFunction');

const getAllBrands = async () => {
    try {
        // Busca todas las marcas en la base de datos de manera insensible a mayúsculas y minúsculas
        const brands = await Brand.findAll({
            attributes: ['name'],
            order: [['name', 'ASC']],
        });

        // Extrae los nombres de las marcas
        const brandNames = brands.map(brand => brand.name);

        return brandNames.map(normaliceFunction);
    } catch (error) {
        console.error('Hubo un error al obtener las marcas:', error);
        throw new Error('Hubo un error interno del servidor.');
    }
};

module.exports = { getAllBrands };