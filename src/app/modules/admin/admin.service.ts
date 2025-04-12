import { OrderModel } from '../orders/orders.model';
import { ProductModel } from '../product/product.model';
import { User } from '../users/user.model';

const getAllStaticsFormDB = async () => {
  // Total Sales
  const totalSalesAgg = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalSales: { $sum: '$totalPrice' },
      },
    },
  ]);
  const totalSales = totalSalesAgg[0]?.totalSales || 0;

  // Active Orders (assuming "paid")
  const activeOrders = await OrderModel.countDocuments({ paymentStatus: 'Success' });

  // Pending Orders
  const pendingOrders = await OrderModel.countDocuments({ paymentStatus: 'Pending' });

  // Inventory Count
  const totalInventory = await ProductModel.aggregate([
    {
      $group: {
        _id: null,
        totalStock: { $sum: '$stock' },
      },
    },
  ]);
  const inventory = totalInventory[0]?.totalStock || 0;

  // Low Stock Items (stock < 5)
  const lowStockItems = await ProductModel.find({ stock: { $lt: 5 } });

  // Users (assuming inactive users have no orders)
  const totalUsers = await User.find({});

  const activeUsers = totalUsers.filter(user => user.status === "active");
  const inactiveUsers = totalUsers.filter(user => user.status === "deactivate");
  

  // Month-wise Sales
  const monthWiseSales = await OrderModel.aggregate([
    {
      $group: {
        _id: {
          month: { $month: '$createdAt' },
        },
        sales: { $sum: '$totalPrice' },
      },
    },
    {
      $project: {
        _id: 0,
        name: {
          $arrayElemAt: [
            [
              '',
              'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
            ],
            '$_id.month',
          ],
        },
        sales: 1,
      },
    },
    { $sort: { name: 1 } },
  ]);

  return {
    totalSales,
    activeOrders,
    pendingOrders,
    inventory,
    lowStockItems,
    customers: {
      total: totalUsers.length,
      active: activeUsers.length,
      inactive: inactiveUsers.length,
    },
    monthWiseSales,
  };
};

export const adminServices = {
  getAllStaticsFormDB,
};
