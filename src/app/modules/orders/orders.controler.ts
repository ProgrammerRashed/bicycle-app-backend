import catchAsync from '../../utils/catchAsync';
import SendResponse from '../../utils/SendResponse';
import httpStatus from 'http-status';
import { ordersServices } from './orders.service';

const createOrder = catchAsync(async (req, res) => {
  const orderData = req.body;

  const result = await ordersServices.AddOrderDataintoDb(orderData);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully',
    data: result,
  });
});

const getallOrder = catchAsync(async (req, res) => {
  const result = await ordersServices.getallOrderintoDb();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Orders fetched successfully',
    data: result,
  });
});

const UpdateOrder = catchAsync(async (req, res) => {
  const { orderId } = req.params;
  const updatedData = req.body;
  const result = await ordersServices.UpdateOrdertIntoDb(updatedData, orderId);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Updated Order successfully',
    data: result,
  });
});

const DeleteOrder = catchAsync(async (req, res) => {
  const { orderId } = req.params;
  const result = await ordersServices.DeleteOrderIntoDb(orderId);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delete order successfully',
    data: result,
  });
});

const getSingleOrderIntoDb = catchAsync(async (req, res) => {
  const orderId = req.params.email;
  const result = await ordersServices.getSingleOrderIntoDb(orderId);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Order fetched successfully',
    data: result,
  });
});

export const orderController = {
  createOrder,
  getallOrder,
  DeleteOrder,
  UpdateOrder,
  getSingleOrderIntoDb,
};
