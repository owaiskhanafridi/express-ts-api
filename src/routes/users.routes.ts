import { Router, Request, Response } from 'express';
import { getDatabaseService } from '../database/DatabaseFactory';
import { userController } from '../controllers/user.controller';

//const db = getDatabaseService();
const router = Router();
router.get('/users', userController.list);
router.post('/users', userController.create);

export default router;
