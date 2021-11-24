const express = require('express');

const { User } = require('../models/User.js');
const authRouter = express.Router();

authRouter.post('/login', (req, res) => {
    res.send('');
});

module.exports = authRouter;