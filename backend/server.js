const express = require('express');
const cors = require('cors');
require('dotenv').config();

const inquiryRoutes = require('./routes/inquiryRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api', inquiryRoutes);

// Base route for health check
app.get('/', (req, res) => {
    res.send('Backend API is running...');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
