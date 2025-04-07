import express from 'express';
import { userController } from './user.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.put('/user/:userId',  auth('admin', 'user'), userController.updateUser);
router.delete('/user/:userId',  auth('admin', 'user'), userController.DeleteUser);
router.get('/users',  auth('admin', 'user'), userController.getallUser);
router.get(
  '/users/:email',
  auth('admin', 'user'),
  userController.getsingleuser,
);

export const userRouter = router;
