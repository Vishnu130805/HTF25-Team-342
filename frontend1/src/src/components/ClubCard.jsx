import React from 'react';
import { Link } from 'react-router-dom';

export default function ClubCard({ club }) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-bold">{club.name}</h3>
      <p className="text-sm">{club.description}</p>
      <p className="text-xs mt-2">Owner: {club.owner?.name}</p>
      <div className="mt-2">
        <Link to={`/club/${club._id}`} className="text-blue-600">View</Link>
      </div>
    </div>
  );
}
