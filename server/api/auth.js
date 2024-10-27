// server/api/auth.js
const express = require('express');
const { registerUser, loginUser, assignAdmin } = require('../controllers/authController');
const authenticateToken = require('../middleware/authMiddleware'); // Import the middleware
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.patch('/:userId/assign-admin', authenticateToken, assignAdmin);

module.exports = router;
