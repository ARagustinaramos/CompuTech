const fs = require("fs");
const path = require("path");
const { Product, Brand, Categories } = require("../../config/db");

const getAll = async () => {
	try {
		const dataPath = path.join(__dirname, "..", "..", "..", "json", "db.json");
		const rawData = fs.readFileSync(dataPath, "utf8");
		const jsonData = JSON.parse(rawData);

		const products = jsonData.products;
		for (let product of products) {
			let brand = await Brand.findOne({ where: { name: product.brand } });
			if (!brand) {
				brand = await Brand.create({ name: product.brand });
			}

			let category = await Categories.findOne({
				where: { name: product.category }
			});
			if (!category) {
				category = await Categories.create({ name: product.category });
			}
			await Product.create({
				name: product.name,
				description: product.description,
				price: product.price,
				image: product.image,
				stock: product.stock,
				active: true,
				brandId: brand.id_Brand,
				categoryId: category.id_Category
			});
		}
		// Procesar marcas explícitas
		const explicitBrands = jsonData.brands;
		for (let brand of explicitBrands) {
			await Brand.findOrCreate({
				where: { name: brand.name },
				defaults: brand
			});
		}

		// Procesar categorías explícitas
		const explicitCategories = jsonData.categories;
		for (let category of explicitCategories) {
			await Categories.findOrCreate({
				where: { name: category.name },
				defaults: category
			});
		}
		console.log("Todo salió bien.");
	} catch (error) {
		console.error("Hubo un error al extraer los datos: ", error);
	}
};

module.exports = { getAll };
