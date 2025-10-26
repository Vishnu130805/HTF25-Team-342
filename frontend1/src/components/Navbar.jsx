import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-lg">ClubPortal</Link>
        <div className="space-x-4">
          <Link to="/events">Events</Link>
          {user ? (
            <>
              <span>{user.name}</span>
              <button onClick={logout} className="ml-2">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
