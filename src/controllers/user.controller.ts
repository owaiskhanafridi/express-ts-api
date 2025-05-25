import { Request, Response } from 'express';
import { userService } from '../services/user.service';

export const userController = {
  async create(req: Request, res: Response) {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  },

  async list(req: Request, res: Response) {
    console.log("Controller method list reached");
    const users = await userService.getAllUsers();
    res.json(users);
  }
};
