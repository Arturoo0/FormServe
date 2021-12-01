const express = require('express');
const joi = require('joi');
const bcrypt = require('bcrypt');

const { User } = require('../models/User.js');
const errorMessages = require('../utils/errorMessages.js');
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

authRouter.post('/login', async (req, res) => {
    const {
        email,
        username,
        password
    } = req.body; 

    const user = await User.findOne({ email });
    if (user === null){
        return res.send(errorMessages.noAssociatedUserCredential('email'));
    }
    return res.send({});
});

authRouter.post('/sign-up', async (req, res) => {
    const {
        email,
        username,
        password
    } = req.body; 

    isExistingEmailCredential = await User.exists({ email });
    if (isExistingEmailCredential){   
        return res.send(errorMessages.foundAssociatedUserCredential());
    }

    isExistingUsernameCredential = await User.exists({ username });
    if (isExistingUsernameCredential){
        return res.send(errorMessages.foundAssociatedUserCredential());
    }

    return res.send({});
});

module.exports = authRouter;