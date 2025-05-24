import express from 'express';
import apiRoutes from './routes/api';

const app = express(); //Creates an Express app instance (your server).

const PORT = 3000; //Sets the port the server will listen on (e.g., http://localhost:3000).

app.use(express.json()); //Adds middleware to parse incoming JSON request bodies.

app.use('/api', apiRoutes); //Mounts all routes defined in api.ts under the /api base path.

//Starts the server and logs a message once it's ready.
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});