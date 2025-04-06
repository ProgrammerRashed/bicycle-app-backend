import AppError from '../../errors/AppError';
import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);

  return result;
};

const getalluserintodb = async () => {
  const result = await User.find();

  return result;
};

const getSingleUserintodb = async (email: string) => {
  const result = await User.find({ email });
  return result;
};

const UpdateuserIntoDb = async (payload: Partial<TUser>, productId: string) => {
  const result = await User.findByIdAndUpdate(productId, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const DeleteuserIntoDb = async (orderId: string) => {
  const isaviable = await User.findById(orderId);
  if (!isaviable) {
    throw new AppError(404, 'order is not available');
  } else {
    const result = await User.findByIdAndDelete(orderId);
    return result;
  }
};
export const userServices = {
  createUserIntoDB,
  UpdateuserIntoDb,
  getalluserintodb,
  DeleteuserIntoDb,
  getSingleUserintodb,
};
