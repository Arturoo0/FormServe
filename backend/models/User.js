const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: True
        },
        username: {
            type: String,
            required: True
        },
        password: {
            type: String,
            required: True
        }, 
        id: {
            type: String,
            default: uuidv4
        }
    }
);

module.exports = {
    UserSchema, 
    User: mongoose.model('User', UserSchema)
};