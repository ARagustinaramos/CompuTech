const sortByPrice = (products, order) => {
    return products.sort((a, b) => {
        if (order === 'asc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });
};
const sortByRanking = (products, order) => {
    return products.sort((a, b) => {
        // Función para calcular el promedio de los rankings
        const calculateAverageRanking = (product) => {
            const totalRankings = product.reviews.length;
            if (totalRankings === 0) {
                return 0;
            } else if (totalRankings === 1) {
                return product.reviews[0].ranking;
            } else {
                const sumRankings = product.reviews.reduce((total, review) => total + review.ranking, 0);
                return sumRankings / totalRankings;
            }
        };

        // Calcular el promedio de los rankings de cada producto
        const aAverageRanking = calculateAverageRanking(a);
        const bAverageRanking = calculateAverageRanking(b);

        // Ordenar los productos según el promedio de rankings obtenido
        if (order === 'asc') {
            return aAverageRanking - bAverageRanking;
        } else {
            return bAverageRanking - aAverageRanking;
        }
    });
};

/*const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((sum, review) => sum + review.dataValues.ranking, 0);
    return totalRating / reviews.length;
  };*/

module.exports = { sortByPrice, sortByRanking} ;