// src/middleware/error.middleware.js

const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    
    console.error(`Error: ${message}`);
    console.error(err.stack);
    
    res.status(statusCode).json({
      success: false,
      message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
  };
  
  module.exports = errorMiddleware;