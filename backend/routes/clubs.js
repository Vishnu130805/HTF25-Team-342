const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Club = require('../models/Club');

// Create Club
router.post('/', auth, async (req, res) => {
  const { name, description } = req.body;
  try {
    const club = new Club({ name, description, owner: req.user.id, members: [req.user.id] });
    await club.save();
    res.json(club);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get All Clubs
router.get('/', async (req, res) => {
  try {
    const clubs = await Club.find().populate('owner', 'name');
    res.json(clubs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
