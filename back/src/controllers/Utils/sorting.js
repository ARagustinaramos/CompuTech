const sortByPrice = (products, order) => {
    return products.sort((a, b) => {
        if (order === 'asc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });
};

module.exports = { sortByPrice };