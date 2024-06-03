const { Product, Review, User } = require("../../config/db");

const getProductById = async (id) => {
    try {
        // Buscar el producto por ID
        const foundProduct = await Product.findOne({
            where: { id_Product: id }
        });

        // Si el producto no se encuentra, devolver un mensaje
        if (!foundProduct) {
            return { error: "Product Id not found" };
        }

        // Buscar las reseñas asociadas al producto
        const reviews = await Review.findAll({
            where: { ProductIdProduct: id },
            include: [{ model: User, attributes: ["name", "mail"] }]
        });

        // Estructurar las reseñas
        const reviewsEstructurado = reviews.map(review => ({
           // id_Review: review.id_Review,
           // id_User: review.UserIdUser,
            name: review.User ? review.User.name : null,
          //  user_mail: review.User ? review.User.mail : null,
            comment: review.comment,
            ranking: review.ranking
        }));

        // Retornar la información del producto junto con sus reseñas
        return { product: foundProduct, reviews: reviewsEstructurado };
    } catch (error) {
        console.error("Error al buscar el producto:", error);
        throw new Error("Error al buscar el producto.");
    }
};

module.exports = getProductById;
