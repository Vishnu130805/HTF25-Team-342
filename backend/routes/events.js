const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Event = require('../models/Event');
const Club = require('../models/Club');

// Create Event
router.post('/', auth, async (req, res) => {
  const { title, description, clubId, startTime, endTime } = req.body;
  try {
    const club = await Club.findById(clubId);
    if (!club) return res.status(404).json({ message: 'Club not found' });

    const event = new Event({
      title,
      description,
      club: clubId,
      startTime,
      endTime,
      createdBy: req.user.id
    });
    await event.save();
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// List Events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().populate('club', 'name').populate('createdBy', 'name');
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Register for Event
router.post('/:id/register', auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    if (!event.attendees.includes(req.user.id)) event.attendees.push(req.user.id);
    await event.save();
    res.json({ message: 'Registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
