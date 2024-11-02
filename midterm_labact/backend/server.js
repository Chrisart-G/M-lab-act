// server.js
const express = require('express');
const cors = require('cors');
const Routes = require('./routes/Routes'); // Ensure this path is correct

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

// Use the routes
app.use('/api', Routes); // Prefix your routes with '/api'

// Start the server
const PORT = 6969;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});