const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/book.routes');
const errorMiddleware = require('./middleware/error.middleware');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/books', bookRoutes);

app.get('/',(req, res) => {
  res.send({
    activeStatus:true,
    error:false,
   });
});

// Welcome route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Book Management API' });
});

// Error handling middleware (should be last)
app.use(errorMiddleware);

module.exports = app;