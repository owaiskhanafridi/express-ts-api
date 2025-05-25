import 'dotenv/config'; 
import app from './app';

const PORT = process.env.PORT || '5000';
console.log(`Port: ${process.env.PORT}`)

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
