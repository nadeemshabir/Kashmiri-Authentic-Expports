const transporter = require('../config/emailConfig');
require('dotenv').config();

const sendInquiryEmail = async (data) => {
    const { name, email, phone, productInterest, message } = data;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: `New Inquiry from ${name} - ${productInterest}`,
        html: `
            <h2>New Web Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Product Interest:</strong> ${productInterest}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = { sendInquiryEmail };
