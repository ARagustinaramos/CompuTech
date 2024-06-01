const deleteProductsControllers = require("../../controllers/productControllers/deleteProductController");

const deleteProducts = async (req, res) => {
    try {
        const idProduct = req.params.id;
        const { exterminateProduct } = req.body;
        console.log("deleteHandler"+exterminateProduct)
        const result = await deleteProductsControllers(
            idProduct,
            exterminateProduct
        );
        res.status(200).json({ message: result });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = deleteProducts;