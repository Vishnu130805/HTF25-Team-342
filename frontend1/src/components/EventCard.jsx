import React from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function EventCard({ event, onRegister }) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p>{event.description}</p>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Location: {event.location}</p>

      {/* ✅ Fix QRCode usage */}
      <div className="mt-2">
        <QRCodeCanvas value={event._id} size={128} />
      </div>

      <button
        onClick={() => onRegister(event._id)}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Register
      </button>
    </div>
  );
}
