const { Router } = require("express");
const productRouter = require("./productRouter");
const userRouter = require("./userRoutes");
const brandsRouter = require("./brandsRoutes");
const categoriesRouter = require("./categoriesRoutes");
const reviewsRouter = require("./reviewsRoutes");
const preferebceRouter = require("./preferenceRouter")

const router = Router();

router.use("/products", productRouter);
router.use("/users", userRouter);
router.use("/brands", brandsRouter);
router.use("/categories", categoriesRouter);
router.use("/reviews", reviewsRouter);
router.use("/create_preference", preferebceRouter);


module.exports = router;
