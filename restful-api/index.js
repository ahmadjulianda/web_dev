import express from 'express';
import productsRouter from './routes/products.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing JSON body
app.use(express.json());

// Routing
app.use('/api', productsRouter);

// Health check sederhana
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'RESTful API with Express.js is running' });
});

// Error handler fallback
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: true,
    message: err.message || 'Internal Server Error'
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
