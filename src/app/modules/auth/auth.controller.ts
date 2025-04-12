import catchAsync from '../../utils/catchAsync';
import SendResponse from '../../utils/SendResponse';
import httpStatus from 'http-status';
import { AuthServices } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  const { accessToken } = result;

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Login successful',
    data: {
      token: accessToken,
    },
  });
});

const createUser = catchAsync(async (req, res) => {
  const userData = req.body;
  const result = await AuthServices.createUserIntoDB(userData);

  SendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

const changePassword = catchAsync(async (req, res) => {
  const { ...passwordData } = req.body;

  const result = await AuthServices.changePassword(req.user, passwordData);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Password is updated succesfully!',
    data: result,
  });
});

export const AuthController = {
  loginUser,
  createUser,
  changePassword,
};
