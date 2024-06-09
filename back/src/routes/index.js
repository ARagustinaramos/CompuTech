const { Router } = require("express");
const productRouter = require("./productRouter");
const userRouter = require("./userRoutes");
const brandsRouter = require("./brandsRoutes");
const categoriesRouter = require("./categoriesRoutes");
const reviewsRouter = require("./reviewsRoutes");
const preferebceRouter = require("./preferenceRouter")
const paypalRouter = require('./paypalRouter')
const orderRouter=require("./orderRoutes")

const router = Router();

router.use("/products", productRouter);
router.use("/users", userRouter);
router.use("/brands", brandsRouter);
router.use("/categories", categoriesRouter);
router.use("/reviews", reviewsRouter);
router.use("/create_preference", preferebceRouter);
router.use("/api", paypalRouter);
router.use("/order", orderRouter);


module.exports = router;
