const express = require('express');
const authenticate = require('../middleware/authenticateSession.js');
const { User } = require('../models/User.js');

const formRouter = express.Router();
formRouter.use(authenticate());

formRouter.post('/create', async (req, res) => {
    console.log(req.userEmail);
    const doc = await User.findOneAndUpdate(
        { email: req.userEmail },
        { $push: { documents: {}}}
    );
    return res.send({}) 
});

module.exports = formRouter;