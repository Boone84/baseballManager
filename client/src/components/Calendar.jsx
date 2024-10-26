import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        setEvents(response.data);
      } catch (err) {
        console.error('Error fetching events:', err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h2>League Calendar</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p><strong>Description:</strong> {event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
