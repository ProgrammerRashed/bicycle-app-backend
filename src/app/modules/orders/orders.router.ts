import express from 'express';
import { orderController } from './orders.controler';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/orders', orderController.createOrder);
router.get('/orders', auth('admin', 'customer'), orderController.getallOrder);
router.get('/orders/:email', orderController.getSingleOrderIntoDb);
router.put('/order/:orderId', auth('admin'), orderController.UpdateOrder);
router.delete('/order/:orderId', auth('admin'), orderController.DeleteOrder);

export const orderRouter = router;
