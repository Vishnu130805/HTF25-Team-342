import React, { useEffect, useState } from 'react';
import API from '../services/api';
import ClubCard from '../components/ClubCard';

export default function Dashboard() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => { 
    API.get('/clubs').then(res => setClubs(res.data)); 
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Clubs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {clubs.map(c => <ClubCard key={c._id} club={c} />)}
      </div>
    </div>
  );
}
