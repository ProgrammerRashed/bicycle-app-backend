import express from 'express';
import validationRequest from '../../middlewares/validateRequest';
import { authvalidationSchema } from './auth.validation';
import { AuthController } from './auth.controller';
import auth from '../../middlewares/auth';
import { UservalidationSchema } from '../users/user.validation';

const router = express.Router();

router.post(
  '/auth/signin',
  validationRequest(authvalidationSchema.loginValidationSchema),
  AuthController.loginUser,
);

router.post(
  '/auth/signup',
  validationRequest(UservalidationSchema.createUserValidationSchema),
  AuthController.createUser,
);
router.post(
  '/auth/change-password',
  auth('customer', 'admin'),
  AuthController.changePassword,
);

export const authRouter = router;
