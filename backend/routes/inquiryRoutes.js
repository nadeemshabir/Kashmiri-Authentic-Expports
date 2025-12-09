const express = require('express');
const router = express.Router();
const inquiryController = require('../controllers/inquiryController');

// POST /api/inquiry
router.post('/inquiry', inquiryController.submitInquiry);

module.exports = router;
