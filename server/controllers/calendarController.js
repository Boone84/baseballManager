const prisma = require('../prismaClient');

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await prisma.event.findMany();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching events' });
  }
};

// Create a new event
const createEvent = async (req, res) => {
  const { date, description } = req.body;
  try {
    const event = await prisma.event.create({
      data: {
        date: new Date(date),
        description,
      },
    });
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: 'Error creating event' });
  }
};

module.exports = {
  getAllEvents,
  createEvent,
};
