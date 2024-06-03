const { Router } = require("express");
const createOrderHandler = require('../handlers/orderHandler/createOrderHandler'); 
const getAllOrdersHandler = require('../handlers/orderHandler/getAllOrderHandler'); 
const getOrderByIdHandler = require('../handlers/orderHandler/getOrderByIdHandler');
const getUserOrdersHandler = require('../handlers/orderHandler/getUserOrdersHandler');
const deleteOrderHandler= require('../handlers/orderHandler/deleteOrderHandler');

const orderRouter = Router();

orderRouter.get("/",getAllOrdersHandler)
orderRouter.post("/create-order/:id", createOrderHandler);
orderRouter.get('/:orderId', getOrderByIdHandler);
orderRouter.get('/:userId/orders', getUserOrdersHandler);
orderRouter.delete('/:orderId', deleteOrderHandler);
module.exports = orderRouter;