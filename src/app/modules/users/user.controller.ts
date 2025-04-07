import catchAsync from '../../utils/catchAsync';
import SendResponse from '../../utils/SendResponse';
import { userServices } from './user.service';
import httpStatus from 'http-status';

const updateUser = catchAsync(async (req, res) => {
  const userData = req.body;
  const { userId } = req.params;
  const result = await userServices.UpdateuserIntoDb(userData, userId);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Updated successfully',
    data: result,
  });
});

const DeleteUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await userServices.DeleteuserIntoDb(userId);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product Updated successfully',
    data: result,
  });
});

const getallUser = catchAsync(async (req, res) => {
  const result = await userServices.getalluserintodb();

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'users retrived successfully',
    data: result,
  });
});

const getsingleuser = catchAsync(async (req, res) => {
  const { email } = req.params;
  const result = await userServices.getSingleUserintodb(email);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrived successfully',
    data: result,
  });
});

export const userController = {
  updateUser,
  getallUser,
  DeleteUser,
  getsingleuser,
};
