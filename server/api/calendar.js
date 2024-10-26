const express = require('express');
const { getAllEvents, createEvent } = require('../controllers/calendarController');
const router = express.Router();

// Route to get all events
router.get('/', getAllEvents);

// Route to create a new event
router.post('/', createEvent);

module.exports = router;
