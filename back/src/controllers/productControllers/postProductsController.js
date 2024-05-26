const { Product, Brand, Categories } = require("../../config/db");
const normaliceFunction = require("../Utils/normaliceFunction");
const postProducts = async (productData) => {
	try {
		const productNameNormalizado = normaliceFunction(productData.name);
		// Verificar si el producto ya existe
		const existingProduct = await Product.findOne({
			where: { name: productNameNormalizado }
		});

		if (existingProduct) {
			throw new Error("El producto ya existe.");
		}
		//funcion para sacar los acentos y las mayusculas
		
		const brandNormalizado =
			normaliceFunction(
				productData.brand
			);
		const categoryNormalizado =
			normaliceFunction(
				productData.category
			);
		// Buscar o crear la marca
		const [brand] = await Brand.findOrCreate({
			where: { name: brandNormalizado },
			defaults: { name: brandNormalizado }
		});

		// Buscar o crear la categoría
		const [categories] = await Categories.findOrCreate({
			where: { name: categoryNormalizado },
			defaults: { name: categoryNormalizado }
		});

		// Crear el producto con las asociaciones correctas
		const product = await Product.create({
			name: productNameNormalizado,
			price: productData.price,
			image: productData.image,
			description: productData.description,
			stock: productData.stock,
			BrandIdBrand: brand.dataValues.id_Brand,
			CategoryIdCategory: categories.dataValues.id_Category
		});

		return product;
	} catch (error) {
		console.error("Hubo un error al crear el producto: ", error.message);
		throw new Error(error.message || "Hubo un error interno del servidor");
	}
};

module.exports = postProducts;
