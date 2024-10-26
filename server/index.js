const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./api/auth');
const teamRoutes = require('./api/teams');
const chatRoutes = require('./api/chat');
const calendarRoutes = require('./api/calendar');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Using the router instances
app.use('/api/auth', authRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/events', calendarRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
