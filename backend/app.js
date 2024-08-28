import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import levelRoutes from './routes/levelRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import leaderboardRoutes from './routes/leaderboardRoutes.js';

const app = express();

app.use(express.json()); // To parse JSON bodies

connectDB();

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/levels', levelRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

export default app;
