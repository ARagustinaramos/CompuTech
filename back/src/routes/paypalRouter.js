const { Router } = require("express");

const getCreatePPHandler = require('../handlers/paymentsHandler/getCreatePPHandler')
const getCancelPPHandler = require('../handlers/paymentsHandler/getCancelPPHandler')
const getCapturePPHandler = require('../handlers/paymentsHandler/getCapturePPHandler')

const paypalRouter = Router();

paypalRouter.get('/create-order', getCreatePPHandler)
paypalRouter.get('/cancel-order', getCancelPPHandler)
paypalRouter.get('/capture-order', getCapturePPHandler)

module.exports = paypalRouter;
