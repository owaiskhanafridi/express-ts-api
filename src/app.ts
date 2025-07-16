import express from 'express';
import userRoutes from './routes/users.routes';
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', userRoutes);

export default app;
