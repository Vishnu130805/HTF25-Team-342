import React, { useState } from 'react';
import API from '../services/api';

export default function EventCreate() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [clubId, setClubId] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    await API.post('/events', { title, description, clubId, startTime, endTime });
    alert('Event Created');
  };

  return (
    <form onSubmit={submit} className="max-w-md p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Create Event</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="w-full p-2 border mb-2" />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" className="w-full p-2 border mb-2" />
      <input value={clubId} onChange={e => setClubId(e.target.value)} placeholder="Club ID" className="w-full p-2 border mb-2" />
      <input type="datetime-local" value={startTime} onChange={e => setStartTime(e.target.value)} className="w-full p-2 border mb-2" />
      <input type="datetime-local" value={endTime} onChange={e => setEndTime(e.target.value)} className="w-full p-2 border mb-2" />
      <button className="w-full p-2 bg-indigo-600 text-white">Create</button>
    </form>
  );
}
