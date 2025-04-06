import catchAsync from '../../utils/catchAsync';
import SendResponse from '../../utils/SendResponse';
import httpStatus from 'http-status';
import { adminServices } from './admin.service';

const BlockUser = catchAsync(async (req, res) => {
  const { userId } = req.params;

  await adminServices.BlockinusersintoDb(userId);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Blocked successfully',
  });
});

const getAllData = catchAsync(async (req, res) => {
  const result = await adminServices.getallDataintodb();

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
  });
});

export const BlockController = {
  BlockUser,
  getAllData,
};
