const { Router } = require("express");
const { createOrder } = require('../controllers/orderControllers/CreateorderController'); 

const orderRouter = Router();

orderRouter.post('/create-order', createOrder);

module.exports = orderRouter;