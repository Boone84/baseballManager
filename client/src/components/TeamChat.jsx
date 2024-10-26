import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeamChat = ({ teamId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`/api/chat/${teamId}`);
        setMessages(response.data);
      } catch (err) {
        console.error('Error fetching messages:', err);
      }
    };

    if (teamId) {
      fetchMessages();
    }
  }, [teamId]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/chat/${teamId}`, { message: newMessage });
      setMessages([...messages, response.data]);
      setNewMessage('');
    } catch (err) {
      console.error('Error sending message:', err);
    }
  };

  return (
    <div>
      <h2>Team Chat</h2>
      <div className="chat-box">
        {messages.map((msg) => (
          <div key={msg.id} className="chat-message">
            <p>{msg.message}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default TeamChat;
