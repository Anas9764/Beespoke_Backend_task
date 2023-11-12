const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Configuration
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
});

// Routes
app.use(bodyParser.json());

app.use('/', userRoutes);
app.use('/api', productRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
