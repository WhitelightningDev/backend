// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const { body } = require('express-validator');
const User = require('../models/User');
const UserController = require('../controllers/UserController');

// Register
router.post(
  '/register',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }),
  ],
  UserController.register
);

// Login
router.post('/login', UserController.login);

module.exports = router;
