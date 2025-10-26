const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Attendance = require('../models/Attendance');
const Event = require('../models/Event');

// QR Check-in
router.post('/checkin', auth, async (req, res) => {
  const { qrPayload } = req.body;
  try {
    const event = await Event.findOne({ qrCodeData: qrPayload });
    if (!event) return res.status(404).json({ message: 'Event not found' });

    const existing = await Attendance.findOne({ event: event._id, user: req.user.id });
    if (existing) return res.json({ message: 'Already checked in' });

    const attendance = new Attendance({ event: event._id, user: req.user.id });
    await attendance.save();
    res.json({ message: 'Checked in successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
