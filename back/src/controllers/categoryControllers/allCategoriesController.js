const { Categories } = require('../../config/db');
const { Op } = require('sequelize');
const normaliceFunction = require('../Utils/normaliceFunction')

const getAllCategories = async () => {
	try {
		// Busca todas las categorías en la base de datos
		const categories = await Categories.findAll({
			attributes: ["name"],
			order: [["name", "ASC"]]
		});

		// Extrae los nombres de las categorías
		const categoryNames = categories.map((category) => category.name);

		return categoryNames.map(normaliceFunction);
	} catch (error) {
		console.error("Hubo un error al obtener las categorías:", error);
		throw new Error("Hubo un error interno del servidor.");
	}
};

module.exports = { getAllCategories };
