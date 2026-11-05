//This file connects to MongoDB using Mongoose and starts your Express server
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 1. Middleware
app.use(cors());
app.use(express.json());

// 2. Import your routes
const projectRoutes = require('./routes/projectRoutes');

// 3. Mount the routes
// Any request starting with /api/projects will now go to projectRoutes.js
app.use('/api/projects', projectRoutes);

// Basic test route
app.get('/', (req, res) => {
  res.send('Portfolio Backend API is running...');
});

// 4. Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB successfully');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
  });