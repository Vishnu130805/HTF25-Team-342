import React from 'react';
import QRCode from 'qrcode.react';

export default function EventCard({ event, onRegister }) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-bold">{event.title}</h3>
      <p>{event.description}</p>
      <p className="text-sm">Club: {event.club?.name}</p>
      <button onClick={() => onRegister(event._id)} className="mt-2 p-2 bg-blue-600 text-white">Register</button>
      {event.qrCodeData && <div className="mt-2"><QRCode value={event.qrCodeData} size={128} /></div>}
    </div>
  );
}
