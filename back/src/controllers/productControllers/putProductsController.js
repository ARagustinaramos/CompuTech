const { Product, Brand, Categories } = require("../../config/db");
const putProducts = async (IdParams, update) => {
	const product = await Product.findByPk(IdParams);
	if (!product) {
		return "Product not found!";
	}
	if (update.name !== undefined) product.name = update.name;
	if (update.price !== undefined) product.price = update.price;
	if (update.image !== undefined) product.image = update.image;
	if (update.description !== undefined)
		product.description = update.description;
	if (update.stock !== undefined) product.stock = update.stock;
	if (update.active !== undefined) product.active = update.active;
	if (product.active === true) {
		if (update.stock === 0) {
			product.active = false;
		}
	}
	const normalizeText = (texto) => {
		return texto
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.toLowerCase();
	};
	//update Brand
	if (update.brand !== undefined) {
		//normaliza el brands
		const brandNormalizado = normalizeText(update.brand);
		//busca o crea el brands
		const [brand] = await Brand.findOrCreate({
			where: { name: brandNormalizado },
			defaults: { name: brandNormalizado }
		});
		if (brand.dataValues.id_Brand) {
			product.BrandIdBrand = brand.dataValues.id_Brand;
		}
	}

	//update Category
	if (update.category !== undefined) {
		//normaliza el
		const normalizeCategory = normalizeText(update.category);
		//busca o crea el Category
		const [category] = await Categories.findOrCreate({
			where: { name: normalizeCategory },
			defaults: { name: normalizeCategory }
		});
		if (category.dataValues.id_Category) {
			product.CategoryIdCategory = category.dataValues.id_Category;
		}
	}
	await product.save();

	return product;
};

module.exports = putProducts;
