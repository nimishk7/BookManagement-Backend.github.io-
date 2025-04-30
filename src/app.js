const express = require('express');

const bookRoutes = require('./routes/book.routes');
const errorMiddleware = require('./middleware/error.middleware');

const cors =require('cors');
const app = express();

// Configure CORS
app.use(cors({
  origin: "https://bookssmanagement.netlify.app",
  // origin: " http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


// res.header("Access-Control-Allow-Origin", "https://bookssmanagement.netlify.app");
// res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
// res.header("Access-Control-Allow-Credentials", "true");



// Middleware
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