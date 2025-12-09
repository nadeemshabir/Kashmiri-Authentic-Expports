const { sendInquiryEmail } = require('../services/emailService');

const submitInquiry = async (req, res) => {
    try {
        const { name, email, phone, productInterest, message } = req.body;

        // Basic validation
        if (!name || !email || !phone || !productInterest) {
            return res.status(400).json({
                success: false,
                message: 'All required fields must be provided.'
            });
        }

        // Send email
        await sendInquiryEmail({ name, email, phone, productInterest, message });

        res.status(200).json({
            success: true,
            message: 'Inquiry submitted successfully! We will contact you soon.'
        });

    } catch (error) {
        console.error('Submit Inquiry Error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error. Please try again later.'
        });
    }
};

module.exports = { submitInquiry };
