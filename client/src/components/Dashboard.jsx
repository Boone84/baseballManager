// client/src/components/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <p>
        {user.teamId ? `Your Team ID: ${user.teamId}` : 'You are not currently assigned to a team.'}
      </p>

      <div>
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/chat">Team Chat</Link></li>
          <li><Link to="/calendar">League Calendar</Link></li>
          <li><Link to="/team">Your Team</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
