import React, { useRef } from 'react';
import API from '../services/api';

export default function QRCheckin() {
  const ref = useRef();

  const submit = async (e) => {
    e.preventDefault();
    const payload = ref.current.value;
    const res = await API.post('/attendance/checkin', { qrPayload: payload });
    alert(res.data.message || 'Checked in');
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">QR Check-in</h2>
      <textarea ref={ref} placeholder="Paste QR payload here" className="w-full p-2 border mb-2" />
      <button className="w-full p-2 bg-green-600 text-white">Check In</button>
    </form>
  );
}
