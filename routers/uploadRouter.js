const express = require('express');
const multer = require('multer')
const path = require('path')
const router = express.Router();

const authController = require('../controllers/authController');

router
    .route('/login')
    .post(authController.upload)

module.exports = router;