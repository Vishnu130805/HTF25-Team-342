const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  checkInTime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
