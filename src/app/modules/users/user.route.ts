import express from 'express';
import { userController } from './user.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.put('/user/:userId',  auth('admin', 'customer'), userController.updateUser);
router.delete('/user/:userId',  auth('admin', 'customer'), userController.DeleteUser);
router.get('/users',  auth('admin', 'customer'), userController.getallUser);
router.get(
  '/users/:email',
  auth('admin', 'customer'),
  userController.getsingleuser,
);

export const userRouter = router;
