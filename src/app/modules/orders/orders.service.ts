import AppError from '../../errors/AppError';
import { ProductModel } from '../product/product.model';
import { TOrderData } from './orders.interface';
import { OrderModel } from './orders.model';

const AddOrderDataintoDb = async (payload: TOrderData) => {
  const productid = payload.productId;
  const quantity = payload.quantity;

  const product = await ProductModel.findOne({ _id: productid });
  if (!product) {
    throw new AppError(404, 'Product is not available');
  }

  if (product.quantity < quantity) {
    throw new AppError(400, 'Not enough stock available');
  }

  product.quantity -= quantity;

  await product.save();

  const result = await OrderModel.create(payload);

  return result;
};

const getallOrderintoDb = async () => {
  const result = await OrderModel.find();
  return result;
};

const UpdateOrdertIntoDb = async (
  payload: Partial<TOrderData>,
  productId: string,
) => {
  const result = await OrderModel.findByIdAndUpdate(productId, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const DeleteOrderIntoDb = async (orderId: string) => {
  const isaviable = await OrderModel.findById(orderId);
  if (!isaviable) {
    throw new AppError(404, 'order is not available');
  } else {
    const result = await OrderModel.findByIdAndDelete(orderId);
    return result;
  }
};

const getSingleOrderIntoDb = async (orderEmail: string) => {
  const order = await OrderModel.find({ 'user.email': orderEmail });
  if (!order) {
    throw new AppError(404, 'Order not found');
  }
  return order;
};

export const ordersServices = {
  AddOrderDataintoDb,
  getallOrderintoDb,
  UpdateOrdertIntoDb,
  DeleteOrderIntoDb,
  getSingleOrderIntoDb,
};
