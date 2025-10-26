import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import EventCreate from './pages/EventCreate';
import EventList from './pages/EventList';
import QRCheckin from './pages/QRCheckin';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/create-event" element={<EventCreate />} />
          <Route path="/qr-checkin" element={<QRCheckin />} />
        </Routes>
      </div>
    </div>
  );
}
