// server/controllers/chatController.js
const prisma = require('../prismaClient');

// Define the getTeamChat function
const getTeamChat = async (req, res) => {
  const { teamId } = req.params;
  try {
    // Fetch all chat messages for the given team
    const chatMessages = await prisma.chat.findMany({
      where: { teamId: parseInt(teamId) },
    });
    res.json(chatMessages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching chat messages' });
  }
};

// Define the createChatMessage function (assuming you have this defined already)
const createChatMessage = async (req, res) => {
  // ... your existing createChatMessage code ...
};

// Export the functions
module.exports = {
  getTeamChat,
  createChatMessage,
};
