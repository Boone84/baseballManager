const express = require('express');
const { getAllTeams, createTeam } = require('../controllers/teamController');
const router = express.Router();

// Route to get all teams
router.get('/', getAllTeams);

// Route to create a new team
router.post('/', createTeam);

module.exports = router; // Make sure you are exporting the router
