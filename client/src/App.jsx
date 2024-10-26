import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from "./components/Login";
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import TeamChat from './components/TeamChat';
import Calendar from './components/Calendar';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div>
        {!user ? (
          <>
            <Login onLogin={(user) => setUser(user)} />
            <Register />
          </>
        ) : (
          <>
            <nav>
              <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/chat">Team Chat</Link></li>
                <li><Link to="/calendar">Calendar</Link></li>
              </ul>
            </nav>

            <Routes>
              <Route path="/" element={<Dashboard user={user} />} />
              <Route path="/chat" element={<TeamChat teamId={user.teamId} />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
