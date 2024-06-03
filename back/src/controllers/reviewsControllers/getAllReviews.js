const { Review, User, Product } = require("../../config/db");

const getAllReviews = async () => {
    return await Review.findAll({
        include: [
            { model: User, attributes: ['name'] },
            { model: Product, attributes: ['name'] }
        ]
    });
};

module.exports = getAllReviews;
