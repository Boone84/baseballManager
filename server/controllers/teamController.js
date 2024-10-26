const prisma = require('../prismaClient');

// Get all teams
const getAllTeams = async (req, res) => {
  try {
    const teams = await prisma.team.findMany({
      include: {
        players: true,
      },
    });
    res.json(teams);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching teams' });
  }
};

// Create a new team
const createTeam = async (req, res) => {
  const { name } = req.body;
  try {
    const team = await prisma.team.create({
      data: {
        name,
      },
    });
    res.status(201).json(team);
  } catch (err) {
    res.status(500).json({ message: 'Error creating team' });
  }
};

module.exports = {
  getAllTeams,
  createTeam,
};
