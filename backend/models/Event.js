const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  club: { type: mongoose.Schema.Types.ObjectId, ref: 'Club', required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  qrCodeData: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);
