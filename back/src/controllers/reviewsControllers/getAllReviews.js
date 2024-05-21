const fs = require('fs');
const path = require('path');
const { Review } = require('../../config/db'); 

const getReviewsFilePath = path.join(__dirname, '..', '..', '..', 'json/db.json');

const getAllReviews = async () => {
    
    try {
        const data = fs.readFileSync(getReviewsFilePath, 'utf8');
        const jsonData = JSON.parse(data);
        const reviewsData = jsonData.reviews;

        const reviews = await Promise.all(reviewsData.map(async (reviewData) => {
            const review = await Review.findOrCreate({
                where: {
                ranking: reviewData.ranking,
                comment: reviewData.comment,
            }
            });
            return review;
        }));
        return reviews;

    } catch (error) {
        console.error('Hubo un error al obtener las reviews:', error);
        throw new Error('Hubo un error interno del servidor.');
    }

};

module.exports = {getAllReviews};