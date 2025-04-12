import express from 'express';
import { AdminStaticsControler } from './admin.controller';
import auth from '../../middlewares/auth';
const router = express.Router();


router.get('/admin/statics',  auth('admin'), AdminStaticsControler.getAllStatics);

export const AdminRouter = router;
