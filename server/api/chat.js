// server/api/chat.js
const express = require('express');
const { getTeamChat, createChatMessage } = require('../controllers/chatController');
const router = express.Router();

// Route to get all chat messages for a team
router.get('/:teamId', getTeamChat);

// Route to create a chat message for a team
router.post('/:teamId', createChatMessage);

module.exports = router; // Export the router instance directly
