const express = require('express');
const joi = require('joi');

const { User } = require('../models/User.js');
const authRouter = express.Router();

const userSchema = joi.object({
    email: joi.string()
        .email()
        .required(), 
    username: joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .required(),
    password: joi.string()
        .alphanum()
        .required()
})

const validateUserCredentials = (credentials) => {
    const userValidation = userSchema.validate(credentials);
    const {
        value: _credentialsObject, 
        error: _error
    } = userValidation;
    return {
        userCredentials: _credentialsObject,
        error: _error 
    };
}

authRouter.post('/login', (req, res) => {
    const {
        email,
        username,
        password
    } = req.body; 

    

    res.send('');
});

authRouter.post('/sign-up', (req, res) => {
    res.send('');
});

module.exports = authRouter;