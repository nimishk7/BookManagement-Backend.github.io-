const express = require('express');

const bookRoutes = require('./routes/book.routes');
const errorMiddleware = require('./middleware/error.middleware');

const cors =require('cors');
const app = express();

// Configure CORS
app.use(cors({
  origin: "https://bookssmanagement.netlify.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/books', bookRoutes);

// Welcome route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Book Management API' });
});

// Error handling middleware (should be last)
app.use(errorMiddleware);

module.exports = app;