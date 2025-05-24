import { Router, Request, Response } from 'express';
import { CreateUserCommand } from '../models/CreateUserCommand';

const router = Router();

router.get('/hello', (req: Request, res: Response) => {
    res.json({ message: 'Hello from Express API' });
});

router.post('/echo', (req: Request, res: Response) => {
    console.log(req.body.message);
    res.json({ received: req.body });
});

router.post('/users', (req: Request<{}, {}, CreateUserCommand>, res: Response): void => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ error: 'Name, email, and password are required' });
    return;
  }

  const newUser = {
    id: Date.now(), // example id generation
    name,
    email,
  };

  console.log(`Name: ${name}, Email: ${email}`)

  res.status(201).json({
    message: 'User created successfully',
    user: newUser,
  });
});

router.get('/users/:id', (req: Request<{id: string}, {}, {}, {}, {}>, res: Response) => {
    const userId = req.params.id;
    console.log(`UserId passed: ${userId}`);

    res.status(201).json({
        userId: userId,
        user: "John Edward",
        email: "john@gmail.com"
    });
})

export default router;