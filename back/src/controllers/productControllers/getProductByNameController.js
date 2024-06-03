const { Product, Categories, Brand } = require("../../config/db.js");
const { Op } = require("sequelize"); // Importa operadores de Sequelize

const getProductByName = async (name) => {
	try {
		const products = await Product.findAll({
			where: {
				name: {
					[Op.iLike]: `%${name}%` // Utiliza el operador iLike para hacer una búsqueda case-insensitive
				}
			}
		});

		const allProduct = [];
		await Promise.all(
			products.map(async (product) => {
				const brand = await Brand.findOne({
					where: { id_Brand: product.dataValues.BrandIdBrand }
				});
				const brandMayuscula =
					brand?.dataValues.name.charAt(0).toUpperCase() +
					brand?.dataValues.name.slice(1).toLowerCase();
				const category = await Categories.findOne({
					where: { id_Category: product.dataValues.CategoryIdCategory }
				});
				const categoryMayuscula =
					category?.dataValues.name.charAt(0).toUpperCase() +
					category?.dataValues.name.slice(1).toLowerCase();

				const newProduct = {
					id_Product: product.dataValues.id_Product,
					name: product.dataValues.name,
					price: product.dataValues.price,
					image: product.dataValues.image,
					description: product.dataValues.description,
					stock: product.dataValues.stock,
					active: product.dataValues.active,
					BrandIdBrand: brandMayuscula,
					CategoryIdCategory: categoryMayuscula
				};

				allProduct.push(newProduct);
			})
		);

		if (allProduct.length > 0) {
			return allProduct;
		} else {
			throw new Error("No se encontraron productos con ese nombre.");
		}
	} catch (error) {
		console.error("Error al buscar los productos:", error);
		throw new Error("Error al buscar los productos.");
	}
};

module.exports = getProductByName;