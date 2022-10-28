const mongoose = require('mongoose');
const dotenv = require('dotenv');
const color = require('colors');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = require('./app');
const connectDB = require('./config/db');

// Connect to database
connectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
