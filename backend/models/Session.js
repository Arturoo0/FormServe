const mongoose = require('mongoose');

const { Schema } = mongoose;

const SessionSchema = new Schema(
    {
        sessionIdentifier: {
            type: String,
            required: True
        },
        associatedSessionEmail: {
            type: String,
            required: True
        },
        expires: {
            type: Number, 
            required: True
        }
    },
    { collection : 'sessions' }  
);

module.exports = {
    Session: mongoose.model('Session', SessionSchema)
};