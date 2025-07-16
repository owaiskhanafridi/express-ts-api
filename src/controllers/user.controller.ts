import { Request, Response } from 'express';
import { userService } from '../services/user.service';

export const userController = {
  async create(req: Request, res: Response) {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  },

  async webhookTest(req: Request, res: Response) {
    const user = await userService.postData(req.body);
    res.status(201).json(user);
  },


  async list(req: Request, res: Response) {
    console.log("Controller method list reached");
    const users = await userService.getAllUsers();
    res.json(users);
  },

    async user(req: Request, res: Response) {
    debugger;
      console.log("Controller method user reached");
    const id = parseInt(req.params.id, 0);
    const users = await userService.getUser(id);
    res.json(users);
  }


};
