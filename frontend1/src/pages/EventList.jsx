import React, { useEffect, useState } from 'react';
import API from '../services/api';
import EventCard from '../components/EventCard';

export default function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => { 
    API.get('/events').then(res => setEvents(res.data)); 
  }, []);

  const register = async (id) => { 
    await API.post(`/events/${id}/register`); 
    alert('Registered'); 
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map(e => (
          <EventCard key={e._id} event={e} onRegister={register} />
        ))}
      </div>
    </div>
  );
}
