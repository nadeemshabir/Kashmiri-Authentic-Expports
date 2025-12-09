const nodemailer = require('nodemailer');
require('dotenv').config();

// Create transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this to another service logic if needed
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log("Email Server Error:", error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

module.exports = transporter;
