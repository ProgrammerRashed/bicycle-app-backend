import { User } from '../users/user.model';
import { TLoginUser } from './auth.interface';
import httpStatus from 'http-status';
import { createToken } from './auth.utils';
import config from '../../config';
import AppError from '../../errors/AppError';
import { JwtPayload } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { TUser } from '../users/user.interface';

const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  const user = await User.isUserExistsByCustomId(payload.email);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }
  // checking if the user is already deleted
  if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    throw new AppError(401, 'Invalid credentials');

  //create token and sent to the  client
  const jwtPayload = {
    userId: user._id as string,
    email: user.email,
    role: user.role,
    name: user.firstName + ' ' + user.lastName,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    accessToken,
  };
};

const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);

  return result;
};

const changePassword = async (
  userData: JwtPayload,
  payload: { currentPassword: string; newPassword: string },
) => {
  // checking if the user is exist
  const user = await User.isUserExistsByCustomId(userData.email);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found !');
  }

  //checking if the password is correct
  if (!(await User.isPasswordMatched(payload.currentPassword, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

  //hash new password
  const newHashedPassword = await bcrypt.hash(
    payload.newPassword,
    Number(config.bcrypt_salt_rounds),
  );

  const result = await User.findOneAndUpdate(
    { email: userData.email },
    { password: newHashedPassword }
  );

  return null;
};

export const AuthServices = {
  createUserIntoDB,
  loginUser,
  changePassword,
};
