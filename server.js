const app = require('./src/app');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Only run server.listen in development mode
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export the app for Vercel
module.exports = app;