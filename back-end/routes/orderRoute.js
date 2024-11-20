import express from 'express'
import { placeorder } from '../controllers/orderController.js'
import authMiddleware from '../middleware/auth.js'

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeorder);

export default orderRouter;