import AppError from '../../errors/AppError';
import { OrderModel } from '../orders/orders.model';
import { ProductModel } from '../product/product.model';

import { User } from '../users/user.model';

const BlockinusersintoDb = async (id: string) => {
  const isExisteduser = await User.findById(id);

  if (!isExisteduser) {
    throw new AppError(404, 'user not found');
  }

  const isBlocked = isExisteduser?.isBlocked;

  if (isBlocked) {
    throw new AppError(400, 'user is already blocked');
  }

  const result = await User.findByIdAndUpdate(
    id,
    { isBlocked: true },
    {
      new: true,
      runValidators: true,
    },
  );

  return result;
};

const getallDataintodb = async () => {
  const totalUser = await User.countDocuments();
  const totalProduct = await ProductModel.countDocuments();

  const totalorderaggregate = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalOrders: { $sum: 1 },
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);

  const totalorder = totalorderaggregate[0]?.totalOrders || 0;
  const totalRevenue = totalorderaggregate[0]?.totalRevenue || 0;

  return {
    totalProduct,
    totalUser,
    totalRevenue,
    totalorder,
  };
};

export const adminServices = {
  BlockinusersintoDb,
  getallDataintodb,
};
