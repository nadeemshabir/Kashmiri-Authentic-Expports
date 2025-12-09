// const nodemailer = require('nodemailer');
// require('dotenv').config();

// // Create transporter
// const transporter = nodemailer.createTransport({
//     service: 'gmail', // You can change this to another service logic if needed
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//     }
// });

// // Verify connection configuration
// transporter.verify(function (error, success) {
//     if (error) {
//         console.log("Email Server Error:", error);
//     } else {
//         console.log("Server is ready to take our messages");
//     }
// });

// module.exports = transporter;
const nodemailer = require('nodemailer');
require('dotenv').config();

// Create transporter for Brevo (Sendinblue)
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp-relay.brevo.com",
    port: Number(process.env.EMAIL_PORT) || 465,
    secure: true, // Brevo uses SSL on port 465
    auth: {
        user: process.env.EMAIL_USER,   // e.g. 93d0e3001@smtp-brevo.com
        pass: process.env.EMAIL_PASS    // Brevo SMTP key
    }
});

// Verify connection
transporter.verify(function (error, success) {
    if (error) {
        console.log("SMTP Connection Error:", error);
    } else {
        console.log("SMTP Server is ready to send emails");
    }
});

module.exports = transporter;
