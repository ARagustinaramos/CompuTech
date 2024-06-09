const { Router } = require("express");

const postCreatePPHandler = require('../handlers/paymentsHandler/postCreatePPHandler')
const getCancelPPHandler = require('../handlers/paymentsHandler/getCancelPPHandler')
const getCapturePPHandler = require('../handlers/paymentsHandler/getCapturePPHandler')

const paypalRouter = Router();

paypalRouter.get('/create-order', postCreatePPHandler)
paypalRouter.get('/cancel-order', getCancelPPHandler)
paypalRouter.get('/capture-order', getCapturePPHandler)

module.exports = paypalRouter;
