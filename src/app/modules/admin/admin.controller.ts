import catchAsync from '../../utils/catchAsync';
import SendResponse from '../../utils/SendResponse';
import httpStatus from 'http-status';
import { adminServices } from './admin.service';

const getAllStatics = catchAsync(async (req, res) => {
  const result = await adminServices.getAllStaticsFormDB();

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
  });
});

export const AdminStaticsControler = {
  getAllStatics,
};
