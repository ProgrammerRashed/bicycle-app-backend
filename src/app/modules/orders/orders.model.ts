import { model, Schema } from 'mongoose';
import { TOrderData } from './orders.interface';

const OrderSchema = new Schema<TOrderData>({
  productId: String,
  productName: String,
  productImage: String,
  productPrice: Number,
  quantity: Number,
  totalPrice: Number,
  user: {
    name: String,
    email: String,
  },
  paymentStatus: String,
  paymentId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const OrderModel = model<TOrderData>('orders', OrderSchema);
