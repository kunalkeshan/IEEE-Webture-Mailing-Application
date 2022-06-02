/**
 * Participants Model
 */

// Dependencies
const { Schema, model } = require('mongoose');

// Participant Schema
const ParticipantSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    registerNo: String,
    token: String,
    submittedAt: Date,
    paid: {
        type: Boolean,
        default: false,
    },
});

// Participant Model
const Participant = model('participant', ParticipantSchema);

// Exporting Model
module.exports = Participant;
