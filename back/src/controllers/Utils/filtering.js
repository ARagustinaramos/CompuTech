const normalize = (text) => {
	return text
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase();
};

const filterByBrand = (products, brand) => {
	const normalizeBrand = normalize(brand);
	const newProducts = [];
	products.filter((product) => {
		if (product.BrandIdBrand.toLowerCase() === normalizeBrand) {
			return newProducts.push(product);
		}
	});
	return newProducts;
};

const filterByCategory = (products, category) => {
	const normalizeCategory = normalize(category);
	const newProduct = [];
	products.filter((product) => {
		if (product.CategoryIdCategory.toLowerCase() === normalizeCategory) {
			return newProduct.push(product);
		}
	});
	return newProduct;
};

module.exports = { filterByBrand, filterByCategory };
