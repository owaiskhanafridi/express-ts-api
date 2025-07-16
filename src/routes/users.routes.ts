import { Router, Request, Response } from 'express';
import { getDatabaseService } from '../database/DatabaseFactory';
import { userController } from '../controllers/user.controller';

//const db = getDatabaseService();
const router = Router();
router.get('/users', userController.list);
router.get('/user/:id', userController.user);
router.post('/users', userController.create);
router.post('/webhook', userController.webhookTest)

export default router;
