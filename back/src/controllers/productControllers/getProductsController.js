const { Product, Brand, Categories } = require("../../config/db");
const { filterByBrand, filterByCategory } = require("../Utils/filtering");
const { sortByPrice } = require("../Utils/sorting");

const getProducts = async (filters, sort) => {
	try {
		let queryOptions = {};

		// Obtener todos los productos
		const products = await Product.findAll(queryOptions);

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

		// Aplicar filtros
		let filteredProducts = [...allProduct];
		if (filters.brand) {
			filteredProducts = filterByBrand(filteredProducts, filters.brand);
		}
		if (filters.category) {
			filteredProducts = filterByCategory(filteredProducts, filters.category);
		}

		// Aplicar ordenación
		if (sort.field && sort.order) {
			if (sort.field === "price") {
				filteredProducts = sortByPrice(filteredProducts, sort.order);
			}
			// Agregar más opciones de ordenación si es necesario
		}

		return filteredProducts;
	} catch (error) {
		console.error("Hubo un error al obtener los productos:", error);
		throw new Error("Hubo un error interno del servidor.");
	}
};

module.exports = getProducts;
