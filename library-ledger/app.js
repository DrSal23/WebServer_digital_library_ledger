const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./models/db');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Connect to database
connectDB();

// Middleware to parse incoming JSON
app.use(bodyParser.json());

// Routes
app.use('/books', bookRoutes);

module.exports = app;
